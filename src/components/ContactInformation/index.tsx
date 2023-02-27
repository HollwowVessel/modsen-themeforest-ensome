import { OpenInput } from 'tired-hollow-lib-modsen';

import { contactsBlue } from '@/constants/contacts';

import { FormComponent } from '../Forms/FormComponent';
import {
  Contact,
  ContactDesc,
  ContactHeading,
  ContactInfo,
  Heading,
  Interaction,
  Text,
  Wrapper,
} from './styled';
import { ContactInformationProps } from './types';

export const ContactInformation = ({
  heading,
  description,
}: ContactInformationProps) => (
  <Wrapper>
    <Interaction>
      <ContactDesc>
        <Heading>{heading}</Heading>
        <Text>{description}</Text>
        <ContactInfo>
          {contactsBlue.map(({ icon, description }) => (
            <Contact key={icon}>
              <ContactHeading icon={icon}>{description}</ContactHeading>
            </Contact>
          ))}
        </ContactInfo>
      </ContactDesc>
      <FormComponent
        divideFirstRow
        inputComponent={OpenInput}
        messageForm={OpenInput}
        showLabels
      />
    </Interaction>
  </Wrapper>
);
