"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm } from "./form-context"
import type { FormData } from "../hooks/useFormData"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function FormFields() {
  const { formData, updateField } = useForm()

  const fields: Array<{
    key: keyof Omit<FormData, "program">
    label: string
    placeholder: string
  }> = [
    { key: "nama", label: "Nama Lengkap", placeholder: "Masukkan nama lengkap" },
    { key: "nim", label: "NIM", placeholder: "Masukkan NIM" },
    { key: "angkatan", label: "Angkatan", placeholder: "Contoh: 2020" },
    { key: "pembimbing", label: "Dosen Pembimbing", placeholder: "Nama dosen pembimbing" },
    { key: "penguji1", label: "Dosen Penguji 1", placeholder: "Nama dosen penguji 1" },
    { key: "penguji2", label: "Dosen Penguji 2", placeholder: "Nama dosen penguji 2" },
  ]

  return (
    <div className="grid grid-cols-1 gap-4 p-4 bg-muted/30 rounded-lg border">
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
          onValueChange={(value: "TI" | "SI") => updateField("program", value)}
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

      {/* Other Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {fields.map(({ key, label, placeholder }) => (
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
    </div>
  )
}
