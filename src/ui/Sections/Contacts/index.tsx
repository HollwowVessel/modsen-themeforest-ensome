import React from 'react';
import { contacts } from '@/constants/contacts';
import {
  Contact,
  ContactDescription,
  ContactHeading,
  ContactList,
  Container,
  Description,
  Heading,
  Info,
  Input,
  Interaction,
  InteractionBlock,
  InteractionDescription,
  InteractionHeading,
} from './styled';
import { FillButton } from '@/ui/Buttons/FillButton';
import { contactInfo } from '@/constants/contactInfo';

export const ContactsSection = () => (
  <Container>
    <Info>
      <Heading>
        Left questions? Contacts us now for a free consultation and free trial!
      </Heading>
      <Description>
        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
        suscipit laboriosam, nisi ut aliquid ex ea commodi.
      </Description>
      <ContactList>
        {contacts.map(({ heading, description }, id) => (
          <Contact key={id}>
            <ContactHeading>{heading}</ContactHeading>
            <ContactDescription>{description}</ContactDescription>
          </Contact>
        ))}
      </ContactList>
    </Info>
    <Interaction>
      <InteractionHeading>Contact Us</InteractionHeading>
      {contactInfo.map(({ type, placeholder }, id) => (
        <InteractionBlock key={id}>
          <InteractionDescription>{type}</InteractionDescription>
          <Input placeholder={placeholder} />
        </InteractionBlock>
      ))}

      <FillButton text="Send" />
    </Interaction>
  </Container>
);
