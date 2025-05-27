'use client'

import React from 'react'
import { Mail, Phone, Calendar, Clock, CheckCircle } from 'lucide-react'

export default function Contact() {
  const contactMethods = [
    {
      icon: Calendar,
      title: 'Calendly',
      description: 'Réservez directement en ligne',
      action: 'Réserver maintenant',
      link: 'https://calendly.com/diana-tape/30min', // ✅ Lien Calendly configuré
      color: 'bg-accent-blue hover:bg-blue-600'
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'coach@dianatape.com',
      action: 'Envoyer un email',
      link: 'mailto:coach@dianatape.com',
      color: 'bg-accent-indigo hover:bg-indigo-600'
    },
    {
      icon: Phone,
      title: 'Téléphone',
      description: '+352 691 204 681',
      action: 'Appeler maintenant',
      link: 'tel:+352691204681',
      color: 'bg-accent-teal hover:bg-teal-600'
    }
  ]

  const benefits = [
    'Consultation entièrement gratuite',
    'Aucun engagement requis',
    'Évaluation personnalisée de vos besoins',
    'Présentation de mon approche'
  ]

  return (
    <section id="contact" className="section-padding bg-primary-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Prenons Contact
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
            Commencez votre parcours de transformation avec une consultation gratuite 
            de 30 minutes pour découvrir comment je peux vous accompagner.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Consultation gratuite */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-primary-100">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-accent-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-accent-blue" />
                </div>
                <h3 className="text-2xl font-bold text-primary-800 mb-4">
                  Consultation Gratuite
                </h3>
                <p className="text-primary-600 leading-relaxed">
                  30 minutes pour faire connaissance et explorer ensemble 
                  les possibilités d'accompagnement adaptées à vos besoins.
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-primary-800">Ce que vous obtenez :</h4>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-accent-emerald flex-shrink-0" />
                      <span className="text-primary-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon
                  return (
                    <a
                      key={index}
                      href={method.link}
                      target={method.title === 'Calendly' ? '_blank' : undefined}
                      rel={method.title === 'Calendly' ? 'noopener noreferrer' : undefined}
                      className={`block ${method.color} text-white rounded-lg p-4 transition-all duration-300 hover:shadow-md`}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                            <IconComponent className="w-5 h-5" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg mb-1">{method.title}</h4>
                          <p className="text-white/90 text-sm mb-1">
                            {method.description}
                          </p>
                          <p className="text-white font-medium text-sm">
                            {method.action} →
                          </p>
                        </div>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Informations complémentaires */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-primary-100">
              <h3 className="text-2xl font-bold text-primary-800 mb-6">
                Pourquoi Choisir Diana Tape ?
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-antiracism-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 bg-antiracism-main rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-800 mb-2">Expertise Certifiée</h4>
                    <p className="text-primary-600 text-sm">
                      Certifications internationales et formation continue pour vous garantir 
                      un accompagnement de qualité.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-family-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 bg-family-main rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-800 mb-2">Approche Personnalisée</h4>
                    <p className="text-primary-600 text-sm">
                      Chaque accompagnement est adapté à vos besoins spécifiques 
                      et à votre situation unique.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-couples-light rounded-lg flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 bg-couples-main rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary-800 mb-2">Résultats Concrets</h4>
                    <p className="text-primary-600 text-sm">
                      Méthodes éprouvées et focus sur l'atteinte d'objectifs 
                      mesurables et durables.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-accent-blue/10 to-accent-indigo/10 rounded-xl p-8 border border-accent-blue/20">
              <h3 className="text-xl font-bold text-primary-800 mb-4">
                Prêt(e) à Commencer ?
              </h3>
              <p className="text-primary-700 leading-relaxed mb-6">
                La transformation commence par un premier pas. Réservez votre consultation 
                gratuite et découvrons ensemble comment atteindre vos objectifs.
              </p>
              <div className="text-center">
                <a 
                  href="mailto:coach@dianatape.com"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Contactez-moi maintenant</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 