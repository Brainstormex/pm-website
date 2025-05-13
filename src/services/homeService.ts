import { api } from "./apiService";

export async function fetchHomePageData() {
  console.log("Fetching home page data",api);
  try {
    const response = await fetch("https://api-uat-pm.enpointe.io/api/collection/home", {
      headers: {
        "origin": "https://www.domain1.com"
      },
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    // console.log("Response",response)      ÷
    return await response.json();
  } catch (error) {
    console.error("Error fetching home page data:", error);
    return null;
  }
}

export async function fetchData(category: string) {
  try {
    const response = await fetch(`https://api-uat-pm.enpointe.io/api/collection/${category}`, {
      headers: {
        "origin": "https://www.domain1.com"
      },
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    
    const result = await response.json();
    return result.data.sections;
  } catch (error) {
    console.error(`Error fetching ${category} data:`, error);
    return null;
  }
}



export async function fetchLeadershipData() {
  try {
    const response = await fetch("https://api-uat-pm.enpointe.io/api/collection/leaderships", {
      headers: {
        "origin": "https://www.domain1.com"
      },
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    
    const result = await response.json();
    return result.data.sections;
  } catch (error) {
    console.error("Error fetching leadership data:", error);
    return null;
  }
} 