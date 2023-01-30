import { memo } from 'react';
import {
  Card,
  Icon,
  Image,
  Name,
  Profession,
  Social,
  SocialLink,
  Socials,
} from './styled';
import { blogSocials } from '@/constants/blogSocials';
import { TeamCardProps } from './types';

export const TeamCard = memo(
  ({ name, image, profession, social }: TeamCardProps) => {
    const socialItems = [];
    for (let i = 0; i < social.length; i++) {
      socialItems.push({ link: social[i], icon: blogSocials[i] });
    }
    return (
      <Card>
        <Image src={image} loading="lazy" />
        <Name>{name}</Name>
        <Profession>{profession}</Profession>
        <Socials>
          {socialItems.map(({ link, icon }) => (
            <SocialLink key={link} href={link}>
              <Social>
                <Icon src={icon} loading="lazy" />
              </Social>
            </SocialLink>
          ))}
        </Socials>
      </Card>
    );
  }
);
