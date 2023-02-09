import { Keyframes } from 'styled-components';
import { Card, Date, Description, Image, Name } from './styled';
import { ArrowLink } from '@/ui/Links/ArrowLink';
import { BlogCardProps } from './types';

export const BlogCard = ({
  image,
  date,
  text,
  heading,
  id,
  animation,
}: BlogCardProps) => (
  <Card animation={animation as Keyframes}>
    <Image src={image} alt={image} loading="lazy" />
    <Date>{date}</Date>
    <Name>{heading}</Name>
    <Description>{text}</Description>
    <ArrowLink to={`/blog/${id}`} text="Read more" />
  </Card>
);
