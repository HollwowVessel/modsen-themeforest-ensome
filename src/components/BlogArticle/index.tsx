import React from 'react';
import { Link } from 'react-router-dom';
import image from 'assets/images/icons/blog/news1.png';
import { Card, Date, Description, Image, Name } from './styled';

export const BlogArticle = () => (
  <Card>
    <Image src={image} alt="" />
    <Date>22 June 2022</Date>
    <Name>ISO 13485 compliance of medical devices</Name>
    <Description>
      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
      praesentium voluptatum deleniti atque corrupti quos dolores et quas. Quis
      autem vel eum iure...
    </Description>
    <Link to="/">Read more</Link>
  </Card>
);
