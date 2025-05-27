'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X, Award, Phone } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  const navItems = [
    { label: 'Accueil', id: 'hero' },
    { label: 'À propos', id: 'about' },
    { label: 'Témoignages', id: 'testimonials' },
    { label: 'Services', id: 'services' },
    { label: 'Contact', id: 'contact' }
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-primary-100' 
        : 'bg-transparent'
    }`}>
      <div className="container-max">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-accent-blue to-accent-indigo rounded-lg flex items-center justify-center">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className={`text-xl font-bold transition-colors ${
                isScrolled ? 'text-primary-900' : 'text-primary-900'
              }`}>
                Diana Tape
              </h1>
              <p className={`text-sm transition-colors ${
                isScrolled ? 'text-primary-600' : 'text-primary-700'
              }`}>
                Coach Professionnelle
              </p>
            </div>
          </div>

          {/* Navigation desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors hover:text-accent-blue ${
                  isScrolled ? 'text-primary-700' : 'text-primary-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA et menu mobile */}
          <div className="flex items-center space-x-4">
            {/* CTA Desktop */}
            <button
              onClick={() => scrollToSection('contact')}
              className="hidden lg:flex items-center space-x-2 btn-primary"
            >
              <Phone className="w-4 h-4" />
              <span>Consultation gratuite</span>
            </button>

            {/* Menu mobile toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled 
                  ? 'text-primary-700 hover:bg-primary-100' 
                  : 'text-primary-800 hover:bg-white/20'
              }`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-primary-100 shadow-lg">
            <nav className="py-4 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-3 text-primary-700 hover:bg-primary-50 hover:text-accent-blue transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 pt-4 border-t border-primary-100">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full btn-primary flex items-center justify-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Consultation gratuite</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
} 