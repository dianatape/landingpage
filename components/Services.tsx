'use client'

import React from 'react'
import { Users, Heart, Globe, ArrowRight, CheckCircle } from 'lucide-react'
import ScrollArrow from './ScrollArrow'

export default function Services() {
  const services = [
    {
      id: 'antiracism',
      title: 'Formations Anti-Racisme',
      subtitle: 'Sensibilisation et inclusion pour tous publics',
      description: 'Formations professionnelles et ateliers de sensibilisation dans les établissements scolaires, centres de formation et entreprises pour promouvoir la diversité et l\'inclusion.',
      icon: Globe,
      features: [
        'Établissements scolaires et universitaires',
        'Centres de formation professionnelle', 
        'Entreprises et organisations',
        'Colloques et séminaires spécialisés'
      ],
      bgColor: 'bg-antiracism-light',
      textColor: 'text-antiracism-dark',
      accentColor: 'bg-antiracism-main',
      price: '350€/heure'
    },
    {
      id: 'family',
      title: 'Coaching Familial',
      subtitle: 'Relations parent-enfant harmonieuses',
      description: 'Accompagnement personnalisé des familles pour améliorer la communication, gérer les conflits et renforcer les liens familiaux dans un environnement bienveillant.',
      icon: Users,
      features: [
        'Amélioration de la communication familiale',
        'Gestion des conflits parent-enfant',
        'Développement de l\'intelligence émotionnelle',
        'Renforcement des liens familiaux'
      ],
      bgColor: 'bg-family-light',
      textColor: 'text-family-dark',
      accentColor: 'bg-family-main',
      price: '150€/session'
    },
    {
      id: 'couples',
      title: 'Spécialiste en Intelligence Émotionnelle',
      subtitle: 'Développement personnel et professionnel',
      description: 'Accompagnement spécialisé basé sur le framework EQ360 pour développer votre intelligence émotionnelle, améliorer vos relations et optimiser votre potentiel personnel et professionnel.',
      icon: Heart,
      features: [
        'Évaluation complète EQ360 certifiée',
        'Développement des compétences émotionnelles',
        'Amélioration des relations interpersonnelles',
        'Optimisation du leadership et de la performance'
      ],
      bgColor: 'bg-couples-light',
      textColor: 'text-couples-dark',
      accentColor: 'bg-couples-main',
      price: '180€/session'
    }
  ]

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Services Professionnels
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
            Trois domaines d'expertise pour vous accompagner vers l'excellence relationnelle 
            et le développement personnel avec des méthodes éprouvées.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div 
                key={service.id}
                className={`${service.bgColor} rounded-xl p-6 shadow-sm border border-primary-100 hover:shadow-md transition-all duration-300 relative flex flex-col h-full`}
              >
                {/* En-tête avec icône et titre - hauteur fixe */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`p-3 ${service.accentColor} text-white rounded-lg flex-shrink-0`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-h-[5rem] flex flex-col justify-center">
                    <h3 className={`text-lg font-bold ${service.textColor} leading-tight mb-1`}>
                      {service.title}
                    </h3>
                    <p className={`text-sm ${service.textColor} opacity-80`}>
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description - hauteur flexible */}
                <div className="mb-6 flex-grow">
                  <p className={`${service.textColor} leading-relaxed text-sm`}>
                    {service.description}
                  </p>
                </div>

                {/* Caractéristiques - hauteur fixe */}
                <div className="mb-6">
                  <h4 className={`font-semibold ${service.textColor} text-sm mb-3`}>
                    Points clés :
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className={`text-sm ${service.textColor} flex items-start space-x-2`}>
                        <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <span className="leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Prix - toujours en bas */}
                <div className={`bg-white/80 rounded-lg p-4 ${service.textColor} mt-auto`}>
                  <div className="text-center">
                    <div className="text-2xl font-bold">{service.price}</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Consultation gratuite */}
        <div className="text-center mt-16">
          <div className="bg-primary-50 rounded-xl p-8 border border-primary-100 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-primary-800 mb-4">
              Consultation Gratuite de 30 Minutes
            </h3>
            <p className="text-primary-600 mb-6 leading-relaxed">
              Avant tout engagement, je vous offre une consultation gratuite pour comprendre 
              vos besoins et vous présenter mon approche personnalisée.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary text-lg px-8 py-4 flex items-center space-x-2 mx-auto"
            >
              <span>Réserver ma consultation</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Flèche de navigation vers Contact */}
      <ScrollArrow 
        targetSection="contact" 
        variant="primary"
      />
    </section>
  )
} 