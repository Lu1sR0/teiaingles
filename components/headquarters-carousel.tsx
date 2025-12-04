"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Card } from "@/components/ui/card"

interface HeadquartersImage {
  src: string
  alt: string
}

const images: HeadquartersImage[] = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC08399-kr5mKEJQzJQ3yVnl68iBYlG0yqhVo6.jpg",
    alt: "Laptop exibindo o site da Teia em ambiente de trabalho",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC08352-QGMUdwjIkK87zKMLCNNRSIuf1Zktox.jpg",
    alt: "Estúdio profissional com iluminação softbox e chroma key",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC08343-j6aNOa7PZkrnkkoLJwR8u9c9jen2sA.jpg",
    alt: "Mesa de som com controles profissionais e medidores de volume",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC08335-9yUGMFRoI278226slTvxF4hlbgcima.jpg",
    alt: "Estúdio de podcast com microfones profissionais e monitor",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC08369-DLLGy6ad4GprJ9YaiJhSAJ55GTdpFx.jpg",
    alt: "Espaço de descanso com bebedouro e puffs confortáveis",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC08382-ssmWdntuJWxboMfoOBbE9haRlDj7Yt.jpg",
    alt: "Área comum com portas de salas e espaço de convivência",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC08359-05QQqvTwcLRu2CW64i3XlIfIcDeh3f.jpg",
    alt: "Sala de reunião com mesa grande e organização colorida",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC08350-fBeN6sxNaKhxSBA7YwDD1zy8kg8ysm.jpg",
    alt: "Teleprompter profissional em tripé para gravações",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC08356-uz3GKtRVk1TWfJrCmnhM4Dog3rhuga.jpg",
    alt: "Sala de reunião com pôsteres de luta política na parede",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC08362-GFV84VWqyBQ1zkX2QJfuDmW2dn7kdb.jpg",
    alt: "Sala de reunião com arte política e mobília de madeira",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC08321-xhdPprniqk5S7R3uWWX1jrzzsLt0KQ.jpg",
    alt: "Estúdio de gravação com parede verde e equipamentos profissionais",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC08315-h8UyJwjambVI8ve7eXAunXPOSrglZz.jpg",
    alt: "Estúdio de gravação com iluminação profissional",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC08284-rkl8J9aGHUEPRxEXA60axYCic2buGj.jpg",
    alt: "Sala de podcast com mesa, microfones e equipamentos",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC08295-LoYnFbhxXGvUvUbdT0kpy26j0lCtPy.jpg",
    alt: "Estúdio de podcast com tela Teia",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC08290-oxIRfDXGCoHq3MduiAnBVFTBQ5STxW.jpg",
    alt: "Vista ampla do estúdio de podcast",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC08282-01O0BmxzW68uaxT4cnNBnWdBi6ewT2.jpg",
    alt: "Sala de controle com monitores",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC08305-sLG7FuajMkko5X9OlkNIbFZRG6eRGl.jpg",
    alt: "Estação de trabalho com múltiplos monitores",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC08329-ncbjInIOzpoUAUM7Geq3gGEIWHzGer.jpg",
    alt: "Fones de ouvido profissionais na parede",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC08331-zUJmzXleDeO2MJfV5bajQHFXMWgftD.jpg",
    alt: "Microfone profissional em detalhe",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC08325-yJKIuLGBHmpl3ejhD7f7AyyxjY5dzc.jpg",
    alt: "Visor da câmera mostrando o estúdio",
  },
]

export function HeadquartersCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setIsLightboxOpen(true)
  }

  const nextLightbox = () => {
    setLightboxIndex((prev) => (prev + 1) % images.length)
  }

  const prevLightbox = () => {
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isLightboxOpen) return
      if (e.key === "ArrowLeft") prevLightbox()
      if (e.key === "ArrowRight") nextLightbox()
      if (e.key === "Escape") setIsLightboxOpen(false)
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isLightboxOpen])

  return (
    <>
      <div className="w-full">
        {/* Main Carousel */}
        <div className="relative max-w-7xl mx-auto">
          <Card className="overflow-hidden shadow-2xl border-0 bg-gradient-to-br from-gray-900 to-gray-800">
            <div className="relative aspect-video">
              <Image
                src={images[currentIndex].src || "/placeholder.svg"}
                alt={images[currentIndex].alt}
                fill
                className="object-cover cursor-pointer transition-transform duration-700"
                onClick={() => openLightbox(currentIndex)}
                priority
              />

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 hover:bg-white text-gray-900 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-110 shadow-xl z-10"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 hover:bg-white text-gray-900 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-110 shadow-xl z-10"
                aria-label="Next image"
              >
                <ChevronRight className="h-8 w-8" />
              </button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-full font-akzidenz font-black">
                {currentIndex + 1} / {images.length}
              </div>
            </div>
          </Card>
        </div>

        {/* Thumbnail Grid */}
        <div className="mt-8 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-10 gap-3 max-w-7xl mx-auto">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`relative aspect-square rounded-lg overflow-hidden transition-all duration-300 ${
                index === currentIndex
                  ? "ring-4 ring-teia-purple scale-105 shadow-xl"
                  : "opacity-60 hover:opacity-100 hover:scale-105"
              }`}
            >
              <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-110"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            onClick={prevLightbox}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          <button
            onClick={nextLightbox}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-110"
            aria-label="Next image"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          <div className="relative w-full h-full max-w-7xl max-h-[90vh]">
            <Image
              src={images[lightboxIndex].src || "/placeholder.svg"}
              alt={images[lightboxIndex].alt}
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md text-white px-6 py-3 rounded-full font-akzidenz font-black text-sm">
            {lightboxIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  )
}
