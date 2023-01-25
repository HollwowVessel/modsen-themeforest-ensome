import emailjs from '@emailjs/browser';
import { Dispatch, SetStateAction } from 'react';

console.log(process.env.REACT_APP_EMAILJS_EMAIL);

const sendEmailParams = {
  to_name: 'Hollow',
  to_email: process.env.REACT_APP_EMAILJS_EMAIL as string,
  from_name: 'User',
  from_email: 'User@gmail.com',
  subject: 'Help me!',
  message: 'Just help me!',
};

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
console.log(process.env.REACT_APP_EMAILJS_SERVICE);

export const sendEmail = (
  setLoading: Dispatch<SetStateAction<boolean>>,
  setResponse: Dispatch<SetStateAction<string>>
) => {
  setLoading(true);
  emailjs
    .send(
      process.env.REACT_APP_EMAILJS_SERVICE as string,
      process.env.REACT_APP_EMAILJS_TEMPLATE as string,
      sendEmailParams,
      process.env.REACT_APP_EMAILJS_CLIENTID as string
    )
    .then(() => {
      setResponse('Successfully!');
    })
    .catch((err: any) => {
      console.log(err);
      setResponse('Error :(');
    })
    .finally(() => setLoading(false));
};

export const subscribeToNewsLetter = (email: string) => {
  emailjs
    .send(
      process.env.REACT_APP_EMAILJS_SERVICE as string,
      process.env.REACT_APP_EMAILJS_TEMPLATE as string,
      subscribeParams(email),
      process.env.REACT_APP_EMAILJS_CLIENTID as string
    )
    .then((response: any) => {
      console.log('Success!', response.status, response.text);
    })
    .catch((err: any) => {
      console.log('Failed...', err);
    });
};

export const sendMessage = (
  email: string,
  message: string,
  theme: string,
  name: string
) => {
  emailjs
    .send(
      process.env.REACT_APP_EMAILJS_SERVICE as string,
      process.env.REACT_APP_EMAILJS_TEMPLATE as string,
      sendMessageParams(email, message, theme, name),
      process.env.REACT_APP_EMAILJS_CLIENTID as string
    )
    .then((response: any) => {
      console.log('Success!', response.status, response.text);
    })
    .catch((err: any) => {
      console.log('Failed...', err);
    });
};
