import { ChevronRightIcon, Search } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const SearchModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;
  
  const data = [
    { 
      category: 'Diversity', 
      title: 'Pepsi, KPMG US slash all diversity goals',
      image: '/assets/images/dummy.jpg'
    },
    { 
      category: 'Business', 
      title: 'Salaries in India to increase by 9.2% in 2025',
      image: '/assets/images/dummy.jpg'
    },
    { 
      category: 'Skilling', 
      title: "India's GenZ want skills and career growth",
      image: '/assets/images/dummy.jpg'
    },
    { 
      category: 'Employee Engagement', 
      title: 'Strategies for long term employee retention',
      image: '/assets/images/dummy.jpg'
    },
    { 
      category: 'Brand Initiative', 
      title: "A peak into LinkedIn's Talent Connect India 2025",
      image: '/assets/images/dummy.jpg'
    }
  ];

  const data1 = [
    { 
      title: "The Business of Talent: Sudhir Kesavan of CitiusTech on purpose...", 
      duration: '12 MIN',
      image: '/assets/images/dummy.jpg'
    },
    { 
      title: "A Conversation with Aisha Bowe, a former NASA Rocket Scientist", 
      duration: '12 MIN',
      image: '/assets/images/dummy.jpg'
    },
    { 
      title: "What does the future of work actually look like from a GenZ's POV", 
      duration: '12 MIN',
      image: '/assets/images/dummy.jpg'
    }
  ];
  
  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center bg-black/20 backdrop-blur-sm overflow-y-auto" onClick={onClose}>
      <div 
        className="relative w-full max-w-4xl mx-4 my-4 bg-white rounded-lg shadow-xl overflow-hidden"
        style={{ maxHeight: 'calc(100vh - 32px)' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        {/* <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button> */}

        {/* Modal Content Container - Added overflow-y-auto here */}
        <div className="p-4 md:p-6 lg:p-8 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 32px)' }}>
          {/* Search Input */}
          <div className="mb-6 relative">
            <input 
              type="text" 
              placeholder="Search..."
              className="w-full px-4 ps-10 pr-28 py-2 border border-gray-300 border-t-0 border-l-0 border-r-0 text-base md:text-lg focus:outline-none"
            />
            <button className='absolute right-1 top-1/2 bg-background flex items-center text-borderGray gap-x-1 font-medium uppercase -translate-y-1/2 text-sm md:text-base'>
              Search <ChevronRightIcon className='w-4 h-4 md:w-6 md:h-6 text-borderGray' />
            </button>
            <Search className='absolute left-1 top-1/2 -translate-y-1/2 text-borderGray w-4 h-4 md:w-5 md:h-5' />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Popular Reads Section */}
            <div className='md:border-r md:pr-4 lg:pr-6'>
              <h2 className="text-xl md:text-2xl font-medium mb-4">Popular Reads</h2>
              <div className="space-y-3 md:space-y-4">
                {data.map((read, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Image 
                      src={read.image} 
                      alt={read.title} 
                      className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover"
                      width={64}
                      height={64}
                    />
                    <div>
                      <p className="text-xs md:text-sm text-gray-500">{read.category}</p>
                      <h3 className="font-semibold text-sm md:text-md">{read.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side Content */}
            <div>
              {/* Popular Keywords */}
              <div className="mb-6">
                <h2 className="text-xl md:text-2xl font-medium mb-3 md:mb-4">Popular Keywords</h2>
                <div className="flex flex-wrap gap-2">
                  {['Leadership', 'DEI', 'Appointments', 'Compensation', 'Culture', 'Diversity', 'HR Technology', 'Startups'].map((keyword, index) => (
                    <span 
                      key={index} 
                      className="border border-borderGray px-4 py-1 rounded-lg text-sm md:text-lg text-borderGray cursor-pointer"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>

              {/* Popular Videos */}
              <div>
                <h2 className="text-xl md:text-2xl font-medium mb-3 md:mb-4">Popular Videos</h2>
                <div className="space-y-3 md:space-y-4">
                  {data1.map((video, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="relative">
                        <Image 
                          src={video.image} 
                          alt={video.title} 
                          className="w-20 h-12 md:w-24 md:h-16 rounded-lg object-cover"
                          width={64}
                          height={64}
                        />
                        <div className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-1 rounded">
                          {video.duration}
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-6 w-6 md:h-8 md:w-8 text-white bg-black/50 rounded-full p-1 md:p-2" 
                            viewBox="0 0 24 24" 
                            fill="currentColor"
                          >
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </div>
                      <h3 className="font-semibold text-sm md:text-md flex-1">{video.title}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;