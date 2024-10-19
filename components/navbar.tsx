"use client"

import * as React from "react"
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
import { Switch } from "@/components/ui/switch"

export default function Navbar() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="container mx-auto px-4 mt-6">
      <nav className="rounded-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-lg border p-2">
        <div className="mx-auto px-4">
          <div className="flex h-14 items-center justify-between">
            <div className="flex items-center">
              <a href="/" className="text-2xl font-bold text-primary mr-4">
                Logo
              </a>
              <div className="hidden md:flex space-x-1">
                <Button variant="ghost" className="rounded-full">Home</Button>
                <Button variant="ghost" className="rounded-full">About</Button>
                <Button variant="ghost" className="rounded-full">Services</Button>
                <Button variant="ghost" className="rounded-full">Contact</Button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Switch
                  id="theme-switch"
                  checked={theme === "dark"}
                  onCheckedChange={() => setTheme(theme === "dark" ? "light" : "dark")}
                />
                <label htmlFor="theme-switch" className="sr-only">
                  Switch theme
                </label>
                {theme === "dark" ? (
                  <Moon className="h-4 w-4 text-primary" />
                ) : (
                  <Sun className="h-4 w-4 text-primary" />
                )}
              </div>
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
                  <DropdownMenuItem className="rounded-lg">Profile</DropdownMenuItem>
                  <DropdownMenuItem className="rounded-lg">Settings</DropdownMenuItem>
                  <DropdownMenuItem className="rounded-lg">Logout</DropdownMenuItem>
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