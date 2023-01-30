import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
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
import { sendMessage } from '@/api/emailjsApi';
import { CloseInput } from '@/ui/Inputs/CloseInput';
import { validateEmail } from '@/utils/validateEmail';
import { contactSchema } from '@/api/yupSchema';

export const ContactsDescription = () => {
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
  const handleMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
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
      <Links>
        <Home to="/">Home</Home>
        <Contacts to="/">Contacts</Contacts>
      </Links>
      <Interaction>
        <Heading>
          How can we <Blue> help you?</Blue>
        </Heading>
        <Form>
          <BasicInfo>
            <CloseInput
              error={incorrectEmail && touched.email}
              placeholder="Your email"
              onChange={handleEmail}
              value={email}
            />
            <CloseInput
              placeholder="Your name"
              onChange={handleName}
              value={name}
            />
          </BasicInfo>
          <CloseInput
            placeholder="Your theme"
            onChange={handleTheme}
            value={theme}
          />
          <Message
            placeholder="Your message"
            onChange={handleMessage}
            value={message}
          />
          <FillButton
            text="Send"
            onClick={handleClick}
            disabled={!isValid || !Object.values(touched).every((val) => val)}
          />
          {error}
        </Form>
      </Interaction>
      <ContactInfo>
        {contacts.map(({ icon, heading, description }, id) => (
          <Contact key={icon}>
            <ContactHeading icon={icon}>{heading}</ContactHeading>
            <ContactDescription>{description}</ContactDescription>
          </Contact>
        ))}
      </ContactInfo>
    </Container>
  );
};
