// const API_BASE_URL = 'https://api-uat-pm.enpointe.io/api';

export const fetchHomeData = async () => {
  try {
    const response = await fetch(`https://api-uat-pm.enpointe.io/api/collection/home`, {
      headers: {
        'origin': 'https://www.domain1.com'
      }
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data = await response.json();
    console.log("Response From Home API ", data);
    return data.data;
  } catch (error) {
    console.error('Error fetching home data:', error);
    return null;
  }
}; 