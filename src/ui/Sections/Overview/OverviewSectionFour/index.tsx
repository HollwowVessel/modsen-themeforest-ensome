import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Container, Item, List, Name, Number } from './styled';

export const OverviewSectionFour = memo(() => {
  const { t } = useTranslation();

  return (
    <Container>
      <List>
        <Item>
          <Number>1830+</Number>
          <Name>{t('Project executed')}</Name>
        </Item>
        <Item>
          <Number>834+</Number>
          <Name>{t('Satisfied customers')}</Name>
        </Item>
        <Item>
          <Number>390</Number>
          <Name>{t('Data management')}</Name>
        </Item>
      </List>
    </Container>
  );
});
