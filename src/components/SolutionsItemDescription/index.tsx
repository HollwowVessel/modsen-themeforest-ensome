import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import Practices from '@/assets/images/solutionsPractices.png';
import Types from '@/assets/images/solutionsTypes.png';
import { solutionListItems, tabs } from '@/constants/services';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { Language } from '@/utils/languageContext';

import {
  Bold,
  Container,
  DescriptionBlock,
  Heading,
  Image,
  Info,
  Item,
  List,
  StickyContainer,
  TabContainer,
  TabTeleport,
  Text,
} from './styled';
import { SolutionsItemDescriptionProps } from './types';

export const SolutionsItemDescription = ({
  name,
}: SolutionsItemDescriptionProps) => {
  const lowerCaseName = name.toLowerCase();

  const { progress, setProgress } = useScrollProgress('data-content', 'h3');

  const handleProgress = (id: number) => () => {
    setProgress(id + 1);
  };

  const { t } = useTranslation();
  const { lang } = useContext(Language);

  return (
    <Container>
      <TabContainer>
        <StickyContainer>
          {tabs(name).map(({ href, text }, id) => (
            <TabTeleport
              href={`#${href}`}
              key={text}
              active={id === progress}
              onClick={handleProgress(id)}
            >
              {text}
            </TabTeleport>
          ))}
        </StickyContainer>
      </TabContainer>
      <Info>
        <DescriptionBlock id="what">
          <Heading data-content="1">
            {t('What is')} {lowerCaseName}?
          </Heading>
          <Text>{t('Vestibulum varius')}</Text>
        </DescriptionBlock>
        <DescriptionBlock id="types">
          <Heading data-content="2">
            {t('Types of')} {lowerCaseName}?
          </Heading>
          <Image src={Types} alt="Types" title="types" />
          <Text>{t('Vestibulum varius')}</Text>

          <List>
            {solutionListItems[lang].map((el) => (
              <Item key={el}>
                <Bold>{el.split('—')[0]}</Bold> — {el.split('—')[1]}
              </Item>
            ))}
          </List>
        </DescriptionBlock>
        <DescriptionBlock id="practices">
          <Heading data-content="3">
            {name} {t('practices')}
          </Heading>
          <Image src={Practices} title="practices" alt="Practices" />
          <Text>{t('Vestibulum varius')}</Text>
          <Text>{t('Phasellus sed')}</Text>
        </DescriptionBlock>
        <DescriptionBlock id="ensome">
          <Heading data-content="4">
            {name} {t('In ensome')}
          </Heading>
          <Text>{t('Cras aliquet')}</Text>
          <Text>{t('Class aptent')}</Text>
          <Text>{t('Vestibulum porttitor')}</Text>
        </DescriptionBlock>
      </Info>
    </Container>
  );
};
