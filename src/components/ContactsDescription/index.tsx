import React, {
  ChangeEvent,
  EventHandler,
  memo,
  MouseEvent,
  useState,
} from 'react';
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
import { sendMessage } from '../../api/emailjsApi';

export const ContactsDescription = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [theme, setTheme] = useState('');
  const [message, setMessage] = useState('');

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleTheme = (e: ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.value);
  };
  const handleMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    sendMessage(email, message, theme, name);
    setEmail('');
    setName('');
    setTheme('');
    setMessage('');
  };

  return (
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
            <Email
              placeholder="Your email"
              onChange={handleEmail}
              value={email}
            />
            <Email placeholder="Your name" onChange={handleName} value={name} />
          </BasicInfo>
          <Email
            placeholder="Your theme"
            onChange={handleTheme}
            value={theme}
          />
          <Message
            placeholder="Your message"
            onChange={handleMessage}
            value={message}
          />
          <FillButton text="Send" onClick={handleClick} />
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
};
