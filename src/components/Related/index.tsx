import { memo } from 'react';

import {
  Container,
  Date,
  Heading,
  Image,
  Post,
  PostDescription,
  Posts,
  Text,
  Title,
} from './styled';
import { RelatedProps } from './types';

export const Related = memo(({ cards }: RelatedProps) => (
  <Container>
    <Heading>Related Post</Heading>
    <Posts>
      {cards
        ?.sort((a, b) => b.views - a.views)
        ?.slice(0, 4)
        ?.map(({ info, heading, icon }, id) => (
          <Post key={id}>
            <Image src={icon} loading="lazy" />
            <PostDescription>
              <Date>{info}</Date>
              <Title>{heading}</Title>
              <Text>
                Mauris purus diam, iaculis non leo nec, ultricies fringilla
                odio. Fusce feugiat elit facilisis volutpat venenatis.
                Vestibulum tempor ligula vel orci consectetur, euismod augue
                bibendum...
              </Text>
            </PostDescription>
          </Post>
        ))}
    </Posts>
  </Container>
));
