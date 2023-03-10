import { useState } from 'react';

import { FAQItems } from '@/constants/FAQItem';
import { useLanguage } from '@/hooks/useLanguage';

import { Container, Description, Heading, Question, Questions } from './styled';

export const FAQ = () => {
  const [active, setActive] = useState(-1);

  const lang = useLanguage();

  const handleActive = (id: number) => () => {
    if (id !== active) {
      setActive(id);
    } else {
      setActive(-1);
    }
  };
  return (
    <Container>
      <Questions>
        {FAQItems[lang].map(({ heading, description }, id) => (
          <Question key={heading} onClick={handleActive(id)}>
            <Heading active={active === id}>{heading}</Heading>
            <Description active={active === id}>{description}</Description>
          </Question>
        ))}
      </Questions>
    </Container>
  );
};
