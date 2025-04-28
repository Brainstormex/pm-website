import { Article } from './page';

export const articles: Article[] = [
  {
    id: 'delimitation-south-india',
    title: 'Delimitation: South India Won\'t Back Down',
    excerpt: 'As South India continues to register concerns like delimitation and gaps for Hindi, having a seat of political power in the north, this struggle raises larger concerns about fairness and national identity in India.',
    coverImage: '/assets/images/1.webp',
    author: 'Outlook Bureau',
    date: '20 March 2023',
    magazineId: 'outlook-11-april-2025',
    slug: 'delimitation-south-india'
  },
  {
    id: 'how-geography-history-ingrained-divide',
    title: 'How Geography, History Ingrained North-South Divide In India',
    excerpt: 'From topography to colonial policies to linguistic differences, the North-South divide in India runs deep and has been widened with decades of polarization by divide-and-rule policies.',
    coverImage: '/assets/images/1.webp',
    author: 'Sameer Khan',
    date: '06 April 2023',
    magazineId: 'outlook-11-april-2025',
    slug: 'how-geography-history-ingrained-divide'
  },
  {
    id: 'south-concerns-about-delimitation',
    title: 'South\'s Concerns About Delimitation are Well-Founded',
    excerpt: 'Southern states fear that a fresh delimitation would reward northern states with higher populations and reduce southern representation in Parliament, which could be damaging to regional interests.',
    coverImage: '/assets/images/1.webp',
    author: 'Prashant Sridhar',
    date: '15 March 2023',
    magazineId: 'outlook-11-april-2025',
    slug: 'south-concerns-about-delimitation'
  },
  {
    id: 'delimitation-south-pay-price',
    title: 'Delimitation: Will South Pay the Price for Delhi\'s Negligence?',
    excerpt: 'With potential delimitation on the horizon, southern states may face reduced representation as a result of their successful demographic control, in contrast to northern states with growing populations.',
    coverImage: '/assets/images/1.webp',
    author: 'Supriya Menon',
    date: '18 March 2023',
    magazineId: 'outlook-11-april-2025',
    slug: 'delimitation-south-pay-price'
  },
  {
    id: 'new-delimitation-formula',
    title: 'We Need A New Delimitation Formula',
    excerpt: 'Experts argue for a balanced approach to delimitation that acknowledges population control efforts while ensuring fair representation across states.',
    coverImage: '/assets/images/1.webp',
    author: 'Jayashree Narayanan',
    date: '14 April 2023',
    magazineId: 'outlook-11-april-2025',
    slug: 'new-delimitation-formula'
  },
  {
    id: 'hindi-imposition',
    title: 'Hindi Imposition: How Perspectives Vary In Karnataka And Tamil Nadu',
    excerpt: 'A deep dive into how different southern states perceive and respond to language policies, revealing complex regional dynamics within the South itself.',
    coverImage: '/assets/images/1.webp',
    author: 'Archana Ramasamy',
    date: '05 April 2023',
    magazineId: 'outlook-11-april-2025',
    slug: 'hindi-imposition'
  },
  {
    id: 'hindi-imposition',
    title: 'Hindi Imposition: How Perspectives Vary In Karnataka And Tamil Nadu',
    excerpt: 'A deep dive into how different southern states perceive and respond to language policies, revealing complex regional dynamics within the South itself.',
    coverImage: '/assets/images/1.webp',
    author: 'Archana Ramasamy',
    date: '05 April 2023',
    magazineId: 'outlook-04-april-2025',
    slug: 'hindi-imposition'
  }
];

// Helper function to get articles by magazine ID
export function getArticlesByMagazineId(magazineId: string) {
  return articles.filter(article => article.magazineId === magazineId);
}