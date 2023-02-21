import React from 'react';

import { Description, Heading, Image, Text, Wrapper } from './styled';
import { AboutContentProps } from './types';

export const AboutContent = ({
  headingText,
  textPartOne,
  textPartTwo,
  img,
  reverse,
}: AboutContentProps) => (
  <Wrapper reverse={reverse}>
    <Description>
      <Heading>{headingText}</Heading>
      <Text>{textPartOne}</Text>
      <Text>{textPartTwo}</Text>
    </Description>
    <Image src={img} alt={img} title="image" />
  </Wrapper>
);
