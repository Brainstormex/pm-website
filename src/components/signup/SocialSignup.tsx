"use client";

export default function SocialSignup() {
  return (
    <div className="space-y-3">
      {/* LinkedIn Signup Button */}
      <button
        type="button"
        className="w-full flex gap-x-4 items-center justify-center gap-2 bg-[#0077B5] text-white py-3 rounded-md hover:bg-[#006399] transition-colors"
      >
        <svg
          width="22"
          height="23"
          viewBox="0 0 22 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.1412 7.84521H0.679688V22.0727H5.1412V7.84521Z"
            fill="white"
          />
          <path
            d="M17.2113 7.53694C17.0468 7.51638 16.872 7.5061 16.6973 7.49582C14.1992 7.39302 12.7909 8.87333 12.2975 9.51069C12.1638 9.68545 12.1021 9.78825 12.1021 9.78825V7.88646H7.83594V22.114H12.1021H12.2975C12.2975 20.6645 12.2975 19.2253 12.2975 17.7758C12.2975 16.9945 12.2975 16.2132 12.2975 15.432C12.2975 14.4656 12.2255 13.4376 12.7087 12.5536C13.1199 11.8134 13.86 11.4433 14.6927 11.4433C17.1599 11.4433 17.2113 13.6741 17.2113 13.8797C17.2113 13.89 17.2113 13.9002 17.2113 13.9002V22.1756H21.6728V12.8928C21.6728 9.71629 20.0588 7.84534 17.2113 7.53694Z"
            fill="white"
          />
          <path
            d="M2.91086 6.00533C4.34159 6.00533 5.50143 4.8455 5.50143 3.41478C5.50143 1.98405 4.34159 0.824219 2.91086 0.824219C1.48014 0.824219 0.320312 1.98405 0.320312 3.41478C0.320312 4.8455 1.48014 6.00533 2.91086 6.00533Z"
            fill="white"
          />
        </svg>
        Signup with LinkedIn
      </button>

      {/* Google Signup Button */}
      <button
        type="button"
        className="w-full flex gap-x-5 items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 py-3 rounded-md hover:bg-gray-50 transition-colors"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="#4285F4"
            d="M23.745 12.27c0-.79-.07-1.54-.19-2.27h-11.3v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"
          />
          <path
            fill="#34A853"
            d="M12.255 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96h-3.98v3.09C3.515 21.3 7.565 24 12.255 24z"
          />
          <path
            fill="#FBBC05"
            d="M5.525 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62h-3.98a11.86 11.86 0 000 10.76l3.98-3.09z"
          />
          <path
            fill="#EA4335"
            d="M12.255 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C18.205 1.19 15.495 0 12.255 0c-4.69 0-8.74 2.7-10.71 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z"
          />
        </svg>
        Signup with Google
      </button>
    </div>
  );
} 