import { memo } from 'react';

import { Card, Date, Description, Image, Name } from './styled';
import { ArrowLink } from '@/ui/Links/ArrowLink';
import { BlogCardProps } from './types';

export const BlogCard = memo(
  ({ image, date, text, heading, id }: BlogCardProps) => (
    <Card>
      <Image src={image} alt="" />
      <Date>{date}</Date>
      <Name>{heading}</Name>
      <Description>{text}</Description>
      <ArrowLink to={`/blog/${id}`} text="Read more" />
    </Card>
  )
);
