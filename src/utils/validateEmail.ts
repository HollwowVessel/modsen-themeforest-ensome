import { string } from 'yup';

export function validateEmail(email: string) {
  const emailSchema = string().email().required();
  try {
    emailSchema.validateSync(email);
    return false;
  } catch (err) {
    return true;
  }
}
