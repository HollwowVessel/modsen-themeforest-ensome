import React from 'react';
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

export const TeamItem = ({
  name,
  position,
  social,
  image,
}: {
  name: string;
  position: string;
  social: string[];
  image: string;
}) => {
  const socialItems = [];
  for (let i = 0; i < social.length; i++) {
    socialItems.push({ link: social[i], icon: blogSocials[i] });
  }
  return (
    <Container>
      <Image src={image} alt="person" title="person" />
      <Info>
        <Heading>Name</Heading>
        <Text>{name}</Text>
        <Heading>Position</Heading>
        <Text>{position}</Text>
        <Heading>Description</Heading>
        <Text>
          Phasellus tristique eu nisl eu consectetur. Morbi urna massa,
          imperdiet in mauris et, euismod vestibulum lacus. Integer enim elit,
          tincidunt aliquam ligula id, lacinia auctor orci. Sed quis lobortis
          eros. Fusce id commodo libero. At vero eos et accusamus et iusto odio
          dignissimos ducimus.
        </Text>
        <Heading>Social networks</Heading>
        <Socials>
          {socialItems.map(({ link, icon }) => (
            <SocialLink key={link} href={link}>
              <Social>
                <Icon src={icon} loading="lazy" />
              </Social>
            </SocialLink>
          ))}
        </Socials>
      </Info>
    </Container>
  );
};
