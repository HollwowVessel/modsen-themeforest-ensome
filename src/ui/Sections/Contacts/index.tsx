import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
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
  Section,
} from './styled';
import { FillButton } from '@/ui/Buttons/FillButton';
import { contactInfo } from '@/constants/contactInfo';
import { sendMessage } from '@/api/emailjsApi';
import { contactSchema } from '@/api/yupSchema';
import { validateEmail } from '@/utils/validateEmail';
import { OpenInput } from '@/ui/Inputs/OpenInput';

export const ContactsSection = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [theme, setTheme] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [incorrectEmail, setIncorrectEmail] = useState(true);
  const [touched, setTouched] = useState({
    email: false,
    name: false,
    theme: false,
    message: false,
  });
  const [isValid, setIsValid] = useState(false);

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const email = e.target.value;
    try {
      setIncorrectEmail(validateEmail(email));
      setTouched({ ...touched, email: true });
    } catch (err) {
      setTouched({ ...touched, email: true });
    }
    setEmail(email);
  };
  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setTouched({ ...touched, name: true });
  };
  const handleTheme = (e: ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.value);
    setTouched({ ...touched, theme: true });
  };
  const handleMessage = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
    setTouched({ ...touched, message: true });
  };

  const handleClick = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let checked;
    try {
      await contactSchema.validate(
        { email, name, theme, message },
        { abortEarly: false }
      );
      checked = true;
      setIsValid(true);
    } catch (error) {
      setError('Failed :(');
    }
    if (checked) {
      sendMessage(email, message, theme, name, setError);
      console.log(1);
      setEmail('');
      setName('');
      setTheme('');
      setMessage('');
      setTouched({
        email: false,
        name: false,
        theme: false,
        message: false,
      });
      setIsValid(false);
      setError('');
    }
  };

  useEffect(() => {
    const checkValues = async () => {
      try {
        await contactSchema.validate(
          { email, name, theme, message },
          { abortEarly: false }
        );

        await setIsValid(true);
      } catch {
        setIsValid(false);
      }
    };
    checkValues();
  }, [email, name, theme, message]);

  return (
    <Container>
      <Section>
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
            {contacts.map(({ heading, description }) => (
              <Contact key={heading}>
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
            <OpenInput
              placeholder="Andrea"
              onChange={handleName}
              value={name}
            />
          </InteractionBlock>
          <InteractionBlock>
            <InteractionDescription error={incorrectEmail && touched.email}>
              Email
            </InteractionDescription>
            <OpenInput
              placeholder="andrea@gmail.com"
              onChange={handleEmail}
              value={email}
              error={incorrectEmail && touched.email}
            />
          </InteractionBlock>
          <InteractionBlock>
            <InteractionDescription>Theme</InteractionDescription>
            <OpenInput placeholder="job" onChange={handleTheme} value={theme} />
          </InteractionBlock>
          <InteractionBlock>
            <InteractionDescription>Message</InteractionDescription>
            <OpenInput
              placeholder="Your message"
              onChange={handleMessage}
              value={message}
            />
          </InteractionBlock>
          <FillButton
            text="Send"
            onClick={handleClick}
            disabled={!isValid || !Object.values(touched).every((val) => val)}
          />
          {error}
        </Interaction>
      </Section>
    </Container>
  );
};
