import { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ServicesItems } from '@/constants/services';
import { useLanguage } from '@/hooks/useLanguage';
import { InputWithButton } from '@/ui/Inputs/InputWithButton';

import { Categories, Category, Container, Heading } from './styled';

export const ServicesSidebar = () => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState(-1);
  const { t } = useTranslation();
  const lang = useLanguage();

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleCategory = (id: number) => () => {
    if (activeCategory === id) {
      setActiveCategory(-1);
    } else {
      setActiveCategory(id);
    }
  };

  return (
    <Container>
      <InputWithButton
        placeholder={t('Search') as string}
        onChange={searchHandler}
        value={search}
        buttonText={t('Search') as string}
      />
      <Heading>{t('Services')}</Heading>
      <Categories>
        {ServicesItems[lang].map((el, id) => (
          <Category
            key={el}
            onClick={handleCategory(id)}
            active={activeCategory === id}
          >
            {el}
          </Category>
        ))}
      </Categories>
    </Container>
  );
};
