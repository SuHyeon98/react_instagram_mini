import { Category } from '../../Routers/Search';

export type PhotoType = { src: string; category: Category };

export const searchData: PhotoType[] = [
  { src: 'v.png', category: 'Idol' },
  { src: 'jk.jpg', category: 'Idol' },
  { src: 'jm.jpg', category: 'Idol' },
  { src: 'jin.jpg', category: 'Idol' },
  { src: 'rm.jpg', category: 'Idol' },
  { src: 'j-hope.jpg', category: 'Idol' },
  { src: 'tv.jpg', category: 'Tv' },
  { src: 'music.jpg', category: 'Music' },
  { src: 'city.jpg', category: 'City' },
  { src: 'game.jpg', category: 'Game' },
  { src: 'news.jpg', category: 'News' },
  { src: 'travel.jpg', category: 'Travel' },
];
