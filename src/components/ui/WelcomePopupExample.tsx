// 'use client';

// import React, { useState, useEffect } from 'react';
// import WelcomePopup from './WelcomePopup';

// export const WelcomePopupExample: React.FC = () => {
//   const [showWelcome, setShowWelcome] = useState(true);
  
//   // Check if this is the first visit using localStorage
// //   useEffect(() => {
// //     // Only run in browser environment
// //     if (typeof window !== 'undefined') {
// //       const hasVisitedBefore = localStorage.getItem('hasVisitedPeopleMatters');
// //       if (!hasVisitedBefore) {
// //         setShowWelcome(true);
// //       }
// //     }
// //   }, []);
  
//   const handleSkip = () => {
//     // Mark as visited
//     if (typeof window !== 'undefined') {
//       localStorage.setItem('hasVisitedPeopleMatters', 'true');
//     }
//     setShowWelcome(false);
//   };
  
//   if (!showWelcome) return null;
  
//   return (
//     <WelcomePopup onSkip={handleSkip} />
//   );
// }; 