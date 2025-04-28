// import RedisService from './redis';
const revalidate = 30;
export const pageService = {

  getBaseUrl: (host?: string) => {
    let API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || '';
    
    if (host) {
      if (host.startsWith('in.')) {
        API_BASE_URL = "https://in-api.thinkry.tech";
      } else if (host.startsWith('anz.')) {
        API_BASE_URL = "https://anz-api.thinkry.tech";
      }
    } else if (typeof window !== "undefined") {
      const hostname = window.location.hostname;
      if (hostname.startsWith('in.')) {
        API_BASE_URL = "https://in-api.thinkry.tech";
      } else if (hostname.startsWith('anz.')) {
        API_BASE_URL = "https://anz-api.thinkry.tech";
      }
    }
    return API_BASE_URL;
  },

  getTopicsBySlug: async (slug: string, host?: string) => {
    try {
      const response = await fetch(`${pageService.getBaseUrl(host)}/api/topic/${slug}`, {
        next: { revalidate: revalidate } // Cache for 30 seconds
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching topics:', error);
      return null;
    }
  },  

  getTopics: async (host?: string) => {
    try {
      const response = await fetch(`${pageService.getBaseUrl(host)}/api/topic`, {
        next: { revalidate: revalidate } // Cache for 30 seconds
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching topics:', error);
      return null;
    }
  },

  getAuthors: async (page: number = 1, limit: number = 10, sortBy: string = "a-z", host?: string) => {
    try {
      const response = await fetch(`${pageService.getBaseUrl(host)}/api/author?page=${page}&limit=${limit}&sortBy=${sortBy}`, {
        next: { revalidate: revalidate } // Cache for 30 seconds
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching authors:', error);
      return null;
    } 
  },

  getAuthorStories: async (slug: string, page: number = 1, limit: number = 10, host?: string) => {
    try {
      const response = await fetch(`${pageService.getBaseUrl(host)}/api/author/${slug}/stories?page=${page}&limit=${limit}`, {
        next: { revalidate: revalidate } // Cache for 30 seconds
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching author:', error);
      return null;
    }
  },
  getAuthor: async (slug: string, host?: string) => {
    try {
      const response = await fetch(`${pageService.getBaseUrl(host)}/api/author/${slug}`, {
        next: { revalidate: revalidate } // Cache for 30 seconds
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching author:', error);
      return null;
    }
  },
  getPageData: async (slug: string, host?: string) => {
    try {
      const response = await fetch(`${pageService.getBaseUrl(host)}/page?slug=${slug}`, {
        next: { revalidate: revalidate } // Cache for 30 seconds
      });
      const data = await response.json();
      // await RedisService.set(slug, JSON.stringify(data), 60);
      return data;
    } catch (error) {
      console.error('Error in getPageData:', error);
      return null;
    }
  },

  getPageSEO: async (slug: string, host?: string) => {
    try {
      console.log(`${pageService.getBaseUrl(host)}/api/page/get-seo?slug=${slug}`, "process.env.NEXT_PUBLIC_API_BASE_URL");
      const response = await fetch(`${pageService.getBaseUrl(host)}/api/page/get-seo?slug=${slug}`, {
        next: { revalidate: revalidate } // Cache for 30 seconds
      });
      const data = await response.json();
      // await RedisService.set(slug, JSON.stringify(data), 60);
      return data;
    } catch (error) {
      console.error('Error in getPageSEO:', error);
      return null;
    }
  },

  validateSlug: async (slug: string, host?: string) => {
    try {
      const response = await fetch(`${pageService.getBaseUrl(host)}/api/validate-slug?slug=${slug}`, {
        next: { revalidate: revalidate } // Cache for 30 seconds
      });
      const data = await response.json();
      // await RedisService.set(slug, JSON.stringify(data), 60);
      return data;
    } catch (error) {
      console.error('Error in validateSlug:', error);
      return null;
    }
  },

  getSubCategories: async (category: string, host?: string) => {
    try {
      const response = await fetch(`${pageService.getBaseUrl(host)}/api/subcategories/${category}`, {
        next: { revalidate: revalidate } // Cache for 30 seconds
      });
      const subcategories = await response.json();
      
      // await RedisService.set(`subcategories-${category}`, JSON.stringify(subcategories), 60);
      return subcategories;
    } catch (error) {
      console.error('Error fetching subcategories:', error);
      return [];
    }
  },
  getMenus: async (host?: string) => {
    try {
      // const cachedData = await RedisService.get(`menu`);
      // if (cachedData) {
      //   return JSON.parse(cachedData);
      // }
      console.log(pageService.getBaseUrl(host), "process.env.NEXT_PUBLIC_API_BASE_URL");
      const response = await fetch(`${pageService.getBaseUrl(host)}/api/menu`, {
  
        next: { revalidate: revalidate } // Cache for 30 seconds
      });
      const menus = await response.json();
      
      // await RedisService.set(`menus`, JSON.stringify(menus), 60);
      return menus;
    } catch (error) {
      console.error('Error fetching menus:', error);
      return [];
    }
  },
  getPageDataBySlug: async (slug: string, host?: string) => {
    try {
      console.log(pageService.getBaseUrl(host), "process.env.NEXT_PUBLIC_API_BASE_URL");
      const response = await fetch(`${pageService.getBaseUrl(host)}/api/collection/${slug}`, {
          next: { revalidate: revalidate } // Cache for 30 seconds
      });
      console.log(response, "response");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching page data:', error);
      return null;
    }
  },
  getHotTopics: async (host?: string) => {
    try {
      console.log(pageService.getBaseUrl(host), "process.env.NEXT_PUBLIC_API_BASE_URL");
      const response = await fetch(`${pageService.getBaseUrl(host)}/api/hot-topics-appointments/topics`, {
        next: { revalidate: revalidate } // Cache for 30 seconds
      });
      console.log(response, "response");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching page data:', error);
      return null;
    }
  },
  getAppointments: async (host?: string) => {
    try {
      console.log(pageService.getBaseUrl(host), "process.env.NEXT_PUBLIC_API_BASE_URL");
      const response = await fetch(`${pageService.getBaseUrl(host)}/api/hot-topics-appointments/appointments`, {
        next: { revalidate: revalidate } // Cache for 30 seconds
      });
      console.log(response, "response");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching page data:', error);
      return null;
    }
  },
  getSubCategory: async (category: string, host?: string) => {
    try {
      const response = await fetch(`${pageService.getBaseUrl(host)}/api/category/getsubcategory/${category}`, {
        next: { revalidate: revalidate } // Cache for 30 seconds
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching page data:', error);
      return null;
    }
  },
  getSubMenu: async (category: string,menu_type: string, host?: string) => {
    try {
      const response = await fetch(`${pageService.getBaseUrl(host)}/api/category/getsubcategory/${category}?menu_type=${menu_type}`, {
        next: { revalidate: revalidate } // Cache for 30 seconds
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching page data:', error);
      return null;
    }
  },
  getEvents: async (archived?: boolean,host?: string) => {
    try {
      const response = await fetch(`${pageService.getBaseUrl(host)}/api/event/${archived?"past":"upcoming"}`, {
        next: { revalidate: revalidate } // Cache for 30 seconds
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching page data:', error);
      return null;
    }
  },
  getBrands: async (host?: string) => {
    try {
      const response = await fetch(`${pageService.getBaseUrl(host)}/api/brand`, {
        next: { revalidate: revalidate } // Cache for 30 seconds
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching page data:', error);
      return null;
    }
  }
};


// const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/event`, {
//   headers: {
//     'origin': 'https://www.domain1.com',
//   //   'Authorization': 'Bearer YOUR_API_TOKEN_HERE'
//   }
// });