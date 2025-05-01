"use client"

import Image from 'next/image';
import React, { useState, useEffect } from 'react';

interface RatingOption {
  value: number;
  label: string;
  icon: string;
}

const PopupWindow: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [rating, setRating] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<string>('');
  const [contactConsent, setContactConsent] = useState<boolean>(false);
  const [researchConsent, setResearchConsent] = useState<boolean>(false);
  const [animateIn, setAnimateIn] = useState<boolean>(false);
  
  // Handle animation timing
  useEffect(() => {
    if (isOpen) {
      // Delay setting the animation state to true for a smoother effect
      setTimeout(() => setAnimateIn(true), 50);
    } else {
      setAnimateIn(false);
    }
  }, [isOpen]);

  const togglePopup = (): void => {
    if (isOpen) {
      // First animate out, then close
      setAnimateIn(false);
      setTimeout(() => setIsOpen(false), 300);
    } else {
      // Open first, animation is handled by useEffect
      setIsOpen(true);
    }
  };

  const handleRatingClick = (value: number): void => {
    setRating(value);
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    
    // Here you would typically send the feedback data to your backend
    console.log({
      rating,
      feedback,
      contactConsent,
      researchConsent
    });
    
    // Reset form and close popup
    setRating(null);
    setFeedback('');
    setContactConsent(false);
    setResearchConsent(false);
    
    // Close popup with animation
    togglePopup();
    
    // You could add a success message here
    alert('Thank you for your feedback!');
  };

  const ratingOptions: RatingOption[] = [
    { value: 1, label: 'Terrible', icon: `/assets/logos/terrible.svg` },
    { value: 2, label: 'Bad', icon: '/assets/logos/bad.svg' },
    { value: 3, label: 'Okay', icon: '/assets/logos/okay.svg' },
    { value: 4, label: 'Good', icon: '/assets/logos/good.svg' },
    { value: 5, label: 'Amazing', icon: '/assets/logos/amazing.svg' }
  ];

  // SVG background for the rate experience button
  const RateButtonSVG = () => (
    <svg width="64" height="552" viewBox="0 0 64 552" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-0 top-0 z-0">
      <g filter="url(#filter0_d_4145_861)">
        <path d="M0.647724 119.134L0.647728 32L-3.5 32L-3.50002 534L0.647706 534L0.64771 446.866C0.647711 429.845 14.4457 416.047 31.4665 416.047C35.6271 416.047 39 412.674 39 408.513L39 157.487C39 153.326 35.6271 149.953 31.4665 149.953C14.4458 149.953 0.647723 136.155 0.647724 119.134Z" fill="#0D121E"/>
      </g>
      <defs>
        <filter id="filter0_d_4145_861" x="-28.5" y="0" width="92.5" height="552" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="-7"/>
          <feGaussianBlur stdDeviation="12.5"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.945344 0 0 0 0 0.485872 0 0 0 0 0.022106 0 0 0 0.2 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4145_861"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4145_861" result="shape"/>
        </filter>
      </defs>
    </svg>
  );

  // SVG background for close window button - using the same SVG pattern
  const CloseButtonSVG = () => (

<svg width="54" height="402" viewBox="0 0 54 502" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -left-[1.95rem] top-0 z-0">
<path d="M2.6477 87.134V0H0V502H2.6477V414.866C2.6477 397.845 29.4457 384.047 46.4665 384.047C50.6271 384.047 54 380.674 54 376.513V125.487C54 121.326 50.6271 117.953 46.4665 117.953C29.4458 117.953 2.6477 104.155 2.6477 87.134Z" fill="#0D121E"/>
</svg>




  );

  return (
    <>
      {/* Vertical sticky tab on the left side */}
      <div className="fixed left-0 top-1/3 z-50">
        {!isOpen && (
          <div className="relative h-36 w-12">
            <RateButtonSVG />
            <button 
              onClick={togglePopup}
              className="absolute top-36 mr-4 -left-1 transform rotate-90 origin-bottom-left text-white flex items-center py-2 hover:opacity-90 transition-opacity z-10"
            >
              <span className="whitespace-nowrap font-medium text-lg">Rate your experience</span>
            </button>
          </div>
        )}
      </div>

      {/* Popup overlay */}
      {isOpen && (
        <div 
          className={`fixed inset-0 bg-black z-[100] transition-opacity duration-300 ${
            animateIn ? 'bg-opacity-50' : 'bg-opacity-0'
          }`}
          onClick={togglePopup}
        >
          {/* Left-aligned popup container */}
          <div 
            className={`bg-white max-w-2xl h-[600px] w-full z-[200] relative transition-all duration-300 top-1/4 rounded-r-xl shadow-xl ${
              animateIn ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'
            }`}
            onClick={e => e.stopPropagation()}
          >
            {/* Close window button outside modal */}
            {isOpen && (
              <div className="absolute right-[-4.5rem] top-[12%] h-36 w-12 z-[220]">
                <CloseButtonSVG />
                <button 
                  onClick={togglePopup}
                  className="absolute top-24 mr-4 -left-6 transform rotate-90 origin-bottom-left text-white flex items-center py-2 hover:opacity-90 transition-opacity z-[230]"
                >
                  <span className="whitespace-nowrap font-medium text-lg">Close window</span>
                </button>
              </div>
            )}

            {/* Popup content */}
            <div className="py-8 px-10 z-50 border-r-4 border-b-4  border-t-4 rounded-r-xl border-inkBlack overflow-y-auto h-full">
              <h2 className="text-xl font-bold mb-2">Your Opinion Matters...</h2>
              <p className="mb-6 text-lg">What do you think of your experience with People Matters!</p>

              {/* Rating buttons */}
              <div className="flex flex-row w-full justify-around gap-x-3 mb-8 gap-0">
                {ratingOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleRatingClick(option.value)}
                    className={`flex flex-col w-full items-center py-3 border rounded-lg transition-all ${
                      rating === option.value
                        ? 'border-none bg-white shadow-lg' 
                        : 'border bg-white/20'
                    }`}
                    style={{
                      boxShadow: rating === option.value ? '0 0 10px rgba(241, 124, 6, 0.4)' : 'none'
                    }}
                  >
                    <div className="relative w-10 h-10">
                      <Image 
                        width={40} 
                        height={40} 
                        className={`${rating === option.value ? 'opacity-100' : 'opacity-30'}`}
                        alt={option.label} 
                        src={option.icon} 
                      />
                    </div>
                    <span className={`${rating === option.value ? 'font-medium' : ''} text-sm my-2`}>
                      {option.label}
                    </span>
                  </button>
                ))}
              </div>

              {/* Feedback text area */}
              <div className="mb-6">
                <label htmlFor="feedback" className="block mb-2 text-sm text-gray-500">
                  What are the main reasons for your rating?
                </label>
                <textarea
                  id="feedback"
                  className="w-full border border-gray-300 rounded-md p-3 h-32 focus:outline-none focus:ring-2 focus:ring-orange"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  placeholder="Please share your feedback..."
                />
              </div>

              {/* Consent checkboxes */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="contactConsent"
                    className="accent-orange w-4 h-4"
                    checked={contactConsent}
                    onChange={() => setContactConsent(!contactConsent)}
                  />
                  <label htmlFor="contactConsent" className="ml-2 text-gray-600 text-sm">
                    I may be contacted about this feedback. <a href="#" className="text-orange hover:underline">Privacy Policy</a>
                  </label>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="researchConsent"
                    checked={researchConsent}
                    className="accent-orange w-4 h-4"
                    onChange={() => setResearchConsent(!researchConsent)}
                  />
                  <label htmlFor="researchConsent" className="ml-2 text-gray-600 text-sm">
                    I'd like to help improve by joining the <a href="#" className="text-orange hover:underline">Research Group</a>.
                  </label>
                </div>
              </div>

              {/* Submit button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-orange text-white font-medium py-3 rounded-md hover:bg-orange-600 transition-colors"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupWindow;