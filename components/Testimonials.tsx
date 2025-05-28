'use client'

import React from 'react'
import { Star, Quote } from 'lucide-react'
import ScrollArrow from './ScrollArrow'

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Diana a transformé notre dynamique familiale. Son approche professionnelle et bienveillante nous a permis de retrouver l'harmonie que nous cherchions depuis longtemps.",
      author: "Marie L.",
      role: "Mère de famille",
      rating: 5,
      category: "Coaching Familial"
    },
    {
      quote: "Les formations anti-racisme de Diana sont remarquables. Elle arrive à sensibiliser avec tact et professionnalisme, créant un véritable impact dans notre organisation.",
      author: "Jean-Pierre M.",
      role: "Directeur RH",
      rating: 5,
      category: "Formation Anti-Racisme"
    },
    {
      quote: "L'accompagnement en intelligence émotionnelle avec Diana a été révélateur. Grâce au framework EQ 2.0, j'ai développé une meilleure compréhension de mes émotions et amélioré significativement mes relations professionnelles.",
      author: "Sophie & Marc",
      role: "Cadres dirigeants",
      rating: 5,
      category: "Intelligence Émotionnelle"
    },
    {
      quote: "Professionnelle, empathique et efficace. Diana a su nous accompagner avec justesse dans notre démarche de développement personnel.",
      author: "Thomas R.",
      role: "Cadre dirigeant",
      rating: 5,
      category: "Coaching Professionnel"
    }
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Formation Anti-Racisme':
        return 'bg-antiracism-light text-antiracism-dark'
      case 'Coaching Familial':
        return 'bg-family-light text-family-dark'
      case 'Intelligence Émotionnelle':
        return 'bg-couples-light text-couples-dark'
      default:
        return 'bg-primary-100 text-primary-700'
    }
  }

  return (
    <section id="testimonials" className="section-padding bg-primary-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Témoignages Clients
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez les retours de mes clients sur leur expérience d'accompagnement 
            et les transformations réalisées ensemble.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              {/* En-tête avec catégorie */}
              <div className="flex items-center justify-between mb-6">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(testimonial.category)}`}>
                  {testimonial.category}
                </span>
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Citation */}
              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary-200" />
                <blockquote className="testimonial-quote pl-6">
                  "{testimonial.quote}"
                </blockquote>
              </div>

              {/* Auteur */}
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  {testimonial.author.charAt(0)}
                </div>
                <div className="testimonial-info">
                  <div className="testimonial-name">{testimonial.author}</div>
                  <div className="testimonial-role">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-primary-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary-800 mb-4">
              Rejoignez mes clients satisfaits
            </h3>
            <p className="text-primary-600 mb-6">
              Commencez votre transformation avec une consultation gratuite de 30 minutes.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary text-lg px-8 py-4"
            >
              Réserver ma consultation
            </button>
          </div>
        </div>
      </div>
      
      {/* Flèche de navigation vers Services */}
      <ScrollArrow 
        targetSection="services" 
        variant="accent"
      />
    </section>
  )
} 