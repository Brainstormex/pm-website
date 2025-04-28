export interface EventResponse {
  success: boolean;
  statusCode: number;
  timestamp: string;
  message: string;
  data: {
    data: Event[];
    yearEventCounts: YearEventCount[];
    meta: Meta;
  };
}


interface YearEventCount {
  year: number;
  totalEvents: number;
}

interface Meta {
  renderType: string;
  extraComponents: string;
  totalEntries: number;
  currentPage: number;
  pageSize: number;
  totalPages: number;
}

export const fetchEvents = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/event`, {
        headers: {
          'origin': 'https://www.domain1.com',
        //   'Authorization': 'Bearer YOUR_API_TOKEN_HERE'
        }
      });
      
      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }
      
      const data = await response.json();
      console.log("Response From Events API ", data);
      return data.data;
    } catch (error) {
      console.error('Error fetching events:', error);
      throw error;
    }
  }; 

//     // console.log("Fetching home page data",api);
//     try {
//       const response = await fetch("https://api-uat-pm.enpointe.io/api/event", {
//         method: 'GET',
//         headers: {
//           "origin": "https://www.domain1.com",
//         },
//         // next: { revalidate: 3600 } // Cache for 1 hour
//       });
//       console.log("Response from Events API", response);
//       if (!response.ok) {
//         throw new Error(`API request failed with status ${response.status}`);
//       }
//       const data = await response.json();
//       console.log("Response From Events API ", data);
//       return data;
//     } catch (error) {
//       console.error("Error fetching home page data:", error);
//       throw error; // Return type must match Promise<EventResponse>, so throw instead of returning null
//     }
//   }
// export async function fetchEvents(): Promise<EventResponse> {
//   try {
//     const response = await fetch('https://api-uat-pm.enpointe.io/api/event', {
//       headers: {
//         'origin': 'https://www.domain1.com'
//       }
//     });

//     console.log("Response:", response);

//     if (!response.ok) {
//       throw new Error('Failed to fetch events');
//     }

//     return await response.json();
//   } catch (error) {
//     console.error('Error fetching events:', error);
//     throw error;
//   }
// } 