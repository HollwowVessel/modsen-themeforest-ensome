import emailjs from '@emailjs/browser';
import { Dispatch, SetStateAction } from 'react';

const subscribeParams = (email: string) => ({
  to_name: email,
  to_email: email,
  from_name: 'Hollow',
  from_email: process.env.REACT_APP_EMAILJS_EMAIL as string,
  subject: 'You have subscribed to Modsen-themeforest-ensome',
  message:
    "You have subscribed to Modsen-themeforest-ensome and for now I'm begging you, don't use it twice, because I have limited quota and it steadily decreasing. So please, stop.",
});

const sendMessageParams = (
  email: string,
  message: string,
  theme: string,
  name: string
) => ({
  to_name: 'Hollow',
  to_email: process.env.REACT_APP_EMAILJS_EMAIL as string,
  from_name: name,
  from_email: email,
  subject: theme,
  message,
});

export const subscribeToNewsLetter = (
  email: string,
  setError: Dispatch<SetStateAction<string>>
) => {
  emailjs
    .send(
      process.env.REACT_APP_EMAILJS_SERVICE as string,
      process.env.REACT_APP_EMAILJS_TEMPLATE as string,
      subscribeParams(email),
      process.env.REACT_APP_EMAILJS_CLIENTID as string
    )
    .catch(() => {
      setError('Failed :(((');
    });
};

export const sendMessage = (
  email: string,
  message: string,
  theme: string,
  name: string
) => {
  emailjs.send(
    process.env.REACT_APP_EMAILJS_SERVICE as string,
    process.env.REACT_APP_EMAILJS_TEMPLATE as string,
    sendMessageParams(email, message, theme, name),
    process.env.REACT_APP_EMAILJS_CLIENTID as string
  );
};
