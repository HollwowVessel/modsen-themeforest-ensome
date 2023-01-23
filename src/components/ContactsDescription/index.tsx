import React from 'react';
import { FillButton } from '@/ui/Buttons/FillButton';
import {
  BasicInfo,
  Blue,
  Contact,
  ContactDescription,
  ContactHeading,
  ContactInfo,
  Contacts,
  Container,
  Email,
  Form,
  Heading,
  Home,
  Interaction,
  Links,
  Message,
} from './styled';
import { contacts } from '@/constants/contacts';

export const ContactsDescription = () => (
  <Container>
    <Links>
      <Home to="/">Home</Home>
      <Contacts to="/">Contacts</Contacts>
    </Links>
    <Interaction>
      <Heading>
        How can we <Blue> help you</Blue>?
      </Heading>
      <Form>
        <BasicInfo>
          <Email placeholder="Your email" />
          <Email placeholder="Your name" />
        </BasicInfo>
        <Email placeholder="Your theme" />
        <Message placeholder="Your message" />
        <FillButton text="Send" />
      </Form>
    </Interaction>
    <ContactInfo>
      {contacts.map(({ icon, heading, description }, id) => (
        <Contact key={id}>
          <ContactHeading icon={icon}>{heading}</ContactHeading>
          <ContactDescription>{description}</ContactDescription>
        </Contact>
      ))}
    </ContactInfo>
  </Container>
);
