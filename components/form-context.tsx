"use client"

import { createContext, useContext, type ReactNode } from "react"
import { useFormData, type FormData } from "../hooks/useFormData"

interface FormContextType {
  formData: FormData
  updateField: (field: keyof FormData, value: string) => void
  replaceTemplate: (template: string) => string
  isLoaded: boolean
}

const FormContext = createContext<FormContextType | undefined>(undefined)

export function FormProvider({ children }: { children: ReactNode }) {
  const formUtils = useFormData()

  return <FormContext.Provider value={formUtils}>{children}</FormContext.Provider>
}

export function useForm() {
  const context = useContext(FormContext)
  if (context === undefined) {
    throw new Error("useForm must be used within a FormProvider")
  }
  return context
}
