import { memo } from 'react';

import { pathNames } from '@/constants/routes';

import { Image, Name, Profession, TeamLink } from './styled';
import { TeamCardProps } from './types';

export const TeamCard = memo(({ name, image, profession }: TeamCardProps) => (
  <TeamLink to={`${pathNames.elements}/${name.split(' ')[0]}`}>
    <Image src={image} alt="image" title="image" />
    <Name>{name}</Name>
    <Profession>{profession}</Profession>
  </TeamLink>
));
