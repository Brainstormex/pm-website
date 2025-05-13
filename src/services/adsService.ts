// import RedisService from './redis';

export const adsService = {
  getAdsJs: async (slug: string) => {
    try {
      // console.log(
      //   process.env.NEXT_PUBLIC_API_BASE_URL,
      //   "ads trigger"
      // );
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/ads/ads.js?slug=home-page`
      );
      // console.log(response, "responsemr");
      const data = await response.json();
      // console.log(data.data, "responsemr");
      return data.data;
    } catch (error) {
      console.error("Error fetching Article data:", error);
      return null;
    }
  },
};
