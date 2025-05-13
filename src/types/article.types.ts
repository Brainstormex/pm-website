// Article Data Type Interfaces
export interface ArticleData {
  slug: string;
  fullpath: string;
  post_type: PostType;
  meta_data: MetaData;
  post_id: string;
  title: string;
  description: string;
  hero_image: string;
  content: string;
  json_content: ContentBlock[];
  category?: Category[];
  topics?: Topic[];
  authors?: Author[];
  countries?: Country[];
  contentWall?: ContentWall;
  currency?: Currency;
  postPrice?: number;
  attachments?: string;
  status?: "DRAFT" | "PUBLISHED" | "ARCHIVED";
  visibility?: "PUBLIC" | "PRIVATE";
  author?: AuthorInfo[];
}

// Post Type
export interface PostType {
  post_type_id: number | null;
  name: string;
}

// Meta Data
export interface MetaData {
  published_time: string | null;
  modified_time: string;
  section: string;
  tags: string[];
  seo: SEO;
  og: OpenGraph;
  twitter: TwitterCard;
  facebook: FacebookMeta;
}

export interface SEO {
  keywords: string;
  description: string;
}

export interface OpenGraph {
  title: string;
  description: string;
  image: string;
  url: string;
  type: string;
}

export interface TwitterCard {
  card: string;
  title: string;
  description: string;
  image: string;
  site: string;
  creator: string;
}

export interface FacebookMeta {
  title: string;
  description: string;
  image: string;
}

// Content Blocks
export type ContentBlock = {
  id: number;
  type: string;
  content: string;
  comments: any[];
  question?: string;
  answer?: string;
  label?: string;
  style?: string;
  href?: string;
  target?: string;
  media_url?: string;
  media_alt?: string;
  images?: { media_url: string; media_alt: string }[];
  galleryType?: string;
  embed?: string;
  title?: string;
  slug?: string;
  article_id?: number;
};

// Category
export interface Category {
  category_id: number;
  name: string;
  slug: string;
  parent?: Category;
}

// Topic
export interface Topic {
  tag_id: number;
  name: string;
  url: string;
}

// Author
export interface Author {
  user_id: number;
  username: string;
  name?: string;
  url: string;
  social_link: string;
  profile_image: string | null;
  email: string;
  full_name: string | null;
  first_name: string;
  last_name: string;
  bio: string;
  position: string;
  company: string;
  education: string | null;
  hobbies: string | null;
}

// Country
export interface Country {
  country_id: number;
  name: string;
}

// Content Wall
export interface ContentWall {
  content_wall_id: number;
  name: string;
  code: string;
}

// Currency
export interface Currency {
  currency_id: number;
  name: string;
  code: string;
}

// Author Info
export interface AuthorInfo {
  author: {
    image: string | null;
    social_link: string;
    email: string;
    user_slug: string;
    first_name: string;
    last_name: string;
  };
  name: string;
  slug: string;
  profileImage: string | null;
  social_link: string;
  email: string;
}
