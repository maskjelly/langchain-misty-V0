"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, Moon, Sun, User } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [isMounted, setIsMounted] = React.useState(false)

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <div className="container mx-auto px-4 mt-6">
      <nav className="rounded-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-lg border p-2">
        <div className="mx-auto px-4">
          <div className="flex h-14 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-primary mr-4">
               Misti 
              </Link>
              <div className="hidden md:flex space-x-1">
                <Button variant="ghost" className="rounded-full" asChild>
                  <Link href="/">Home</Link>
                </Button>
                <Button variant="ghost" className="rounded-full" asChild>
                  <Link href="/about">About</Link>
                </Button>
                <Button variant="ghost" className="rounded-full" asChild>
                  <Link href="/services">Services</Link>
                </Button>
                <Button variant="ghost" className="rounded-full" asChild>
                  <Link href="/contact">Contact</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    {isMounted && theme === "dark" ? (
                      <Moon className="h-5 w-5" />
                    ) : (
                      <Sun className="h-5 w-5" />
                    )}
                    <span className="sr-only">Toggle theme</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setTheme("light")}>
                    Light
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTheme("system")}>
                    System
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Separator orientation="vertical" className="h-6" />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <User className="h-5 w-5" />
                    <span className="sr-only">User menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 rounded-xl">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="rounded-lg">
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem className="rounded-lg">
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem className="rounded-lg">
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button variant="ghost" size="icon" className="md:hidden rounded-full">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}