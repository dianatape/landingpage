'use client'

import React from 'react'
import { Euro, Clock, Users, Heart, CheckCircle } from 'lucide-react'

export default function Pricing() {
  const pricingPlans = [
    {
      id: 'antiracism',
      title: 'Formations Anti-Racisme',
      subtitle: 'Pour établissements et organisations',
      price: '350',
      unit: '€/heure',
      emoji: '🌍',
      description: 'Formations et ateliers sur mesure pour sensibiliser à la diversité et l\'inclusion',
      features: [
        'Contenu adapté à votre public',
        'Approche ludique et interactive',
        'Supports pédagogiques inclus',
        'Suivi post-formation',
        'Certification de participation'
      ],
      bgColor: 'bg-antiracism-light',
      textColor: 'text-antiracism-dark',
      accentColor: 'bg-antiracism-main',
      popular: false
    },
    {
      id: 'family',
      title: 'Coaching Familial',
      subtitle: 'Relations parent-enfant harmonieuses',
      price: '150',
      unit: '€/séance',
      emoji: '👨‍👩‍👧‍👦',
      description: 'Accompagnement personnalisé pour créer plus d\'harmonie dans votre famille',
      features: [
        'Séances de 60-90 minutes',
        'Approche bienveillante',
        'Outils pratiques à emporter',
        'Suivi entre les séances',
        'Résultats durables'
      ],
      bgColor: 'bg-family-light',
      textColor: 'text-family-dark',
      accentColor: 'bg-family-main',
      popular: true
    },
    {
      id: 'couples',
      title: 'Intelligence Émotionnelle',
      subtitle: 'Développement personnel et professionnel',
      price: '180',
      unit: '€/séance',
      emoji: '🧠',
      description: 'Développez votre intelligence émotionnelle avec le framework EQ360 certifié',
      features: [
        'Évaluation EQ360 complète',
        'Plan de développement personnalisé',
        'Techniques de gestion émotionnelle',
        'Amélioration des relations',
        'Optimisation de la performance'
      ],
      bgColor: 'bg-couples-light',
      textColor: 'text-couples-dark',
      accentColor: 'bg-couples-main',
      popular: false
    }
  ]

  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-800 mb-6">
            Mes Tarifs 💰
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
            Des tarifs transparents pour un accompagnement de qualité. 
            Investissez dans votre épanouissement ! ✨
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan) => (
            <div 
              key={plan.id}
              className={`${plan.bgColor} rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden ${
                plan.popular ? 'ring-4 ring-primary-300 ring-opacity-50' : ''
              }`}
            >
              {/* Badge populaire */}
              {plan.popular && (
                <div className="absolute top-4 right-4 bg-primary-300 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  ⭐ Populaire
                </div>
              )}

              {/* Éléments décoratifs */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white/10 rounded-full"></div>
              <div className="absolute top-4 left-4 text-3xl opacity-20">
                {plan.emoji}
              </div>

              <div className="relative z-10">
                {/* En-tête */}
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{plan.emoji}</div>
                  <h3 className={`text-2xl font-bold ${plan.textColor} mb-2`}>
                    {plan.title}
                  </h3>
                  <p className={`text-sm ${plan.textColor} opacity-80`}>
                    {plan.subtitle}
                  </p>
                </div>

                {/* Prix */}
                <div className="text-center mb-6">
                  <div className="flex items-baseline justify-center space-x-1">
                    <span className={`text-4xl font-bold ${plan.textColor}`}>
                      {plan.price}
                    </span>
                    <span className={`text-lg ${plan.textColor} opacity-80`}>
                      {plan.unit}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className={`${plan.textColor} text-center mb-6 leading-relaxed`}>
                  {plan.description}
                </p>

                {/* Caractéristiques */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className={`w-5 h-5 ${plan.textColor} flex-shrink-0`} />
                      <span className={`text-sm ${plan.textColor}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bouton */}
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className={`w-full ${plan.accentColor} text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl`}
                >
                  Réserver maintenant
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Section consultation gratuite */}
        <div className="bg-gradient-to-r from-primary-200 to-primary-300 rounded-3xl p-8 md:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="text-6xl mb-6">🎁</div>
            <h3 className="text-3xl md:text-4xl font-bold text-primary-800 mb-6">
              Consultation Gratuite de 30 minutes !
            </h3>
            <p className="text-xl text-primary-700 mb-8 leading-relaxed">
              Avant de commencer, offrons-nous un moment pour faire connaissance ! 
              Cette consultation me permet de comprendre vos besoins et de vous expliquer 
              comment je peux vous accompagner avec joie et bienveillance.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/50 rounded-2xl p-4">
                <Clock className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                <p className="font-semibold text-primary-800">30 minutes</p>
                <p className="text-sm text-primary-600">Sans engagement</p>
              </div>
              <div className="bg-white/50 rounded-2xl p-4">
                <Users className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                <p className="font-semibold text-primary-800">Échange personnalisé</p>
                <p className="text-sm text-primary-600">À votre écoute</p>
              </div>
              <div className="bg-white/50 rounded-2xl p-4">
                <Heart className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                <p className="font-semibold text-primary-800">Bienveillance</p>
                <p className="text-sm text-primary-600">Dans la joie</p>
              </div>
            </div>

            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary text-xl px-10 py-4"
            >
              🌟 Réserver ma consultation gratuite
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 