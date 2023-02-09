import { memo } from 'react';
import { Image, Name, Profession, TeamLink } from './styled';
import { TeamCardProps } from './types';

export const TeamCard = memo(
  ({ name, image, profession, id = 0 }: TeamCardProps) => (
    <TeamLink to={`/elements/${id}`}>
      <Image src={image} loading="lazy" />
      <Name>{name}</Name>
      <Profession>{profession}</Profession>
    </TeamLink>
  )
);
