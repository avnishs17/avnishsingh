"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col space-y-4 mt-8">
          <Link
            href="/"
            className="text-lg font-medium hover:text-primary transition-colors navbar-title"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-lg font-medium hover:text-primary transition-colors navbar-title"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            href="/research"
            className="text-lg font-medium hover:text-primary transition-colors navbar-title"
            onClick={() => setOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/publications"
            className="text-lg font-medium hover:text-primary transition-colors navbar-title"
            onClick={() => setOpen(false)}
          >
            Publications
          </Link>
          <Link
            href="/contact"
            className="text-lg font-medium hover:text-primary transition-colors navbar-title"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}
