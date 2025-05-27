'use client'

import React from 'react'
import { ArrowRight, CheckCircle, Award } from 'lucide-react'
import ScrollArrow from './ScrollArrow'

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="min-h-screen gradient-bg flex flex-col justify-center relative">
      <div className="container-max section-padding">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Titre principal */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-primary-900 leading-tight">
              Diana Tape
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-600 font-medium max-w-3xl mx-auto">
              Accompagnement professionnel pour les familles, organisations et développement 
              de l'intelligence émotionnelle vers l'excellence relationnelle et l'inclusion
            </p>
          </div>

          {/* Domaines d'expertise */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-primary-100">
              <div className="w-12 h-12 bg-antiracism-main rounded-lg flex items-center justify-center mb-4 mx-auto">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
              <h3 className="font-semibold text-primary-800 mb-2">Formation Anti-Racisme</h3>
              <p className="text-sm text-primary-600">Sensibilisation et formation pour tous publics</p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-primary-100">
              <div className="w-12 h-12 bg-family-main rounded-lg flex items-center justify-center mb-4 mx-auto">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
              <h3 className="font-semibold text-primary-800 mb-2">Coaching Familial</h3>
              <p className="text-sm text-primary-600">Relations parent-enfant harmonieuses</p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-primary-100">
              <div className="w-12 h-12 bg-couples-main rounded-lg flex items-center justify-center mb-4 mx-auto">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
              <h3 className="font-semibold text-primary-800 mb-2">Intelligence Émotionnelle</h3>
              <p className="text-sm text-primary-600">Développement personnel et professionnel</p>
            </div>
          </div>

          {/* Bienfaits des services */}
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-primary-700 leading-relaxed">
              Mes accompagnements vous permettent de <strong>créer des environnements inclusifs </strong> 
              dans vos organisations, de <strong>renforcer les liens familiaux</strong> pour une harmonie 
              durable, et de <strong>développer votre intelligence émotionnelle</strong> pour des relations 
              plus épanouies et une performance optimisée.
            </p>
          </div>

          {/* Call to actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToContact}
              className="btn-primary text-lg px-8 py-4 flex items-center space-x-2"
            >
              <span>Consultation gratuite</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary text-lg px-8 py-4"
            >
              Découvrir mes services
            </button>
          </div>
        </div>
      </div>
      
      {/* Flèche de navigation vers About */}
      <ScrollArrow 
        targetSection="about" 
        variant="secondary"
      />
    </section>
  )
} 