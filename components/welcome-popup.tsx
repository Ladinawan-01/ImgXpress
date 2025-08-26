"use client"

import { useState, useEffect } from "react"
import { X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Logo } from "@/components/logo"

export function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hasSeenWelcome = localStorage.getItem("imgxpress-welcome-seen")
      if (!hasSeenWelcome) {
        const timer = setTimeout(() => {
          setIsOpen(true)
        }, 1000)
        return () => clearTimeout(timer)
      }
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    if (typeof window !== 'undefined') {
      localStorage.setItem("imgxpress-welcome-seen", "true")
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative mx-4 w-full max-w-md rounded-lg bg-background p-6 shadow-xl border">
        <Button variant="ghost" size="sm" className="absolute right-2 top-2 h-8 w-8 p-0" onClick={handleClose}>
          <X className="h-4 w-4" />
        </Button>

        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <Logo className="h-16 w-16" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-primary">Welcome to ImgXpress!</h2>
            <div className="flex items-center justify-center gap-1 text-amber-500">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Fast • Secure • Free</span>
              <Sparkles className="h-4 w-4" />
            </div>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed">
            Convert your images between JPG, PNG, WebP, and PDF formats instantly. No registration required, completely
            free, and your files never leave your device.
          </p>

          <div className="space-y-2 pt-2">
            <Button onClick={handleClose} className="w-full">
              Start Converting
            </Button>
            <p className="text-xs text-muted-foreground">This popup won't show again</p>
          </div>
        </div>
      </div>
    </div>
  )
}
