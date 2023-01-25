import React, { memo } from 'react';
import Who from '@/assets/images/who.jpg';
import Mission from '@/assets/images/mission.jpg';
import {
  Container,
  Description,
  Heading,
  Image,
  Text,
  Wrapper,
} from './styled';

export const About = memo(() => (
  <Container>
    <Wrapper>
      <Description>
        <Heading>Who we are</Heading>
        <Text>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </Text>
        <Text>
          Donec tincidunt tempor quam, non mollis quam finibus nec. Quisque
          finibus consequat felis vel pretium. Aliquam gravida nisi vel
          convallis ultricies. Integer ante sapien, consequat et dolor vel,
          cursus lacinia lectus.
        </Text>
      </Description>
      <Image src={Who} />
    </Wrapper>
    <Wrapper>
      <Image src={Mission} />
      <Description>
        <Heading>Our mission</Heading>
        <Text>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </Text>
        <Text>
          Donec tincidunt tempor quam, non mollis quam finibus nec. Quisque
          finibus consequat felis vel pretium.
        </Text>
      </Description>
    </Wrapper>
  </Container>
));