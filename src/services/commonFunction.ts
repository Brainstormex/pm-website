export const shortenText = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };
  

  export const formatDays = (input: string) => {
    // Split the input string by commas
    const days = input.split(',');
  
    // Mapping of full day names to abbreviated form
    const dayMap = {
      Monday: 'Mon',
      Tuesday: 'Tue',
      Wednesday: 'Wed',
      Thursday: 'Thu',
      Friday: 'Fri',
      Saturday: 'Sat',
      Sunday: 'Sun',
    };
  
    // Get the abbreviated form for both days
    const startDay = dayMap[days[0].trim() as keyof typeof dayMap];
    const endDay = dayMap[days[1].trim() as keyof typeof dayMap];
  
    // Return the formatted range string
    return `${startDay}-${endDay}`;
  }
  
  export const convertTimeRange = (input: string): string => {
    // Split the input string by '-'
    const times = input.split('-');
    
    // Helper function to convert 24-hour format to 12-hour AM/PM format
    function convertTo12Hour(time: string) {
      const [hour, minute] = time.split(':').map(Number); // Convert to number
      
      let period = 'am';
      let hour12 = hour;
  
      // Convert to 12-hour format
      if (hour >= 12) {
        period = 'pm';
        if (hour > 12) hour12 -= 12; // Convert hours greater than 12 to 12-hour format
      } else if (hour === 0) {
        hour12 = 12; // Handle midnight
      }
  
      // Format time as "hh:mmam/pm"
      return `${hour12}:${minute.toString().padStart(2, '0')}${period}`;
    }
  
    // Convert both start and end times to 12-hour format
    const startTime = convertTo12Hour(times[0].trim());
    const endTime = convertTo12Hour(times[1].trim());
  
    // Return the formatted range
    return `${startTime} - ${endTime}`;
  }
  
  