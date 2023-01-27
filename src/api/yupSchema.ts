import { object, string } from 'yup';

export const contactSchema = object().shape({
  email: string().email().required(),
  name: string().required(),
  theme: string().required(),
  message: string().required(),
});
