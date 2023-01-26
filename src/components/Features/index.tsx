import React, { memo } from 'react';
import { FillButton } from '@/ui/Buttons/FillButton';
import features from '@/assets/images/features.png';
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
import { FillButtonLink } from '@/ui/Links/FillButtonLink';

export const Features = memo(() => (
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
        <FillButtonLink text="Discover more" to="/solutions" />
      </Discover>
    </Info>
    <Solutions>
      <SolutionsImage src={features} alt="features" />

      <SolutionsInfo>
        <SolutionsImage src={features} alt="features" />
        <SolutionsHeading>Radically new solutions for data</SolutionsHeading>
        <SolutionsDescription>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </SolutionsDescription>
        <FillButtonLink text="Learn more" to="/solutions" />
      </SolutionsInfo>
    </Solutions>
  </Container>
));
