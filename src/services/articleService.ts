// import RedisService from './redis';

export const articleService = {
  getArticleDataByFullPath: async (slug: string) => {
    try {
      console.log(
        process.env.NEXT_PUBLIC_API_BASE_URL,
        "process.env.NEXT_PUBLIC_API_BASE_URL"
      );
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/article/${slug}`
      );
      console.log(response, "response");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching Article data:", error);
      return null;
    }
  },
  getTrendingArticle: async (slug: string) => {
    try {
      console.log(
        process.env.NEXT_PUBLIC_API_BASE_URL,
        "process.env.NEXT_PUBLIC_API_BASE_URL"
      );
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/article/trending/${slug}`
      );
      console.log(response, "response");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching Article data:", error);
      return null;
    }
  },
  getRelatedArticle: async (slug: string) => {
    try {
      console.log(
        process.env.NEXT_PUBLIC_API_BASE_URL,
        "process.env.NEXT_PUBLIC_API_BASE_URL"
      );
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/article/related/${slug}`
      );
      console.log(response, "response");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching Article data:", error);
      return null;
    }
  },
  getArticlePreview: async (postId: string) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/article/preview/${postId}`
      );
      console.log(response, "response");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching Article data:", error);
      return null;
    }
  },
};
