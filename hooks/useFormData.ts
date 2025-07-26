"use client"

import { useState, useEffect, useCallback } from "react"

export interface FormData {
  nama: string
  nim: string
  angkatan: string
  pembimbing: string
  penguji1: string
  penguji2: string
  program: "TI" | "SI" // Add this new field
}

const defaultFormData: FormData = {
  nama: "",
  nim: "",
  angkatan: "",
  pembimbing: "",
  penguji1: "",
  penguji2: "",
  program: "TI", // Add default value
}

// Add these helper functions before the useFormData function
function getTimeBasedGreeting(): string {
  const hour = new Date().getHours()

  if (hour >= 5 && hour < 11) {
    return "Selamat pagi"
  } else if (hour >= 11 && hour < 15) {
    return "Selamat siang"
  } else if (hour >= 15 && hour < 18) {
    return "Selamat sore"
  } else {
    return "Selamat malam"
  }
}

function getKaprodi(program: "TI" | "SI"): string {
  return program === "TI" ? "Pak Alamsyah" : "Pak Riza"
}

export function useFormData() {
  const [formData, setFormData] = useState<FormData>(defaultFormData)
  const [isLoaded, setIsLoaded] = useState(false)

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("skripsi-form-data")
    if (saved) {
      try {
        setFormData(JSON.parse(saved))
      } catch (error) {
        console.error("Error loading form data:", error)
      }
    }
    setIsLoaded(true)
  }, [])

  // Debounced save to localStorage
  useEffect(() => {
    if (!isLoaded) return

    const timeoutId = setTimeout(() => {
      localStorage.setItem("skripsi-form-data", JSON.stringify(formData))
    }, 500) // 500ms debounce

    return () => clearTimeout(timeoutId)
  }, [formData, isLoaded])

  const updateField = useCallback((field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }, [])

  const replaceTemplate = useCallback(
    (template: string): string => {
      const greeting = getTimeBasedGreeting()
      const kaprodi = getKaprodi(formData.program)

      return template
        .replace(/{greeting}/g, greeting)
        .replace(/Selamat siang/g, greeting) // Replace hardcoded greetings
        .replace(/Selamat sore/g, greeting)
        .replace(/Selamat malam/g, greeting)
        .replace(/{nama}/g, formData.nama || "{nama}")
        .replace(/{name}/g, formData.nama || "{name}")
        .replace(/{nim}/g, formData.nim || "{nim}")
        .replace(/{angkatan}/g, formData.angkatan || "{angkatan}")
        .replace(/{pembimbing}/g, formData.pembimbing || "{pembimbing}")
        .replace(/{nama penguji lain}/g, formData.penguji1 || "{nama penguji lain}")
        .replace(/{kaprodi}/g, kaprodi)
        .replace(/{program}/g, formData.program === "TI" ? "Teknik Informatika" : "Sistem Informasi")
        .replace(/Pak Alamsyah/g, kaprodi) // Replace hardcoded kaprodi references
    },
    [formData],
  )

  return {
    formData,
    updateField,
    replaceTemplate,
    isLoaded,
  }
}
