import React from 'react';
import { FillButton } from 'ui/Buttons/FillButton';
import features from 'assets/images/features.png';
import {
  Container,
  Description,
  Discover,
  Heading,
  Info,
  Newest,
  Solutions,
  SolutionsDescription,
  SolutionsHeading,
  SolutionsImage,
  SolutionsInfo,
} from './styled';

export const Features = () => (
  <Container>
    <Info>
      <Heading>
        The <Newest>newest</Newest> business analytics platform
      </Heading>
      <Discover>
        <Description>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </Description>
        <FillButton text="Discover more" />
      </Discover>
    </Info>
    <Solutions>
      <SolutionsImage src={features} alt="features" />
      <SolutionsInfo>
        <SolutionsHeading>Radically new solutions for data</SolutionsHeading>
        <SolutionsDescription>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </SolutionsDescription>
        <FillButton text="Learn more" />
      </SolutionsInfo>
    </Solutions>
  </Container>
);
