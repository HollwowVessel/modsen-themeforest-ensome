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
import { blogArticles } from '@/constants/blogArticle';
import { RelatedProps } from './types';

export const Related = memo(({ tag }: RelatedProps) => (
  <Container>
    <Heading>Related Post</Heading>
    <Posts>
      {blogArticles
        .filter(({ tags }) =>
          tag !== -1 ? tags.indexOf(tag as string) !== -1 : null
        )
        .sort((a, b) => b.views - a.views)
        .map(({ info, heading, icon }, id) => (
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
