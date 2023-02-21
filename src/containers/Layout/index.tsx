import React from 'react';

import { FooterSection } from '@/components/FooterSection';
import { Navigation } from '@/ui/Navigation';

import { LayoutProps } from './types';

export const Layout = ({ children }: LayoutProps) => (
  <>
    <Navigation />
    {children}
    <FooterSection />
  </>
);
