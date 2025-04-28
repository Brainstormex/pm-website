// EmailSubscription.tsx
import React, { useState } from 'react';
import { Section } from '@/types/common';

const EmailSubscription: React.FC<{data: Section}> = ({ data }) => {
console.log(data)
  const [email, setEmail] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      // Replace with your actual API endpoint
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Subscription failed');
      }

      setIsSuccess(true);
      setEmail('');
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="my-8 bg-newsletterBackground mx-4 lg:mx-auto lg:p-5 p-6  rounded-xl   text-center" data-template={data.template}>
      {/* Email Icon */}
      <div className="flex justify-center mb-6">
        <div className="w-28 h-28 flex items-center justify-center">
          <svg width="75" height="61" viewBox="0 0 75 61" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M62.5 0H12.5C5.6055 0 0 4.55914 0 10.1667V50.8333C0 56.4377 5.6055 61 12.5 61H62.5C69.3945 61 75 56.4377 75 50.8333V10.1667C75 4.55914 69.3945 0 62.5 0ZM48.777 30.5L70.832 12.5619V48.4373L48.777 30.5ZM12.5 3.38997H62.5C66.2188 3.38997 69.332 5.38516 70.4023 8.12065L43.0273 30.3889C39.9804 32.867 35.0234 32.867 31.9763 30.3889L4.5973 8.12065C5.6676 5.38516 8.7813 3.38997 12.5 3.38997ZM4.168 12.5619L26.223 30.5L4.168 48.4381V12.5619ZM62.5 57.61H12.5C8.7812 57.61 5.668 55.6148 4.5977 52.8794L29.1837 32.8827C31.5001 34.7064 34.4962 35.6309 37.504 35.6309C40.5079 35.6309 43.5079 34.7064 45.8243 32.8827L70.4103 52.8794C69.3322 55.6148 66.2188 57.61 62.5 57.61Z" fill="#121212" />
          </svg>


        </div>
      </div>

      {/* Heading */}
      {/* Can pass {data.title} also */}
      <h2 className="text-5xl font-semibold font-fraunces mb-6">Hey You!</h2>

      {/* Description */}
      {/* Dynamic Data is not required as the data will stay same througout website   */}
      {/* <p className="text-sm font-medium mb-8">{data.description}</p> */}
      <p className="text-sm font-medium mb-8">
      Be the first to know insights, appointments, trends from all over Asia Pacific and get that edge you deserve.
      </p>
      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div className="relative mb-4">
          <input
            type="email"
            className="w-full p-4 pr-12 text-lg bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
            placeholder={"Your Email Address Here..."}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isSubmitting || isSuccess}
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2"
            disabled={isSubmitting || isSuccess}
          >
           <svg width="33" height="24" viewBox="0 0 33 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.437051 11.5145L8.468 14.3788L10.6418 23.495C10.6471 23.5171 10.6604 23.5347 10.6678 23.5558C10.6784 23.5867 10.6903 23.6156 10.7057 23.6449C10.731 23.6929 10.762 23.7347 10.7977 23.7745C10.8106 23.789 10.8162 23.8073 10.8307 23.8209C10.8373 23.8271 10.8461 23.829 10.8529 23.8349C10.8966 23.8728 10.9462 23.9012 10.9985 23.9266C11.0178 23.9359 11.0346 23.95 11.0544 23.9573C11.1265 23.984 11.2034 24 11.2838 24C11.2857 24 11.2876 24 11.2896 24C11.3728 23.9993 11.4517 23.9807 11.5256 23.9515C11.5462 23.9434 11.5634 23.9292 11.5833 23.919C11.6385 23.8904 11.6891 23.857 11.734 23.8145C11.7429 23.8061 11.7548 23.8033 11.7633 23.7943L17.5875 17.6631L22.8549 19.5488C22.9284 19.5751 23.0038 19.5876 23.0786 19.5876C23.3216 19.5876 23.5529 19.4533 23.6677 19.2268L32.9237 0.962901C32.9443 0.923808 32.9604 0.883113 32.9727 0.841135C32.9862 0.795634 32.9946 0.749491 32.9978 0.702707C32.9978 0.702066 32.9985 0.701746 32.9985 0.701746C33.0068 0.579019 32.9811 0.453087 32.9179 0.339333C32.9044 0.3153 32.8895 0.291908 32.8728 0.269478C32.7761 0.137138 32.6375 0.0506199 32.4861 0.0163333C32.4861 0.0163333 32.4854 0.0163333 32.4854 0.0160128C32.4854 0.0160128 32.4848 0.0160128 32.4841 0.0160128C32.4841 0.0160128 32.4841 0.0156924 32.4835 0.0156924C32.4828 0.0156924 32.4828 0.0156924 32.4822 0.015372C32.4809 0.0150515 32.4796 0.0150516 32.4783 0.0147311C32.4777 0.0144107 32.4777 0.0144107 32.477 0.0144107L32.4764 0.0140902C32.4764 0.0140902 32.4751 0.0140902 32.4751 0.0137698C32.4732 0.0134493 32.4712 0.0131289 32.47 0.0128085C32.4687 0.0124881 32.4687 0.0124881 32.4687 0.0124881C32.468 0.0124881 32.468 0.0124881 32.4674 0.0124881C32.4667 0.0121676 32.4667 0.0121676 32.4667 0.0121676C32.4667 0.0121676 32.4654 0.0121676 32.4654 0.0118472C32.4654 0.0118472 32.4648 0.0118472 32.4642 0.0118472C32.3552 -0.00930162 32.2373 -0.00257245 32.1251 0.0355594L0.455742 10.2725C0.18762 10.3594 0.00457443 10.6064 6.27084e-05 10.8868C-0.00380439 11.1675 0.171506 11.4197 0.437051 11.5145ZM12.6495 14.8205C12.5986 14.8593 12.5556 14.9054 12.5188 14.9556C12.5119 14.9651 12.508 14.9762 12.5016 14.9861C12.4642 15.0434 12.4376 15.1055 12.4197 15.1712C12.4167 15.1819 12.4089 15.1898 12.4065 15.2008L11.2593 20.3957L9.78323 14.2076L24.1872 6.03668L12.6495 14.8205ZM12.4389 21.1724L13.5344 16.2121L16.2331 17.1782L12.4389 21.1724ZM22.7524 18.1171L17.6365 16.2856C17.6356 16.2852 17.6347 16.2849 17.6338 16.2846L14.4123 15.1313L30.4545 2.9182L22.7524 18.1171ZM26.4159 3.26107L8.96412 13.1613L2.70062 10.9272L26.4159 3.26107Z" fill="#121212" fillOpacity="0.4"/>
</svg>

          </button>
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        {isSuccess && <p className="text-green-500 text-sm mb-4">Thanks for subscribing!</p>}

        {/* Privacy Text */}
        {/* {data?.privacyText && <p className="text-gray-500 text-sm">{data.privacyText}</p>} */}
             {/* Dynamic Data is not required as the data will stay same througout website   */}
         <p className="text-gray-500 text-sm">
         We promise we don’t spam or use your data and sell it to others.
          
          </p>
      </form>
    </div>
  );
};

export default EmailSubscription;