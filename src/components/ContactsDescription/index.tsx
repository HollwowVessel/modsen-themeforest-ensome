import { useTranslation } from 'react-i18next';

import { FormComponent } from '@/components/FormComponent';
import { contacts } from '@/constants/contacts';
// import { CloseInput } from 'tired-hollow-lib-modsen';
import { CloseInput } from '@/ui/Inputs/CloseInput';

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
        <Home to="/">{t('Home')}</Home>
        <Contacts to="/">{t('Contacts')}</Contacts>
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
