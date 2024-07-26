"use client"

import { Checkbox } from "@/components/ui/checkbox"

export function CheckboxWithLabel({ label }: Readonly<{ label: string }>) {
  return (
    <div className="items-top flex space-x-4">
      <Checkbox id="terms1" />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="terms1"
          className=" font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          { label }
        </label>
      </div>
    </div>
  )
}
