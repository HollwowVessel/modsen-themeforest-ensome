import { ChangeEvent, useState } from 'react';

import { Categories, Category, Container, Heading } from './styled';
import { InputWithButton } from '@/ui/Inputs/InputWithButton';
import { ServicesItems } from '@/constants/services';

export const ServicesSidebar = () => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState(-1);

  const searchHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleCategory = (id: number) => () => {
    setActiveCategory(id);
  };

  return (
    <Container>
      <InputWithButton
        placeholder="Search"
        onChange={searchHandler}
        value={search}
        buttonText="Search"
      />
      <Heading>Services</Heading>
      <Categories>
        {ServicesItems.map((el, id) => (
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
