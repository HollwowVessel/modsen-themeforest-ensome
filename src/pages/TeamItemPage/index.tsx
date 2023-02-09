import { useParams } from 'react-router-dom';
import { TeamItem } from '@/components/TeamItem';
import { Navigation } from '@/ui/Navigation';
import { SecondDescriptionSection } from '@/ui/Sections/SecondDescriptionSection';
import { teamCards } from '@/constants/teamCards';
import { FooterSection } from '@/ui/FooterSection';
import { TeamInformation } from '@/components/TeamInformation';

export const TeamItemPage = () => {
  const { index } = useParams();

  const { name, profession, social, photo } = teamCards[+(index as string)];
  return (
    <>
      <Navigation />
      <SecondDescriptionSection
        heading={name}
        link={`/elements/${index}`}
        name={name}
        secondlink
      />
      <TeamItem
        image={photo}
        name={name}
        position={profession}
        social={social}
      />
      <TeamInformation
        heading={`Want ${name.split(' ')[0]} to share
         his expertise with you?`}
      />
      <FooterSection />
    </>
  );
};
