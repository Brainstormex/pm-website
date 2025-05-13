'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Something went wrong!</h2>
        <p className="text-gray-500 mb-8">
          An error occurred while loading this page
        </p>
        <div className="space-x-4">
          <button
            onClick={reset}
            className="text-blue-500 hover:text-blue-700 font-medium"
          >
            Try again
          </button>
          <Link 
            href="/"
            className="text-blue-500 hover:text-blue-700 font-medium"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  )
} 