import { IoTv } from 'react-icons/io5';
import { SearchBoardTextProps } from '../Search/SearchCategory/SearchBoardText';
import { IoIosMusicalNotes } from 'react-icons/io';

export const categoryButtons: SearchBoardTextProps[] = [
  { category: 'ALL' },
  { category: 'Tv', icon: <IoTv /> },
  { category: 'Idol' },
  { category: 'Music', icon: <IoIosMusicalNotes /> },
  { category: 'City' },
  { category: 'Game' },
  { category: 'News' },
  { category: 'Travel' },
];
