import { useTranslation } from 'react-i18next';

import { blogSocials } from '@/constants/blogSocials';

import {
  Container,
  Heading,
  Icon,
  Image,
  Info,
  Social,
  SocialLink,
  Socials,
  Text,
} from './styled';
import { TeamItemProps } from './types';

export const TeamItem = ({ name, position, social, image }: TeamItemProps) => {
  const socialItems = [];

  for (let i = 0; i < social.length - 1; i++) {
    socialItems.push({ link: social[i], icon: blogSocials[i] });
  }
  const { t } = useTranslation();

  return (
    <Container>
      <Image src={image} alt="person" title="person" />
      <Info>
        <Heading>{t('Name')}</Heading>
        <Text>{name}</Text>
        <Heading>{t('Position')}</Heading>
        <Text>{position}</Text>
        <Heading>{t('Description')}</Heading>
        <Text>{t('Phasellus tristique eu')}</Text>
        <Heading>{t('Social networks')}</Heading>
        <Socials>
          {socialItems.map(({ link, icon }) => (
            <SocialLink key={link} href={link}>
              <Social>
                <Icon src={icon} alt="icon" title="icon" />
              </Social>
            </SocialLink>
          ))}
        </Socials>
      </Info>
    </Container>
  );
};
