export interface CardProps {
  icon: string;
  info: string;
  text: string;
  heading: string;
  id: number;
  [key: string]: unknown;
}

export interface CardItem {
  icon: string;
  heading: string;
  info: string;
  text: string;
}
