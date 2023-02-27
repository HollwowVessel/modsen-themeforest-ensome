import React from 'react';

import { pathNames } from '@/constants/routes';

import { Current, Home, Links } from './styled';
import { BreadCrumbProps } from './types';

export const BreadCrumbs = ({ textColor = 'black' }: BreadCrumbProps) => {
  const link = decodeURI(window.location.href).split('/').slice(3);

  return (
    <Links>
      <Home to={pathNames.home}>Home</Home>
      {link.map((el) => (
        <Current
          color={textColor}
          to={link.at(-1) !== el ? `/${el}` : `/${link?.at(-2)}`}
        >
          {(el as string)[0].toUpperCase() + (el as string).slice(1)}
        </Current>
      ))}
    </Links>
  );
};
