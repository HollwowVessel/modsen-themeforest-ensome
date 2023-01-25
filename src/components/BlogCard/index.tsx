import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import { Card, Date, Description, Image, Name } from './styled';
import { ArrowLink } from '@/ui/Links/ArrowLink';

export const BlogCard = memo(
  ({
    image,
    date,
    text,
    heading,
    id,
  }: {
    image: string;
    date: string;
    text: string;
    heading: string;
    id: number;
  }) => (
    <Card>
      <Image src={image} alt="" />
      <Date>{date}</Date>
      <Name>{heading}</Name>
      <Description>{text}</Description>
      <ArrowLink to={`/blog/${id}`} text="Read more" />
    </Card>
  )
);
