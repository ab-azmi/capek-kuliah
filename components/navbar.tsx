"use client"

import { useState } from "react"
import Link from "next/link"
import { Home, Menu, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ModeToggle } from "@/components/dark-mode-toggle"
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full">
      {/* Desktop Navbar */}
      <div className="hidden md:flex flex-col gap-8 lg:gap-14 px-4 md:px-20 lg:px-36 pt-4 pb-0 relative overflow-hidden">
        <div className="max-w-5xl flex items-center justify-between w-full py-2">
          <Link href="/" className="font-semibold text-lg flex items-center">
            <Image src="/icon.ico" alt="Capek Kuliah Logo" className="h-6 w-6 inline-block mr-2" width={64} height={64} />
            Capek Kuliah
          </Link>
          <div className="flex space-x-2">
            <Button variant="link" asChild>
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Home
              </Link>
            </Button>
            <Button variant="link" asChild>
              <Link href="/dosen">
                <User className="mr-2 h-4 w-4" />
                Dosen
              </Link>
            </Button>
            <ModeToggle/>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex h-16 items-center justify-between px-4">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="top" className="pt-10">
            <div className="flex flex-col space-y-4 items-start">
              <Button variant="link" className="px-3" asChild onClick={() => setIsOpen(false)}>
                <Link href="/">
                  <Home className="mr-2 h-4 w-4" />
                  Home
                </Link>
              </Button>
              <Button variant="link" className="px-3" asChild>
                <Link href="/dosen">
                  <User className="mr-2 h-4 w-4" />
                  Dosen
                </Link>
              </Button>
              <ModeToggle/>
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex-1 flex justify-center">
          <Link href="/" className="font-semibold text-lg flex items-center">
            <Image src="/icon.ico" alt="Capek Kuliah Logo" className="h-6 w-6 inline-block mr-2" width={64} height={64} />
            Capek Kuliah
          </Link>
        </div>
        <div className="w-10"></div> {/* Empty div for balance */}
      </div>
    </nav>
  )
}
