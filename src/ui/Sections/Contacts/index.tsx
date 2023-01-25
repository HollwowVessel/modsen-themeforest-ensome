import React, { ChangeEvent, MouseEvent, useState } from 'react';
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
import { sendMessage } from '../../../api/emailjsApi';

export const ContactsSection = () => {
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
  const handleMessage = (e: ChangeEvent<HTMLInputElement>) => {
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
      <Info>
        <Heading>
          Left questions? Contacts us now for a free consultation and free
          trial!
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
        <InteractionBlock>
          <InteractionDescription>Name</InteractionDescription>
          <Input placeholder="Andrea" onChange={handleName} value={name} />
        </InteractionBlock>
        <InteractionBlock>
          <InteractionDescription>Email</InteractionDescription>
          <Input
            placeholder="andrea@gmail.com"
            onChange={handleEmail}
            value={email}
          />
        </InteractionBlock>
        <InteractionBlock>
          <InteractionDescription>Theme</InteractionDescription>
          <Input placeholder="job" onChange={handleTheme} value={theme} />
        </InteractionBlock>
        <InteractionBlock>
          <InteractionDescription>Message</InteractionDescription>
          <Input
            placeholder="Your message"
            onChange={handleMessage}
            value={message}
          />
        </InteractionBlock>
        <FillButton text="Send" onClick={handleClick} />
      </Interaction>
    </Container>
  );
};
