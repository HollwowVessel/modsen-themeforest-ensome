import { memo } from 'react';

import { Image, Name, Profession, TeamLink } from './styled';
import { TeamCardProps } from './types';

export const TeamCard = memo(({ name, image, profession }: TeamCardProps) => (
  <TeamLink to={`/elements/${name.split(' ')[0]}`}>
    <Image src={image} alt="image" title="image" />
    <Name>{name}</Name>
    <Profession>{profession}</Profession>
  </TeamLink>
));
