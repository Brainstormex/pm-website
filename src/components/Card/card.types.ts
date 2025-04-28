import {
  titleVariants,
  descriptionVariants,
  imageVariants,
  layoutVariants,
  titleSizeVariants,
  descriptionSizeVariants,
  hoverVariants,
  imageSizeVariants,
  titleMarginVariants,
} from "./cardVariants";

export interface CardData {
  author?: string;
  category?: string;
  title: string;
  description?: string;
  image?: string;
  authorSlug?:string;
  categorySlug?:string;
  link?:string;
  duration?: number; // Duration in minutes
  isVideo?: boolean; // Flag to indicate if the content is a video
  videoUrl?: string; // Add this property for video URLs
  template?: string;
}

export interface CardProps {
  data: CardData;
  wantDescription?: boolean;
  title?: keyof typeof titleVariants;
  description?: keyof typeof descriptionVariants;
  imageStyle?: keyof typeof imageVariants;
  imageSize?: keyof typeof imageSizeVariants;
  layout?: keyof typeof layoutVariants;
  className?: string;
  titleSize?: keyof typeof titleSizeVariants;
  descriptionSize?: keyof typeof descriptionSizeVariants;
  textOnImage?: boolean;
  hoverStyle?: keyof typeof hoverVariants;
  catehory?:string;
  author?:string
  authorSlug?:string;
  categorySlug?:string;
  showDuration?: boolean; // Flag to toggle duration badge visibility
  durationPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'; // Position of the duration badge
  isVideo?: boolean; // Flag to toggle play button overlay for videos
  titleMargin?:keyof typeof titleMarginVariants
  template?: string;
}
