interface CustomDateProps {
  date: string | Date | number;
  format?: 'full' | 'long' | 'medium' | 'short' | 'custom' | 'iso' | 'relative';
  customFormat?: {
    year?: 'numeric' | '2-digit';
    month?: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow';
    day?: 'numeric' | '2-digit';
    weekday?: 'long' | 'short' | 'narrow';
    hour?: 'numeric' | '2-digit';
    minute?: 'numeric' | '2-digit';
    second?: 'numeric' | '2-digit';
    timeZoneName?: 'long' | 'short';
    era?: 'long' | 'short' | 'narrow';
    dayPeriod?: 'narrow' | 'short' | 'long';
  };
  showTime?: boolean;
  show24Hour?: boolean;
  showSeconds?: boolean;
  showTimeZone?: boolean;
  showEra?: boolean;
  calendar?: 'buddhist' | 'chinese' | 'coptic' | 'ethiopia' | 'ethiopic' | 'gregory' | 'hebrew' | 'indian' | 'islamic' | 'iso8601' | 'japanese' | 'persian' | 'roc';
  locale?: string;
  className?: string;
}

const CustomDateComponent: React.FC<CustomDateProps> = ({
  date,
  format = 'medium',
  customFormat,
  showTime = false,
  show24Hour = false,
  showSeconds = false,
  showTimeZone = false,
  showEra = false,
  calendar = 'gregory',
  locale = 'en-US',
  className = '',
}) => {
  const parseDate = (input: string | Date | number): Date => {
    if (input instanceof Date) return input;
    
    if (typeof input === 'number') {
      // Handle Unix timestamp (in seconds or milliseconds)
      return new Date(input > 99999999999 ? input : input * 1000);
    }

    // Try parsing ISO format first
    let parsedDate = new Date(input);
    if (!isNaN(parsedDate.getTime())) {
      return parsedDate;
    }

    // Comprehensive list of date formats from around the world
    const formats = [
      // ISO 8601 formats
      /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,3})?Z?$/,  // 2024-03-20T14:30:00.000Z
      /^\d{4}-\d{2}-\d{2}$/,                                      // 2024-03-20
      /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/,                        // 2024-03-20T14:30
      /^\d{4}-W\d{2}-\d$/,                                       // 2024-W12-3 (ISO week date)
      /^\d{4}-\d{3}$/,                                           // 2024-079 (ordinal date)

      // US formats (MM/DD/YYYY)
      /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/,                        // 03/20/2024
      /^(\d{1,2})\/(\d{1,2})\/(\d{2})$/,                        // 03/20/24
      
      // European/UK formats (DD/MM/YYYY)
      /^(\d{1,2})-(\d{1,2})-(\d{4})$/,                          // 20-03-2024
      /^(\d{1,2})\.(\d{1,2})\.(\d{4})$/,                        // 20.03.2024 (German)
      /^(\d{1,2}),(\d{1,2}),(\d{4})$/,                          // 20,03,2024
      
      // Asian formats (YYYY/MM/DD)
      /^(\d{4})\/(\d{1,2})\/(\d{1,2})$/,                        // 2024/03/20 (Japanese)
      /^(\d{4})년\s*(\d{1,2})월\s*(\d{1,2})일$/,               // 2024년 03월 20일 (Korean)
      /^(\d{4})年(\d{1,2})月(\d{1,2})日$/,                     // 2024年03月20日 (Chinese)
      
      // Text month formats
      /^([A-Za-z]{3,9})\s+(\d{1,2}),?\s+(\d{4})$/,             // March 20, 2024
      /^(\d{1,2})\s+([A-Za-z]{3,9})\s+(\d{4})$/,               // 20 March 2024
      /^(\d{1,2})-([A-Za-z]{3,9})-(\d{4})$/,                    // 20-March-2024
      
      // Time formats
      /^(\d{1,2}):(\d{2})\s*([AaPp][Mm])$/,                    // 2:30 PM
      /^(\d{1,2}):(\d{2}):(\d{2})$/,                           // 14:30:00 (24h)
      /^(\d{1,2})\.(\d{2})$/,                                   // 14.30 (European)
      
      // Complex formats with time
      /^(\d{1,2})\/(\d{1,2})\/(\d{4})\s+(\d{1,2}):(\d{2})\s*([AaPp][Mm])$/,  // 03/20/2024 2:30 PM
      /^(\d{4})-(\d{2})-(\d{2})\s+(\d{2}):(\d{2}):(\d{2})$/,   // 2024-03-20 14:30:00
      
      // Relative time words (will be converted to current date)
      /^(today|tomorrow|yesterday)$/i,
      
      // Buddhist calendar format (BE)
      /^(\d{4,5})-(\d{2})-(\d{2})BE$/,                         // 2567-03-20BE
      
      // Islamic calendar format (AH)
      /^(\d{4})-(\d{2})-(\d{2})AH$/,                          // 1445-03-20AH
    ];

    // Try each format
    for (const formatRegex of formats) {
      if (formatRegex.test(input)) {
        // Handle relative dates
        if (/^(today|tomorrow|yesterday)$/i.test(input)) {
          const today = new Date();
          if (/tomorrow/i.test(input)) {
            today.setDate(today.getDate() + 1);
          } else if (/yesterday/i.test(input)) {
            today.setDate(today.getDate() - 1);
          }
          return today;
        }

        // Clean the input and try parsing
        const cleaned = input.replace(/[^\w\s\/:.-]/g, '');
        parsedDate = new Date(cleaned);
        if (!isNaN(parsedDate.getTime())) {
          return parsedDate;
        }
      }
    }

    // If all parsing attempts fail
    console.warn(`Unable to parse date: ${input}. Falling back to current date.`);
    return new Date();
  };

  const formatDate = () => {
    try {
      const dateObj = parseDate(date);
      
      // Base options for different format types
      const formatOptions: { [key: string]: Intl.DateTimeFormatOptions } = {
        full: {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          calendar,
        },
        long: {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          calendar,
        },
        medium: {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          calendar,
        },
        short: {
          year: '2-digit',
          month: 'numeric',
          day: 'numeric',
          calendar,
        },
        iso: {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          calendar: 'iso8601',
        }
      };

      // Handle relative format
      if (format === 'relative') {
        const rtf = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });
        const now = new Date();
        const diff = dateObj.getTime() - now.getTime();
        const days = Math.round(diff / (1000 * 60 * 60 * 24));
        
        if (Math.abs(days) <= 30) {
          return rtf.format(days, 'day');
        }
        
        const months = Math.round(days / 30);
        if (Math.abs(months) <= 12) {
          return rtf.format(months, 'month');
        }
        
        const years = Math.round(months / 12);
        return rtf.format(years, 'year');
      }

      // Get base options based on format type
      let options: Intl.DateTimeFormatOptions = 
        format === 'custom' 
          ? (customFormat || formatOptions.medium)
          : formatOptions[format];

      // Add time options if requested
      if (showTime) {
        options = {
          ...options,
          hour: '2-digit',
          minute: '2-digit',
          ...(showSeconds && { second: '2-digit' }),
          hour12: !show24Hour,
        };
      }

      // Add timezone if requested
      if (showTimeZone) {
        options.timeZoneName = 'short';
      }

      // Add era if requested
      if (showEra) {
        options.era = 'long';
      }

      return new Intl.DateTimeFormat(locale, options).format(dateObj);
    } catch (error) {
      console.error('Error formatting date:', error);
      return 'Invalid Date';
    }
  };

  const formattedDate = formatDate();
  const dateObj = parseDate(date);
  
  return (
    <time 
      className={className}
      dateTime={dateObj.toISOString()}
      title={dateObj.toLocaleString(locale, { 
        timeZone: 'UTC',
        calendar,
        ...customFormat
      })}
    >
      {formattedDate}
    </time>
  );
};

export default CustomDateComponent;
