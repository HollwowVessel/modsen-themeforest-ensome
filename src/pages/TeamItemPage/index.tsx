import { useParams } from 'react-router-dom';
import { SecondDescriptionSection } from 'tired-hollow-lib-modsen';

import { TeamInformation } from '@/components/TeamInformation';
import { TeamItem } from '@/components/TeamItem';
import { teamCards } from '@/constants/teamCards';
import { Layout } from '@/containers/Layout';
import { useLanguage } from '@/hooks/useLanguage';

export const TeamItemPage = () => {
  const { index } = useParams();
  const lang = useLanguage();

  const { name, profession, social, photo } = teamCards[lang].filter(
    ({ name }) => name.indexOf(index as string) !== -1
  )[0];
  return (
    <Layout>
      <SecondDescriptionSection heading={name} />
      <TeamItem
        image={photo}
        name={name}
        position={profession}
        social={social}
      />
      <TeamInformation
        heading={`Want ${name.split(' ')[0]} to share
         his/her expertise with you?`}
      />
    </Layout>
  );
};
