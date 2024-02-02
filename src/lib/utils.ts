import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : 'https://upenha.vercel.app';

export const sleep = (delay: number) =>
  new Promise((resolve) => setTimeout(resolve, delay));

export function smartSubstring(text: string, length: number) {
  const content = text.split('\n').filter(Boolean);
  content.shift();
  return content.at(0)?.split(' ').slice(0, length).join(' ') + '...';
}
