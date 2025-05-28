'use client'

import React from 'react'
import { Star, Mail, Phone, MapPin, Award } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container-max">
        {/* Section principale */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* À propos */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-blue to-accent-indigo rounded-lg flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Diana Tape</h3>
                  <p className="text-primary-300">Coach Professionnelle Certifiée</p>
                </div>
              </div>
              
              <p className="text-primary-200 leading-relaxed mb-6">
                Accompagnement professionnel pour les familles, organisations et développement 
                de l'intelligence émotionnelle vers l'excellence relationnelle et l'inclusion. Une approche basée sur 
                l'expertise, l'empathie et des méthodes éprouvées.
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="bg-primary-800 text-primary-200 px-3 py-1 rounded-lg text-sm border border-primary-700">
                  ICICOACH Genève
                </span>
                <span className="bg-primary-800 text-primary-200 px-3 py-1 rounded-lg text-sm border border-primary-700">
                  EQ360 Certifiée
                </span>
                <span className="bg-primary-800 text-primary-200 px-3 py-1 rounded-lg text-sm border border-primary-700">
                  Train the Trainers
                </span>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-xl font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                <li>
                  <span className="text-primary-200 hover:text-white transition-colors cursor-pointer">
                    Formations Anti-Racisme
                  </span>
                </li>
                <li>
                  <span className="text-primary-200 hover:text-white transition-colors cursor-pointer">
                    Coaching Familial
                  </span>
                </li>
                <li>
                  <span className="text-primary-200 hover:text-white transition-colors cursor-pointer">
                    Intelligence Émotionnelle
                  </span>
                </li>
                <li>
                  <span className="text-primary-200 hover:text-white transition-colors cursor-pointer">
                    Consultation Gratuite
                  </span>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xl font-semibold mb-6">Contact</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-accent-blue" />
                  <a 
                    href="mailto:coach@dianatape.com"
                    className="text-primary-200 hover:text-white transition-colors"
                  >
                    coach@dianatape.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-accent-blue" />
                  <a 
                    href="tel:+352691204681"
                    className="text-primary-200 hover:text-white transition-colors"
                  >
                    +352 691 204 681
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-accent-blue" />
                  <span className="text-primary-200">Luxembourg</span>
                </div>
              </div>

              {/* Call to action */}
              <div className="mt-6">
                <a 
                  href="mailto:coach@dianatape.com"
                  className="inline-flex items-center space-x-2 bg-accent-blue hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span>Consultation gratuite</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Section du bas */}
        <div className="border-t border-primary-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-300 text-sm">
              © 2024 Diana Tape. Tous droits réservés.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-primary-300">
              <span>Coaching Professionnel</span>
              <span>•</span>
              <span>Excellence & Bienveillance</span>
              <span>•</span>
              <span>Résultats Durables</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 