import { BlogArticle } from 'components/BlogArticle';
import { CardItem, cardItems } from 'constants/testimonialCards';
import React from 'react';
import { LeftControlButton } from 'ui/Buttons/LeftControlButton';
import { RightControlButton } from 'ui/Buttons/RightControlButton';
import { getPhoto } from 'utils/getPhoto';
import { Buttons, Cards, Container, Heading, Info } from './styled';

export const Blog = () => (
  <Container>
    <Info>
      <Heading>Our blog </Heading>
      <Buttons>
        <LeftControlButton disabled />
        <RightControlButton />
      </Buttons>
    </Info>
    <Cards>
      {cardItems.map(
        ({ icon, name, profession, description }: CardItem, id) => (
          <BlogArticle />
        )
      )}
    </Cards>
  </Container>
);
