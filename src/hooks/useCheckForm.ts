import { Dispatch, SetStateAction, useEffect } from 'react';
import { contactSchema } from '@/api/yupSchema';

export const useCheckForm = (
  email: string,
  name: string,
  theme: string,
  message: string,
  setIsValid: Dispatch<SetStateAction<boolean>>
) => {
  useEffect(() => {
    const checkValues = async () => {
      try {
        await contactSchema.validate(
          { email, name, theme, message },
          { abortEarly: false }
        );

        setIsValid(true);
      } catch {
        setIsValid(false);
      }
    };
    checkValues();
  }, [email, name, theme, message]);
};
