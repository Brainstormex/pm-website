import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">404</h2>
        <h3 className="text-xl text-gray-600 mb-6">Page Not Found</h3>
        <p className="text-gray-500 mb-8">
          Could not find the requested resource
        </p>
        <Link 
          href="/"
          className="text-blue-500 hover:text-blue-700 font-medium"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
} 