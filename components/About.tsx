'use client'

import React from 'react'
import { Award, Users, Target, Star, CheckCircle } from 'lucide-react'
import ScrollArrow from './ScrollArrow'

export default function About() {
  const certifications = [
    {
      title: "Coach Certifiée ICICOACH",
      location: "Institut ICICOACH de Genève, Suisse",
      icon: Award,
      description: "Formation complète en coaching professionnel"
    },
    {
      title: "Intelligence Émotionnelle EQ 2.0 et EQ 360",
      location: "Certification internationale",
      icon: Star,
      description: "Expertise en développement émotionnel"
    },
    {
      title: "Train the Trainers",
      location: "House of Training Luxembourg",
      icon: Users,
      description: "Formation de formateurs professionnels"
    }
  ]

  const expertise = [
    "Plus de 3 ans d'expérience cumulée en coaching et training",
    "Approche basée sur l'intelligence émotionnelle",
    "Méthodes éprouvées et personnalisées",
    "Accompagnement bienveillant et professionnel"
  ]

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Expertise & Approche
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
            Une approche professionnelle basée sur l'excellence, l'empathie et des méthodes éprouvées 
            pour accompagner votre transformation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Philosophie et approche */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary-800">
                Mon Approche Professionnelle
              </h3>
              
              <div className="space-y-4 text-lg text-primary-700 leading-relaxed">
                <p>
                  En tant que formatrice experte et coach certifiée, je conçois et anime des programmes de formation sur mesure,
                  alliant méthodes pédagogiques innovantes et approche personnalisée pour garantir une montée en compétences optimale de chaque participant.
                </p>
                
                <p>
                Ma double expertise de formatrice spécialisée en intelligence émotionnelle et de coach me permet de créer des parcours d'apprentissage transformateurs,
                où théorie et pratique s'articulent parfaitement pour générer des résultats durables et mesurables.
                </p>
                
                <p>
                Qu'il s'agisse de concevoir et déployer des formations en entreprise, d'animer des sessions de coaching familial 
                ou de développer l'intelligence émotionnelle de vos équipes, mon approche de formatrice-coach privilégie toujours l'excellence pédagogique et l'impact concret sur le terrain.

                </p>
              </div>
            </div>

            {/* Points d'expertise */}
            <div className="bg-primary-50 rounded-xl p-6">
              <h4 className="text-xl font-semibold text-primary-800 mb-4 flex items-center space-x-2">
                <Target className="w-6 h-6 text-accent-blue" />
                <span>Points Forts</span>
              </h4>
              <div className="space-y-3">
                {expertise.map((point, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent-emerald flex-shrink-0" />
                    <span className="text-primary-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Citation professionnelle */}
            <div className="bg-gradient-to-r from-accent-blue/10 to-accent-indigo/10 rounded-xl p-6 border-l-4 border-accent-blue">
              <blockquote className="text-primary-700 italic text-lg leading-relaxed">
                "L'excellence dans l'accompagnement naît de la combinaison entre expertise technique, 
                empathie authentique et engagement total envers la réussite de mes clients."
              </blockquote>
              <cite className="text-primary-600 text-sm mt-3 block">— Diana Tape</cite>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary-800">
              Certifications & Qualifications
            </h3>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => {
                const IconComponent = cert.icon
                return (
                  <div 
                    key={index}
                    className="card hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-accent-blue/10 rounded-lg">
                        <IconComponent className="w-6 h-6 text-accent-blue" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-primary-800 mb-1">
                          {cert.title}
                        </h4>
                        <p className="text-primary-600 text-sm mb-2">
                          {cert.location}
                        </p>
                        <p className="text-primary-500 text-sm">
                          {cert.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Statistiques */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-antiracism-light rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-antiracism-dark mb-1">3+</div>
                <div className="text-sm text-antiracism-dark">Années d'expérience</div>
              </div>
              <div className="bg-family-light rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-family-dark mb-1">40+</div>
                <div className="text-sm text-family-dark">Clients accompagnés</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Flèche de navigation vers Testimonials */}
      <ScrollArrow 
        targetSection="testimonials" 
        variant="primary"
      />
    </section>
  )
} 