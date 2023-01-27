import { Keyframes } from 'styled-components';

export interface BlogCardProps {
  image: string;
  date: string;
  text: string;
  heading: string;
  id: number;
  animation?: Keyframes;
}

export interface CardProps {
  animation: Keyframes;
}
