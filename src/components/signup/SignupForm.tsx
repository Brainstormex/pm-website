'use client';

import { use, useEffect, useState } from 'react';
import Link from 'next/link';
import { PeopleMattersLogo } from '@/components/common/Icons';
import { motion, AnimatePresence } from 'framer-motion';
import OTPVerification from '../Login/OTPVerification';
import Select from 'react-select';
import { authService } from '@/services/authService';
import { useRouter, useSearchParams } from "next/navigation";


interface FormData {
  email: string;
  mobile: string;
  fname: string;
  lname: string;
  company_name: string;
  designation: string;
  fk_country_id: string;
  is_subscribe_news_letter: boolean;
  is_accept_terms: boolean;
}

export default function SignupForm() {
  const router = useRouter();
  const [sessionUser, setSessionUser] = useState(null);
  const [countryList, setCountryList] = useState([]);

  const [formData, setFormData] = useState<FormData>({
    email: '',
    mobile: '',
    fname: '',
    lname: '',
    company_name: '',
    designation: '',
    fk_country_id: '',
    is_subscribe_news_letter: true,
    is_accept_terms: false,
  });
  const [showOTP, setShowOTP] = useState(false);

  useEffect(() => {
    getCountryList();
  }, []);

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formValid) {
      console.log('Form submitted:', formData);
      const response = await authService.register(formData);
      console.log('response=>', response, (response as any)?.data, response?.status);
      if ((response as any)?.success && (response as any)?.data?.messageId) {
        console.log('response=>', response);
        setShowOTP(true);
      }
    }
  };

  const handleOTPVerify = async (otp: string) => {
    // Handle OTP verification here
    const response = await authService.verifyCreate({ ...formData, otp });
    console.log('Verifying OTP:', otp, 'for account creation');
    if ((response as any)?.success) {
      console.log('setSession OTP:', { ...(response as any)?.data?.newUser, token: (response as any)?.data?.token })
      await setSession({ ...(response as any)?.data?.newUser, token: (response as any)?.data?.token });
      router.push(`/`);
    }
    // You would typically send this to your backend for verification
  };


  const handleChangeNumber = () => {
    setShowOTP(false);
  };

  const getCountryList = async () => {
    const responseCountry: any = await authService.getAll(
      "get-countrys?status=active"
    );
    setCountryList((responseCountry as any)?.data?.data || []);

  }

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

  const formValid =
    formData.email &&
    formData.mobile &&
    formData.fname &&
    formData.lname &&
    formData.company_name &&
    formData.designation &&
    formData.fk_country_id &&
    formData.is_accept_terms;

  // if (showOTP) {
  //   return (
  //   <div className='min-h-screen overflow-hidden flex flex-col items-center justify-center p-4 w-full'>
  //     <OTPVerification
  //       phoneNumber={formData.mobile}
  //       onVerify={handleOTPVerify}
  //       onChangeNumber={handleChangeNumber}
  //       />
  //       </div>
  //   );
  // }

  return (
    <div className="min-h-screen overflow-hidden flex flex-col items-center justify-center p-4">
      <svg className='absolute -bottom-24 -left-4' width="240" height="276" viewBox="0 0 240 276" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle opacity="0.05" cx="58.5" cy="181.5" r="181.5" fill="#0D121E" />
      </svg>

      {/* Header with Logo and Back button */}
      <div className='w-full max-w-7xl flex lg:flex-row flex-col justify-between items-center gap-x-16 mb-16 mt-5'>
        <Link href="/" className="hidden lg:inline-block">
          <span className="text-sm font-bold tracking-[0.2em]">GO BACK</span>
        </Link>
        <div className='ml-5'>
          <PeopleMattersLogo className="h-8" />
        </div>
        <div className="text-right">
          <span className="text-orange">*</span>
          <span className="text-orange text-sm"> are mandatory fields.</span>
        </div>
      </div>

      {showOTP && (
        <OTPVerification
          phoneNumber={formData.mobile}
          emailId={formData.email}
          onVerify={handleOTPVerify}
          onChangeNumber={handleChangeNumber}
        />
      )}
      {!showOTP && <div className="relative min-h-screen overflow-hidden flex flex-col items-center p-4">

        <motion.div
          className="flex-1 flex flex-col items-center justify-start w-full max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Form Title */}
          <motion.h1
            className="text-2xl font-semibold text-center text-gray-900 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Signup
          </motion.h1>

          {/* Form */}
          <form onSubmit={handleSubmit} className="w-full space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Email */}
              <div className="relative">
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email *"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent"
                  required
                  whileFocus="focus"
                  variants={inputVariants}
                  initial="blur"
                />
                <AnimatePresence>
                  {formData.email && (
                    <motion.span
                      className="absolute text-xs capitalize text-black -top-2 left-2 bg-white px-1"
                      variants={labelVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    >
                      Email
                      <span className="absolute text-xs text-orange top-0 bg-white px-1">
                        *
                      </span>
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile */}
              <div className="relative">
                <motion.input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  placeholder="Mobile *"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent"
                  required
                  whileFocus="focus"
                  variants={inputVariants}
                  initial="blur"
                />
                <AnimatePresence>
                  {formData.mobile && (
                    <motion.span
                      className="absolute text-xs capitalize text-black -top-2 left-2 bg-white px-1"
                      variants={labelVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    >
                      Mobile
                      <span className="absolute text-xs text-orange top-0 bg-white px-1">
                        *
                      </span>
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>

              {/* First Name */}
              <div className="relative">
                <motion.input
                  type="text"
                  name="fname"
                  value={formData.fname}
                  onChange={handleInputChange}
                  placeholder="First Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent"
                  required
                  whileFocus="focus"
                  variants={inputVariants}
                  initial="blur"
                />
                <AnimatePresence>
                  {formData.fname && (
                    <motion.span
                      className="absolute text-xs capitalize text-black -top-2 left-2 bg-white px-1"
                      variants={labelVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    >
                      First Name
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>

              {/* Last Name */}
              <div className="relative">
                <motion.input
                  type="text"
                  name="lname"
                  value={formData.lname}
                  onChange={handleInputChange}
                  placeholder="Last Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent"
                  required
                  whileFocus="focus"
                  variants={inputVariants}
                  initial="blur"
                />
                <AnimatePresence>
                  {formData.lname && (
                    <motion.span
                      className="absolute text-xs capitalize text-black -top-2 left-2 bg-white px-1"
                      variants={labelVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    >
                      Last Name
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>

              {/* Company Name */}
              <div className="relative">
                <motion.input
                  type="text"
                  name="company_name"
                  value={formData.company_name}
                  onChange={handleInputChange}
                  placeholder="Company Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent"
                  required
                  whileFocus="focus"
                  variants={inputVariants}
                  initial="blur"
                />
                <AnimatePresence>
                  {formData.company_name && (
                    <motion.span
                      className="absolute text-xs capitalize text-black -top-2 left-2 bg-white px-1"
                      variants={labelVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    >
                      Company Name
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>

              {/* designation */}
              <div className="relative">
                <motion.input
                  type="text"
                  name="designation"
                  value={formData.designation}
                  onChange={handleInputChange}
                  placeholder="Position"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent"
                  required
                  whileFocus="focus"
                  variants={inputVariants}
                  initial="blur"
                />
                <AnimatePresence>
                  {formData.designation && (
                    <motion.span
                      className="absolute text-xs capitalize text-black -top-2 left-2 bg-white px-1"
                      variants={labelVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    >
                      Position
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>

              {/* Country */}
              <Select
                name="fk_country_id"
                options={countryList}
                value={countryList.find((opt: any) => opt.value === formData.fk_country_id)}
                onChange={(selectedOption: any) =>
                  setFormData(prev => ({ ...prev, fk_country_id: selectedOption?.value }))
                }
                className="w-full text-sm"
                classNamePrefix="react-select"
                placeholder="Select Country *"
                isSearchable
              />
              {/* <div className="relative col-span-1 md:col-span-1">
                <motion.select
                  name="country"
                  value={formData.country}
                  onChange={(e) => setFormData(prev => ({ ...prev, country: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange focus:border-transparent appearance-none"
                  required
                  whileFocus="focus"
                  variants={inputVariants}
                  initial="blur"
                >
                  <option value="">Country</option>
                  <option value="IN">India</option>
                  <option value="US">United States</option>
                </motion.select>
                <AnimatePresence>
                  {formData.country && (
                    <motion.span
                      className="absolute text-xs capitalize text-black -top-2 left-2 bg-white px-1"
                      variants={labelVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    >
                      Country
                      <span className="absolute text-xs text-orange top-0 bg-white px-1">
                        *
                      </span>
                    </motion.span>
                  )}
                </AnimatePresence>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div> */}
            </div>

            {/* Checkboxes */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <motion.label
                className="flex items-center space-x-3"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <input
                  type="checkbox"
                  name="is_subscribe_news_letter"
                  checked={formData.is_subscribe_news_letter}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-white  accent-orange border-gray-300 rounded-xl focus:ring-orange"
                />
                <span className="text-foreground font-medium text-xs">I agree to subscribe to your weekly newsletter</span>
              </motion.label>

              <motion.label
                className="flex items-center space-x-3"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <input
                  type="checkbox"
                  name="is_accept_terms"
                  checked={formData.is_accept_terms}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-white   accent-orange border-gray-300 rounded-xl focus:ring-orange"
                  required
                />
                <span className="text-foreground font-medium text-xs">
                  I agree and accept all{' '}
                  <Link href="/terms" className="text-borderGray underline">
                    terms and conditions
                  </Link>{' '}
                  and{' '}
                  <Link href="/privacy" className="text-borderGray underline">
                    privacy policies
                  </Link>
                </span>
              </motion.label>
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              className={`w-full py-3 rounded-md transition-colors ${formValid
                ? 'bg-orange text-white font-medium'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              whileHover={formValid ? "hover" : "disabled"}
              whileTap={formValid ? "tap" : "disabled"}
              variants={buttonVariants}
              disabled={!formValid}
            >
              CREATE AN ACCOUNT
            </motion.button>
          </form>

          {/* Login Link */}
          <motion.div
            className="text-center text-sm mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <span className="text-gray-600">Already have an account? </span>
            <motion.span whileHover={{ scale: 1.05 }}>
              <Link href="/auth/login" className="text-orange font-medium">
                Login
              </Link>
            </motion.span>
          </motion.div>
        </motion.div>

      </div>}
      <svg className='absolute -top-24 -right-2' width="445" height="308" viewBox="0 0 445 308" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle opacity="0.05" cx="397.5" cy="-89.5" r="397.5" fill="#F17C06" />
      </svg>
    </div>
  );
} 