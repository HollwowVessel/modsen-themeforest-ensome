import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { blogArticles } from '@/constants/blogArticle';
import { pathNames } from '@/constants/routes';
import { sortBlogArticles } from '@/utils/sortBlogArticles';

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

  const items = sortBlogArticles(cards as typeof blogArticles.en);

  return (
    <Container>
      <Heading>{t('Related posts')}</Heading>
      <Posts>
        {items?.map(({ info, heading, icon, text }, id) => (
          <BlogLink
            to={`${pathNames.blog}/${heading.split(' ').slice(0, 2).join(' ')}`}
          >
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
