'use client'

import React from 'react'
import { ChevronDown } from 'lucide-react'

interface ScrollArrowProps {
  targetSection: string
  variant?: 'primary' | 'secondary' | 'accent'
}

export default function ScrollArrow({ targetSection, variant = 'primary' }: ScrollArrowProps) {
  const scrollToSection = () => {
    const element = document.getElementById(targetSection)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-accent-blue hover:bg-blue-600 text-white'
      case 'secondary':
        return 'bg-white hover:bg-primary-50 text-primary-700 border border-primary-200'
      case 'accent':
        return 'bg-accent-indigo hover:bg-indigo-600 text-white'
      default:
        return 'bg-accent-blue hover:bg-blue-600 text-white'
    }
  }

  return (
    <div className="flex justify-center py-8">
      <button
        onClick={scrollToSection}
        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl animate-bounce-slow ${getVariantStyles()}`}
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </div>
  )
} 