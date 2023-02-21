import { sendMessage } from '@/api/emailjsApi';
import { FormikType } from '@/components/ContactInformation/types';

export const initialValue = { email: '', name: '', theme: '', message: '' };

export const handleSubmit = (
  { email, message, theme, name }: typeof initialValue,
  { setSubmitting, resetForm }: FormikType
) => {
  sendMessage(email, message, theme, name);
  setSubmitting(false);
  resetForm();
};
