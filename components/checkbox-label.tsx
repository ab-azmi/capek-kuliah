"use client"

import { Checkbox } from "@/components/ui/checkbox"
import { useState, useEffect } from "react"

export function CheckboxWithLabel({ label }: Readonly<{ label: string }>) {
  const [isChecked, setIsChecked] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedState = localStorage.getItem(`checkbox-${label}`);
      if (savedState !== null) {
        setIsChecked(savedState === 'true');
      }
    }
  }, [label]);

  // Save checkbox state to localStorage when it changes
  const handleChange = (checked: boolean | "indeterminate") => {
    const newState = checked === true;
    setIsChecked(newState);
    localStorage.setItem(`checkbox-${label}`, String(newState));
  };
  

  return (
    <div className="items-top flex space-x-4">
      <Checkbox 
        id={`checkbox-${label}`}
        checked={isChecked}
        onCheckedChange={handleChange}
      />
      
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
