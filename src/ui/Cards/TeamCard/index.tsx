import React, { memo } from 'react';
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
        <Image src={image} />
        <Name>{name}</Name>
        <Profession>{profession}</Profession>
        <Socials>
          {socialItems.map(({ link, icon }, id) => (
            <SocialLink key={id} href={link}>
              <Social>
                <Icon src={icon} />
              </Social>
            </SocialLink>
          ))}
        </Socials>
      </Card>
    );
  }
);
