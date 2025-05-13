export interface Article {
  title: string;
  description?: string;
  image: string;
  link: string;
  category: string;
  date: string;
  author?: string;
  content?: string;
  categorySlug?: string;
  authorSlug?: string;
  dataType?: string;
  duration?: number;
  isVideo?: boolean;
  location?: string;
}



// export interface AuthorArticle {
//   id: string;
//   title: string;
//   excerpt: string;
//   category: string;
//   authorId: string;
//   articleImage?: string;
// }

export interface Section {
  startDate?:string;
  heading?: string;
  buttontext?:string;
  getBanner?:string;
  title?: string;
  label?: string;
  type: string;
  template: string;
  description: string;
  privacyText?: string;
  placeholder?: string;
  image: string | null;
  link?: string;
  articles?: Article[];
  events?: Event[];
  date?: string;
  podcasts?: Podcast[];
  brandInitiatives?: BrandInitiative[];
  researchArticles?: ResearchArticle[];
  sections?: Section[];
}

export interface BreadcrumbData {
  title: string;
  link?: string;
}

export interface SeoData {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  image: string;
  type: string;
  siteName: string;
  locale: string;
  imageAlt: string;
  imageType: string;
  imageWidth: string;
  imageHeight: string;
}

export interface PageSectionData {
  page_id: string;
  sectionData: Section[];
  seoData?: SeoData;
  breadcrumbData?: BreadcrumbData[];
}

export interface PageArticleData {
  page_id: string;
  articleData: Article[];
  seoData?: SeoData;
  breadcrumbData?: BreadcrumbData[];
}

export interface PageProps {
  params: Promise<{
    slug?: string;
    category?: string;
    sub_category?: string;
    post_type?: string;
    brand_slug?: string;
  }>;
}

export interface PageRendererProps {
  slug?: string;
  category?: string;
  sub_category?: string;
  type: string;
  template?: string;
  data?: Section[] | Article[];
}

export interface Menu {
  [key: string]: MenuItem[];
}

// export interface Menu {
//   primaryNav: MenuItem[];
//   secondaryNav: MenuItem[];
//   upperNav: MenuItem[];
// }
export interface MenuItem {
  label: string;
  href?: string;
  children?: MenuItem[];
  icon?: string;
}

export interface FooterJson {
  footerData: {
    socialLinks: {
      name: string;
      url: string;
    }[];
    sections: {
      title: string;
      links: {
        label: string;
        href: string;
      }[];
    }[];
    bottomLinks: {
      label: string;
      href: string;
    }[];
    copyright: string;
  };
}

export interface Topic {
  text: string;
  value: number;
  href: string;
}

export interface TopicRendererProps {
  data?: Article[];
}

export interface Speaker {
  id: string;
  name: string;
  email: string;
  description: string;
  linkedIn?: string;
  image?: string;
};

export interface Audience {
  title: string;
  description: string;
  attendees: string[];
};

export interface WhoShouldAttend {
  description: string;
  title: string;
  reasons: string[];
}

export interface Agenda {
  id: string;
  title: string;
  description: string;
}

export interface GalleryImage {
  src: string;
  alt: string;

}



export interface Event {
  slug: string;
  id?: string;
  link:string;
  date:number;
  time:string;
  title: string;
  description: string;
  startDate: string;
  endDate?: string;
  month: string;
  days: string | undefined;
  location: string;
  audience: string;
  audiences?: Audience[];
  year: number;
  // Support both single image or array of images
  image?: string;
  images?: string[];
  gallery?: string[];
  type: string;
  quote?: string;
  speakers?: Speaker[];
  keyInsights?: string[];
  whoShouldAttend?: string;
  whyShouldAttend?: Agenda[];
  agenda?: Agenda[];
  imageUrl?: string;
  is_archived?: boolean;
  // Add any other properties your events have
}
export interface BrandInitiative {
  title: string;
  description: string;
  image: string;
  link: string;
  category: string;
  author: string;
  logo?: string;
}

export interface ResearchArticle {
  title: string;
  description: string;
  image: string;
  link: string;
  category: string;
  author: string;
  featured?: boolean;
}

export interface Podcast {
  author: string;
  title: string;
  description: string;
  image: string;
  link: string;
  template: string;
  category: string;
  time: string;
  duration?: string;
  featured?: boolean;
}

