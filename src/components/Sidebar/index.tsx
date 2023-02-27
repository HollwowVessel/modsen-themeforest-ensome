import { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowLink } from 'tired-hollow-lib-modsen';

import { blogArticles } from '@/constants/blogArticle';
import { categories } from '@/constants/blogSidebarCategories';
import { tags as allTags } from '@/constants/blogSidebarTags';
import { pathNames } from '@/constants/routes';
import { useLanguage } from '@/hooks/useLanguage';
import { InputWithButton } from '@/ui/Inputs/InputWithButton';
import { filterCards, filterOnClear } from '@/utils/filterCards';
import { makeFourSortedArticles } from '@/utils/makeFourSortedArticles';

import {
  Categories,
  Category,
  Container,
  Date,
  Heading,
  Image,
  Post,
  PostDescription,
  Posts,
  Tag,
  Tags,
  Title,
} from './styled';

export const Sidebar = () => {
  const lang = useLanguage();
  const [search, setSearch] = useState('');
  const [cards, setCards] = useState(() =>
    makeFourSortedArticles(blogArticles[lang])
  );
  const [activeTags, setTags] = useState<number[]>([]);
  const [activeCategory, setActiveCategory] = useState(-1);

  const { t } = useTranslation();

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    if (!e.target.value) {
      setCards(filterOnClear(activeTags, lang));
    }
  };

  const handleCategory = (id: number) => () => {
    if (id !== activeCategory) {
      setActiveCategory(id);
    } else {
      setActiveCategory(-1);
    }
  };

  const handleTag = (id: number) => () => {
    setTags((prev) =>
      prev.indexOf(id) === -1 ? [...prev, id] : prev.filter((el) => el !== id)
    );
  };

  const handleSearch = () => {
    setCards(filterCards(search, -1, activeTags, lang));
  };

  const articles = makeFourSortedArticles(cards);

  return (
    <Container>
      <InputWithButton
        placeholder={t('Search') as string}
        onChange={searchHandler}
        value={search}
        buttonText={t('Search') as string}
        onClick={handleSearch}
      />

      <Heading>{t('Popular posts')}</Heading>
      <Posts>
        {articles.map(({ info, heading, icon }, id) => (
          <Post key={id}>
            <Image src={icon} alt="icon" title="icon" />
            <PostDescription>
              <Date>{info}</Date>
              <Title>{heading}</Title>
              <ArrowLink
                text={t('Read more')}
                to={`${pathNames.blog}/${heading
                  .split(' ')
                  .slice(0, 2)
                  .join(' ')}`}
              />
            </PostDescription>
          </Post>
        ))}
      </Posts>
      <Heading>{t('Categories')}</Heading>
      <Categories>
        {categories.map((el, id) => (
          <Category
            key={el}
            onClick={handleCategory(id)}
            active={activeCategory === id}
          >
            {el}
          </Category>
        ))}
      </Categories>
      <Heading>{t('Tags')}</Heading>
      <Tags>
        {allTags.map((el, id) => (
          <Tag
            key={el}
            onClick={handleTag(id)}
            active={activeTags.indexOf(id) !== -1}
          >
            {el}
          </Tag>
        ))}
      </Tags>
    </Container>
  );
};
