import { useTranslation } from 'react-i18next';

import customer from '@/assets/images/services.png';
import solution from '@/assets/images/servicesSolution.png';
import { ListItems } from '@/constants/services';
import { useLanguage } from '@/hooks/useLanguage';

import {
  Container,
  Description,
  Heading,
  Image,
  Item,
  List,
  SolutionContainer,
  Text,
} from './styled';

export const ServicesItemDescription = () => {
  const { t } = useTranslation();
  const lang = useLanguage();

  return (
    <Container>
      <Description>
        <Heading>{t('Customer')}</Heading>
        <Text>{t('Donec tincidunt')}</Text>
        <Image src={customer} alt="Customer" title="customer" />
      </Description>
      <Description>
        <Heading>{t('Challenge')}</Heading>
        <Text>{t('Donec tincidunt long')}</Text>
      </Description>
      <Description>
        <Heading>{t('Solution')}</Heading>
        <Text>{t('Donec tincidunt')}</Text>
        <SolutionContainer>
          <Image src={solution} alt="Solution" title="solution" />
          <List>
            {ListItems[lang].map((el) => (
              <Item key={el}>{el}</Item>
            ))}
          </List>
        </SolutionContainer>
      </Description>
      <Description>
        <Heading>{t('Results')}</Heading>
        <Text>{t('Donec tincidunt long')}</Text>
      </Description>
      <Description>
        <Heading>{t('Technologies')}</Heading>
        <Text>{t('Donec tincidunt')}</Text>
      </Description>
    </Container>
  );
};
