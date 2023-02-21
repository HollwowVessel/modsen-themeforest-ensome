import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import {
  BlogLink,
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

export const Related = memo(({ cards }: RelatedProps) => {
  const { t } = useTranslation();

  return (
    <Container>
      <Heading>{t('Related posts')}</Heading>
      <Posts>
        {cards
          ?.sort((a, b) => b.views - a.views)
          ?.slice(0, 4)
          ?.map(({ info, heading, icon, text }, id) => (
            <BlogLink to={`/blog/${heading.split(' ').slice(0, 2).join(' ')}`}>
              <Post key={id}>
                <Image src={icon} title="icon" alt="alt" />
                <PostDescription>
                  <Date>{info}</Date>
                  <Title>{heading}</Title>
                  <Text>{text}</Text>
                </PostDescription>
              </Post>
            </BlogLink>
          ))}
      </Posts>
    </Container>
  );
});
