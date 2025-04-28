import { useState } from 'react';
import { PeopleMattersLogo } from '@/components/common/Icons';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface OTPVerificationProps {
  phoneNumber: string;
  emailId: string;
  onVerify: (otp: string) => void;
  onChangeNumber: () => void;
}

export default function OTPVerification({ phoneNumber,emailId, onVerify, onChangeNumber }: OTPVerificationProps) {
  const [otp, setOtp] = useState(['', '', '', '', '']);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return; // Prevent multiple digits
    if (!/^\d*$/.test(value)) return; // Only allow digits

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (value && index < 4) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleVerify = () => {
    const otpString = otp.join('');
    if (otpString.length === 5) {
      onVerify(otpString);
    }
  };

  const inputVariants = {
    focus: { scale: 1.1, borderColor: '#F17C06', transition: { duration: 0.2 } },
    blur: { scale: 1, transition: { duration: 0.2 } },
    filled: { backgroundColor: 'rgba(241, 124, 6, 0.05)' }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const buttonVariants = {
    hover: { scale: 1.02 },
    tap: { scale: 0.98 }
  };

  return (
    <div className="relative h-screen overflow-hidden flex flex-col w-full items-center p-4">
   
      {/* Header with Logo and Back button */}
     
      <motion.div 
        className="flex-1 flex flex-col items-center justify-start gap-y-9 w-full max-w-xs"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="w-full space-y-6">
          <motion.h1 
            className="text-2xl font-semibold text-center text-gray-900 mb-8"
            variants={itemVariants}
          >
            OTP Verification
          </motion.h1>

          <motion.div 
            className="flex justify-center gap-2"
            variants={itemVariants}
          >
            {otp.map((digit, index) => (
              <motion.input
                key={index}
                id={`otp-${index}`}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-12 h-12 text-center border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent text-lg"
                variants={inputVariants}
                initial="blur"
                whileFocus="focus"
                animate={digit ? "filled" : "blur"}
                whileHover={{ scale: 1.05 }}
              />
            ))}
          </motion.div>

          <motion.button
            onClick={handleVerify}
            className="w-full py-3 rounded-md bg-orange text-white font-medium hover:bg-orange/90 transition-colors"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            VERIFY
          </motion.button>

          <motion.p 
            className="text-sm text-center text-gray-600"
            variants={itemVariants}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            5 Digit OTP sent to {phoneNumber} OR {emailId}.{' '}
            <motion.button 
              onClick={onChangeNumber} 
              className="text-orange font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Change the number?
            </motion.button>
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
} 