import React from 'react';
import { Card, Image, Name, Profession } from './styled';
import { TeamCardProps } from './types';

export const TeamCard = ({ name, image, profession }: TeamCardProps) => (
  <Card>
    <Image src={image} />
    <Name>{name}</Name>
    <Profession>{profession}</Profession>
  </Card>
);
