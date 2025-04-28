'use client';

import { useState, Dispatch, SetStateAction, useEffect } from 'react';
import OTPVerification from './OTPVerification';
import { motion, AnimatePresence } from 'framer-motion';
import { authService } from '@/services/authService';
import { useRouter, useSearchParams } from "next/navigation";

interface LoginFormProps {
  onOTPScreenChange?: Dispatch<SetStateAction<boolean>>;
}

export default function LoginForm({ onOTPScreenChange }: LoginFormProps) {
  const router = useRouter();
  const [identifier, setIdentifier] = useState('');
  const [sessionUser, setSessionUser] = useState(null);
  const [showOTP, setShowOTP] = useState(false);

  async function setSession(userData: any): Promise<void> {
    try {
      console.log("userData =>", userData);

      const response = await fetch("/api/setAccessToken", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to set session: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      console.log("Session set successfully:", data);
    } catch (error) {
      console.error("Error setting session:", error);
    }
  }
  const isMobileNumber = (value: string) => {
    // Check if the value contains any numbers
    return /^\d+$/.test(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login form submitted");
    // Handle login logic here
    if (identifier) {
      // if (isMobileNumber(identifier)) {
      const response = await authService.login({ email: identifier });
      if ((response as any)?.success && (response as any)?.data?.messageId) {
        setShowOTP(true);
        onOTPScreenChange?.(true);
      }
    } else {
      // Handle email login differently if needed
      console.log('Email login attempt with:', identifier);
    }
  };

  const handleOTPVerify = async (otp: string) => {
    // Handle OTP verification here
    const response = await authService.verifyOtp({ email: identifier, otp: otp });
    if ((response as any)?.success) {
      await setSession({ ...(response as any)?.data?.newUser, token: (response as any)?.data?.token,verified: (response as any)?.data?.verified });
      router.push(`/`);
    }
    console.log('Verifying OTP:', otp, 'for number:', identifier);
  };

  const handleChangeNumber = () => {
    setShowOTP(false);

    onOTPScreenChange?.(false);
  };

    useEffect(() => {
      const fetchSession = async () => {
        try {
          const res = await fetch("/api/getAccessToken", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include", 
          });
  
          const data = await res.json();
          console.log("data PS Main =>", data);
          setSessionUser(data.user); 
        } catch (err) {
          console.error("Failed to fetch session:", err);
        }
      };
  
      fetchSession();
    }, []);
  
   
    useEffect(() => {
      if (sessionUser) {
        router.push("/"); 
      }
    }, [sessionUser, router]);

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } },
    blur: { scale: 1, transition: { duration: 0.2 } }
  };

  const labelVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.2 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.15 } }
  };

  const buttonVariants = {
    hover: { scale: 1.02 },
    tap: { scale: 0.98 },
    disabled: { opacity: 0.7 }
  };

  if (showOTP) {
    return (
      <OTPVerification
        phoneNumber={identifier}
        emailId={identifier}
        onVerify={handleOTPVerify}
        onChangeNumber={handleChangeNumber}
      />
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <div className="relative">
          <motion.input
            type="text"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
            placeholder="Enter Email / 10-Digit Mobile"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent"
            required
            whileFocus="focus"
            variants={inputVariants}
            initial="blur"
          />
          <AnimatePresence>
            {identifier && (
              <motion.span
                className="absolute capitalize text-xs text-black -top-2 left-2 bg-white px-1"
                variants={labelVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {isMobileNumber(identifier) ? 'Mobile Number' : 'Email'}
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </div>

      <motion.button
        type="submit"
        className={`w-full py-3 rounded-md transition-colors ${identifier
          ? 'bg-orange text-white font-medium hover:bg-orange'
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        whileHover={identifier ? "hover" : "disabled"}
        whileTap={identifier ? "tap" : "disabled"}
        variants={buttonVariants}
      >
        LOGIN
      </motion.button>
    </motion.form>
  );
} 