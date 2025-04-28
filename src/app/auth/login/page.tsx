'use client';
import Link from 'next/link';
import LoginForm from '@/components/Login/LoginForm';
import SocialLogin from '@/components/Login/SocialLogin';
import { PeopleMattersLogo } from '@/components/common/Icons';
import AuthLayout from '@/components/common/AuthLayout';
import { useState } from 'react';

export default function LoginPage() {
  const [showingOTP, setShowingOTP] = useState(false);

  return (
    <AuthLayout>
      <div className="relative h-screen overflow-hidden flex flex-col items-center p-4">
        <svg className='absolute -bottom-24 -left-4' width="240" height="276" viewBox="0 0 240 276" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle opacity="0.05" cx="58.5" cy="181.5" r="181.5" fill="#0D121E"/>
        </svg>

        {/* Header with Logo and Back button */}
        <div className='w-full max-w-7xl flex lg:flex-row flex-col justify-between items-center mb-16 mt-5'>
          <Link href="/" className="hidden lg:inline-block">
            <span className="text-sm font-bold tracking-[0.2em]">GO BACK</span>
          </Link>
          <PeopleMattersLogo className="h-8" />
          <div className="w-[70px]"></div> {/* Spacer for centering logo */}
        </div>

        <div className="flex-1 flex flex-col items-center justify-start gap-y-9 w-full max-w-xs">
          {/* Login Form Section */}
          <div className="w-full space-y-6">
            <LoginForm onOTPScreenChange={setShowingOTP} />
            
            {!showingOTP && (
              <>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">OR</span>
                  </div>
                </div>

                <SocialLogin />
              </>
            )}
          </div>
            
          {/* Sign up link */}
          {!showingOTP && (
            <div className="text-center text-sm mt-6">
              <span className="text-gray-600">Create an account? </span>
              <Link href="/auth/signup" className="text-primary font-medium">
                Signup
              </Link>
            </div>
          )}
        </div>

        <svg className='absolute -top-24 -right-2' width="445" height="308" viewBox="0 0 445 308" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle opacity="0.05" cx="397.5" cy="-89.5" r="397.5" fill="#F17C06"/>
        </svg>
      </div>
    </AuthLayout>
  );
} 