import { useTranslation } from 'react-i18next';

import { Related } from '@/components/Related';
import { blogArticles } from '@/constants/blogArticle';
import { blogSocials } from '@/constants/blogSocials';
import { blogArticleHelper } from '@/utils/blogArticleHelper';

import {
  Author,
  Container,
  Date,
  GeneralInfo,
  Heading,
  Image,
  Quote,
  Share,
  ShareItem,
  Social,
  Statistics,
  Tag,
  Tags,
  Text,
  Views,
} from './styled';
import { BlogArticleProps } from './types';

export const BlogArticle = ({
  text,
  date,
  heading,
  image,
  views,
  tags: tag,
  cards,
}: BlogArticleProps) => {
  const { t } = useTranslation();
  const article = blogArticleHelper(t, text);

  return (
    <Container>
      <Image src={image} alt={image} title="blogImage" />
      <GeneralInfo>
        <Date>{date}</Date>
        <Author>{t('William Pond')}</Author>
      </GeneralInfo>
      <Heading>{heading}</Heading>
      {article.map(({ text, quote }) =>
        !quote ? <Text>{text}</Text> : <Quote>{text}</Quote>
      )}
      <Statistics>
        <Views>
          {views} {t('Views')}
        </Views>
        <Share>
          {t('Share')}:
          {blogSocials.map((el) => (
            <ShareItem>
              <Social src={el} alt={el} title={el} key={el} />
            </ShareItem>
          ))}
        </Share>
        <Tags>
          {t('Tags')}:<Tag active>{tag}</Tag>
        </Tags>
      </Statistics>

      <Related
        cards={
          cards?.filter(
            ({ tags }) => tags === tag
          ) as unknown as typeof blogArticles.en
        }
      />
    </Container>
  );
};
