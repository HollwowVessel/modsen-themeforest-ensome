import React, { memo } from 'react';
import { posts } from '@/constants/blogSidebar';
import { ArrowLink } from '@/ui/Links/ArrowLink';
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

export const Related = memo(() => (
  <Container>
    <Heading>Related Post</Heading>
    <Posts>
      {posts.map(({ date, heading, image }, id) => (
        <Post key={id}>
          <Image src={image} />
          <PostDescription>
            <Date>{date}</Date>
            <Title>{heading}</Title>
            <Text>
              Mauris purus diam, iaculis non leo nec, ultricies fringilla odio.
              Fusce feugiat elit facilisis volutpat venenatis. Vestibulum tempor
              ligula vel orci consectetur, euismod augue bibendum...
            </Text>
          </PostDescription>
        </Post>
      ))}
    </Posts>
  </Container>
));
