import React from 'react';
import { Link } from 'react-router-dom';
import image from '@/assets/images/icons/blog/news1.jpg';
import { Card, Date, Description, Image, Name } from './styled';
import { ArrowLink } from '@/ui/Links/ArrowLink';

export const BlogCard = () => (
  <Card>
    <Image src={image} alt="" />
    <Date>22 June 2022</Date>
    <Name>ISO 13485 compliance of medical devices</Name>
    <Description>
      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
      praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis
      autem vel eum iure...
    </Description>
    <ArrowLink to="/" text="Read more" />
  </Card>
);
