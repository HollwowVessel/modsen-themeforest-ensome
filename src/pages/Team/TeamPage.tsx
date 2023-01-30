import { TeamDescription } from '@/components/TeamDescription';
import { FooterSection } from '@/ui/FooterSection';
import { Navigation } from '@/ui/Navigation';
import { SubscribeSection } from '@/ui/Sections/SubscribeSection';
import { Team } from '@/components/Team';
import { ElementsMobileContainer } from '@/containers/ElementsMobileContainer';
import { ElementsDesktopContainer } from '@/containers/ElementsDesktopContainer';

export const TeamPage = () => (
  <>
    <ElementsMobileContainer />
    <ElementsDesktopContainer />
  </>
);