export interface HandpickedItem {
  title: string;
  description: string;
  image: string;
  link: string;
  category: string;
  logo?: string;
  type?: string;
}

export interface NavigationLink {
  title: string;
  path: string;
}

export interface CategoryNavigation {
  [key: string]: NavigationLink[];
}

export interface MainMenus {
  UpperNav: MenuItem[];
  BottomMenu: MenuItem[];
  OurEvents: MenuItem[];
  OurProducts: MenuItem[];
  FooterCol6: MenuItem[];
  FooterCol5: MenuItem[];
  FooterCol4: MenuItem[];
  FooterCol3: MenuItem[];
  FooterCol2: MenuItem[];
  FooterCol1: MenuItem[];
  SocialMenu: MenuItem[];
  HeaderRight: MenuItem[];
  HeaderLeft: MenuItem[];
  OtherLinks: MenuItem[];
}

export interface HotTopic {
  id: number;
  title: string;
  image: string;
  slug: string;
}

export interface Appointment {
  id: number;
  title: string;
  image: string;
  slug: string;
  company_name: string;
  designation: string;
  country: string;
}

export interface SeoData {
  seo_title: string;
  seo_description: string;
  seo_slug: string;
  seo_facebook_title: string;
  seo_facebook_description: string;
  seo_facebook_image: string;
  seo_twitter_title: string;
  seo_twitter_description: string;
  seo_twitter_image: string;
  seo_keywords: string;
  seo_image: string;
}

// export interface Author {
//   id: string;
//   firstName: string;
//   lastName: string;
//   imageUrl: string;
//   bio: String;
//   position: String;
//   company: String;
//   email: String;
// }

// export interface Article {
//   id: string;
//   title: string;
//   slug: string;
//   excerpt: string;
//   date: string;
//   authorId: string;
// }
export interface Author {
  id: string;
  slug: string;
  firstName: string;
  lastName: string;
  position: string;
  company: string;
  email: string;
  profile_image?: string;
  profileImage?: string;
  linkedin?: string;
  name?: string;
  social_link?: string;
  full_name?: string;
  url?: string;
  first_name?: string;
  last_name?: string;
}

export interface PodcastSeason {
  id: string;
  title: string;
  subtitle: string;
}
export interface PodcastEpisode {
  id: string;
  number: string;
  title: string;
  slug: string;
  subtitle: string;
  speaker_name: string;
  speaker_title: string;
  duration: string;
  description: string;
  image: string;
  play_link: string;
  season_id: string;
  date: string;
}

export interface SessionData {
  accessToken?: string;
  subscriber_id?: string;
  user_email?: string;
  user_mobile?: string;
  first_name?: string;
  last_name?: string;
  company_name?: string;
  designation?: string;
  fk_country_id?: string;
  country_name?: string;
  is_subscribe_news_letter?: boolean;
  is_accept_terms?: boolean;
  is_user_type?: string;
  userData?: any; // You can define a proper type for this later
}

export interface Topic {
  id: string;
  name: string;
  slug: string;
}

export interface TopicResponse {
  posts: Article[];
  topic: Topic;
}

export interface ArticleData {
  slug: string;
  fullpath: string;
  post_type: string;
  meta_data: {
    published_time: string;
    modified_time: string;
    section: string;
    tags: string[];
    seo: {
      keywords: string;
      description: string;
    };
    og: {
      title: string;
      description: string;
      image: string;
      url: string;
      type: string;
    };
    twitter: {
      title: string;
      description: string;
      image: string;
      card: string;
      site: string;
      creator: string;
    };
    facebook: {
      title: string;
      description: string;
      image: string;
    };
  };
  title: string;
  description: string;
  hero_image: string;
  json_content: any[];
  content: string;
  topics: Topics[];
  category: Category[];
  author: Author[];
  authors: Author[]; 
  // Add other properties of articleData here if needed
}

export interface Topics {
  name: string;
  slug: string;
  id: number;
}
export interface Category {
  name: string;
  slug: string;
  id: number;
  parent_id: Category | null;
}
export interface Country {
  icon: string;
  name: string;
}

export interface EventData {
  title: string;
  events: Event[];
  type: string;
  template: string;
  description: string;
  image: string;
}


export interface BrandReachout {
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface Brand {
  id: string;
  name: string;
  image: string;
  slug: string;
}

export interface SubCategory {
  category_id: string;
  name: string;
  slug: string;
}
