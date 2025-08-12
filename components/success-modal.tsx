"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle, X } from "lucide-react"

interface SuccessModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 p-8 text-center">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="bg-emerald-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-12 w-12 text-emerald-600" />
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Booking Request Sent!</h2>

        <p className="text-gray-600 mb-6 leading-relaxed">
          Thank you for choosing SparkleWorksHome! We've received your booking request and will contact you within 2
          hours to confirm your appointment and provide a detailed quote.
        </p>

        <div className="bg-emerald-50 p-4 rounded-lg mb-6">
          <p className="text-sm text-emerald-800">
            <strong>What happens next?</strong>
            <br />
            1. We'll call you to confirm details
            <br />
            2. Provide a personalized quote
            <br />
            3. Schedule your cleaning service
          </p>
        </div>

        <Button onClick={onClose} className="w-full bg-emerald-600 hover:bg-emerald-700">
          Close
        </Button>

        <p className="text-xs text-gray-500 mt-4">
          Need immediate assistance? Call us at{" "}
          <a href="tel:+3120687154" className="text-red-600 hover:underline">
            +3120687154
          </a>
        </p>
      </div>
    </div>
  )
}
