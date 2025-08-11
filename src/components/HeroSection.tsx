'use client'

import { motion } from 'framer-motion'
import { UserPlus, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function HeroSection() {
  const images = [
    '/screenshot-1.png',
    '/screenshot-2.png',
    '/screenshot-3.png',
    '/screenshot-4.png',
    '/screenshot-5.png',
    '/screenshot-6.png',
    '/screenshot-7.png'
  ]

  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [images.length])

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      staggerChildren: 0.2
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    }
  }


  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white pb-0">
      <div className="container mx-auto px-6 z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Text Content */}
          <motion.div 
            className="text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Main Title */}
            <motion.h1 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
              variants={itemVariants}
            >
              The next generation<br />of Minecraft servers is <span className="text-orange-500">here</span>.
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed"
              variants={itemVariants}
            >
              Built by software veterans with deep ties to<br />tech creators - redefining what SMP should feel like.
            </motion.p>

            {/* CTA Section */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <motion.a
                href="https://discord.gg/HYrTBqMKCM"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-or-discord min-w-[200px]"
                whileHover={{ 
                  scale: 1.02
                }}
                whileTap={{ scale: 0.98 }}
              >
                <UserPlus className="w-5 h-5" />
                Join Waitlist
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right: Image Carousel */}
          <motion.div 
            className="relative mb-0"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl mb-0">
              <Image 
                src={images[currentImage]} 
                alt={`TumbleCraft Server Screenshot ${currentImage + 1}`} 
                fill
                className="object-cover"
              />
              
              {/* Navigation Arrows */}
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((image, index) => (
                  <button
                    key={`carousel-dot-${image}`}
                    onClick={() => setCurrentImage(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentImage ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  )
}