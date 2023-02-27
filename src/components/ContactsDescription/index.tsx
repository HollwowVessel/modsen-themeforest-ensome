import { useTranslation } from 'react-i18next';
import { CloseInput } from 'tired-hollow-lib-modsen';

import { FormComponent } from '@/components/Forms/FormComponent';
import { contacts } from '@/constants/contacts';
import { pathNames } from '@/constants/routes';

import {
  Blue,
  Contact,
  ContactDescription,
  ContactHeading,
  ContactInfo,
  Contacts,
  Container,
  Heading,
  Home,
  InfoLink,
  Interaction,
  Links,
  Message,
} from './styled';

export const ContactsDescription = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Links>
        <Home to={pathNames.home}>{t('Home')}</Home>
        <Contacts to={pathNames.home}>{t('Contacts')}</Contacts>
      </Links>
      <Interaction>
        <Heading>
          {t('How can')} <Blue> {t('help you')}</Blue>
        </Heading>
        <FormComponent
          divideFirstRow
          inputComponent={CloseInput}
          messageForm={Message}
          showLabels={false}
        />
      </Interaction>
      <ContactInfo>
        {contacts.map(({ icon, heading, description, link }) => (
          <InfoLink href={link}>
            <Contact key={icon}>
              <ContactHeading icon={icon}>{heading}</ContactHeading>
              <ContactDescription>{description}</ContactDescription>
            </Contact>
          </InfoLink>
        ))}
      </ContactInfo>
    </Container>
  );
};
