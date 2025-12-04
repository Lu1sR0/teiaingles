"use client"

import { Button } from "@/components/ui/button"
import { Globe, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useState } from "react"

export function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false)

  const handlePortugueseClick = () => {
    window.location.href = "https://teiadecriadores.com"
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="group relative overflow-hidden border-2 border-gray-200 hover:border-teia-purple transition-all duration-300 font-akzidenz font-black bg-white hover:bg-gray-50"
        >
          <Globe className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:rotate-12" />
          <span className="font-bold">EN</span>
          <ChevronDown className={`h-3 w-3 ml-1 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
        </Button>
      </DropdownMenuTrigger>
        <DropdownMenuContent
        align="end"
        className="w-48 border-2 border-gray-100 shadow-xl bg-white/95 backdrop-blur-md font-akzidenz font-black"
      >
        <DropdownMenuItem
          disabled
          className="cursor-default opacity-100 bg-teia-green/10 border-l-4 border-teia-green"
        >
          <span className="text-2xl mr-3">🇺🇸</span>
          <div className="flex flex-col">
            <span className="font-bold text-gray-900">English</span>
            <span className="text-xs text-gray-500">Current</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={handlePortugueseClick}
          className="hover:bg-teia-purple/10 hover:border-l-4 hover:border-teia-purple transition-all duration-200 cursor-pointer"
        >
          <span className="text-2xl mr-3">🇧🇷</span>
          <div className="flex flex-col">
            <span className="font-bold text-gray-900">Português</span>
            <span className="text-xs text-gray-500">Visit original</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
