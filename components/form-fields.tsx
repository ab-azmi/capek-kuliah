"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm } from "./form-context"
import type { FormData } from "../hooks/useFormData"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { dosenTI, dosenSI } from "../data/dosen"
import { useMemo } from "react"

export function FormFields() {
  const { formData, updateField } = useForm()

  const personalFields: Array<{
    key: keyof Omit<FormData, "program">
    label: string
    placeholder: string
  }> = [
    { key: "nama", label: "Nama Lengkap", placeholder: "Masukkan nama lengkap" },
    { key: "nim", label: "NIM", placeholder: "Masukkan NIM" },
    { key: "angkatan", label: "Angkatan", placeholder: "Contoh: 2020" },
  ]

  // Get available lecturers based on selected program and sort alphabetically
  const availableLecturers = useMemo(() => {
    const lecturers = formData.program === "TI" ? dosenTI : dosenSI
    return [...lecturers].sort((a, b) => a.name.localeCompare(b.name))
  }, [formData.program])

  const lecturerFields: Array<{
    nameKey: keyof Pick<FormData, "pembimbing" | "penguji1" | "penguji2">
    label: string
  }> = [
    {
      nameKey: "pembimbing",
      label: "Dosen Pembimbing",
    },
    {
      nameKey: "penguji1",
      label: "Dosen Penguji 1",
    },
    {
      nameKey: "penguji2",
      label: "Dosen Penguji 2",
    },
  ]

  const handleLecturerSelect = (
    lecturerName: string,
    nameKey: keyof Pick<FormData, "pembimbing" | "penguji1" | "penguji2">,
  ) => {
    const selectedLecturer = availableLecturers.find((dosen) => dosen.name === lecturerName)
    if (selectedLecturer) {
      updateField(nameKey, selectedLecturer.name)
    }
  }

  const getSelectedLecturer = (nameKey: keyof Pick<FormData, "pembimbing" | "penguji1" | "penguji2">) => {
    return availableLecturers.find((dosen) => dosen.name === formData[nameKey])
  }

  return (
    <div className="grid grid-cols-1 gap-4 p-4 bg-muted/30 rounded-lg border max-w-3xl">
      <div className="mb-2">
        <h3 className="font-semibold text-lg">Informasi Pribadi</h3>
        <p className="text-sm text-muted-foreground">
          Isi data di bawah ini untuk otomatis mengganti placeholder di template chat
        </p>
      </div>

      {/* Program Selection */}
      <div className="space-y-3 p-3 bg-background rounded border">
        <Label className="text-base font-medium">Program Studi</Label>
        <RadioGroup
          value={formData.program}
          onValueChange={(value: "TI" | "SI") => {
            updateField("program", value)
            // Reset lecturer selections when program changes
            updateField("pembimbing", "")
            updateField("penguji1", "")
            updateField("penguji2", "")
          }}
          className="flex gap-6"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="TI" id="ti" />
            <Label htmlFor="ti" className="cursor-pointer">
              Teknik Informatika (Kaprodi: Pak Alamsyah)
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="SI" id="si" />
            <Label htmlFor="si" className="cursor-pointer">
              Sistem Informasi (Kaprodi: Pak Riza)
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Personal Information */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {personalFields.map(({ key, label, placeholder }) => (
          <div key={key} className="space-y-2">
            <Label htmlFor={key}>{label}</Label>
            <Input
              id={key}
              value={formData[key]}
              onChange={(e) => updateField(key, e.target.value)}
              placeholder={placeholder}
            />
          </div>
        ))}
      </div>

      {/* Lecturer Information */}
      <div className="space-y-4">
        <Label className="text-base font-medium">Informasi Dosen</Label>
        {lecturerFields.map(({ nameKey, label }) => {
          const selectedLecturer = getSelectedLecturer(nameKey)

          return (
            <div key={nameKey} className="p-3 bg-background rounded border space-y-3">
              <Label className="font-medium">{label}</Label>

              {/* Lecturer Selection */}
              <div className="space-y-2">
                <Label htmlFor={nameKey} className="text-sm">
                  Pilih Dosen
                </Label>
                <Select value={formData[nameKey]} onValueChange={(value) => handleLecturerSelect(value, nameKey)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih dosen..." />
                  </SelectTrigger>
                  <SelectContent>
                    {availableLecturers.map((dosen) => (
                      <SelectItem key={dosen.alt} value={dosen.name}>
                        <span>{dosen.name}</span>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Display selected lecturer info */}
              {selectedLecturer && (
                <div className="p-2 bg-muted/50 rounded text-sm space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Nama:</span>
                    <span>{selectedLecturer.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">Email:</span>
                    <span className="text-blue-600">{selectedLecturer.email}</span>
                  </div>
                  {selectedLecturer.phone && (
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Phone:</span>
                      <span>{selectedLecturer.phone}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
