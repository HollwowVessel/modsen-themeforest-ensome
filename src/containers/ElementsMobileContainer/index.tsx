import { useTranslation } from 'react-i18next';
import { DescriptionSection, SubscribeSection } from 'tired-hollow-lib-modsen';

import teamImage from '@/assets/images/teamImage.png';
import { Team } from '@/components/Team';

import { Layout } from '../Layout';
import {
  Container,
  ContainerCloser,
  Description,
  Heading,
  Image,
  Text,
} from './styled';

export const ElementsMobileContainer = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Layout>
        <DescriptionSection
          description=""
          heading=""
          link={t('elements')}
          name={t('Our team')}
        />
        <ContainerCloser>
          <Heading>{t('Get to')}</Heading>
          <Description>{t('Sed ut')}</Description>
          <Image src={teamImage} alt="team" title="team" />
          <Text>{t('Phasellus tristique')}</Text>
          <Text>{t('At vero')}</Text>
        </ContainerCloser>
        <Team />
        <SubscribeSection />
      </Layout>
    </Container>
  );
};
