import React from 'react';
import {
  Container,
  Description,
  Heading,
  Image,
  Item,
  List,
  SolutionContainer,
  Text,
} from './styled';
import Customer from '@/assets/images/services.png';
import Solution from '@/assets/images/servicesSolution.png';
import { ListItems } from '@/constants/services';

export const ServicesItemDescription = () => (
  <Container>
    <Description>
      <Heading>Customer</Heading>
      <Text>
        Donec tincidunt tempor quam, non mollis quam finibus nec. Quisque
        finibus consequat felis vel pretium. Aliquam gravida nisi vel convallis
        ultricies. Integer ante sapien, consequat et dolor vel.
      </Text>
      <Image src={Customer} alt="Customer" />
    </Description>
    <Description>
      <Heading>Challenge</Heading>
      <Text>
        Donec tincidunt tempor quam, non mollis quam finibus nec. Quisque
        finibus consequat felis vel pretium. Aliquam gravida nisi vel convallis
        ultricies. Integer ante sapien, consequat et dolor vel. Morbi urna
        massa, imperdiet in mauris et, euismod vestibulum lacus. Integer enim
        elit, tincidunt aliquam ligula id, lacinia auctor orci.
      </Text>
    </Description>
    <Description>
      <Heading>Solution</Heading>
      <Text>
        Donec tincidunt tempor quam, non mollis quam finibus nec. Quisque
        finibus consequat felis vel pretium. Aliquam gravida nisi vel convallis
        ultricies. Integer ante sapien, consequat et dolor vel.
      </Text>
      <SolutionContainer>
        <Image src={Solution} alt="Solution" />
        <List>
          {ListItems.map((el) => (
            <Item key={el}>{el}</Item>
          ))}
        </List>
      </SolutionContainer>
    </Description>
    <Description>
      <Heading>Results</Heading>
      <Text>
        Donec tincidunt tempor quam, non mollis quam finibus nec. Quisque
        finibus consequat felis vel pretium. Aliquam gravida nisi vel convallis
        ultricies. Integer ante sapien, consequat et dolor vel. Morbi urna
        massa, imperdiet in mauris et, euismod vestibulum lacus. Integer enim
        elit, tincidunt aliquam ligula id, lacinia auctor orci.
      </Text>
    </Description>
    <Description>
      <Heading>Technologies</Heading>
      <Text>
        Donec tincidunt tempor quam, non mollis quam finibus nec. Quisque
        finibus consequat felis vel pretium. Aliquam gravida nisi vel convallis
        ultricies. Integer ante sapien, consequat et dolor vel.
      </Text>
    </Description>
  </Container>
);
