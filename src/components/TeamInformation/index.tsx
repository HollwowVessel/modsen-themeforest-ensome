import { Formik } from 'formik';
import { sendMessage } from '@/api/emailjsApi';
import { initialValue } from '@/api/formikApi';
import { contactSchema } from '@/api/yupSchema';
import { OpenInput } from '@/ui/Inputs/OpenInput';
import {
  BasicInfo,
  Form,
  Heading,
  InputContainer,
  Interaction,
  Label,
  Wrapper,
} from './styled';
import { FillButton } from '@/ui/Buttons/FillButton';

export const TeamInformation = ({ heading }: { heading: string }) => {
  const handleSubmit = (
    { email, message, theme, name }: typeof initialValue,
    {
      setSubmitting,
      resetForm,
    }: { setSubmitting: (arg: boolean) => void; resetForm: () => void }
  ) => {
    sendMessage(email, message, theme, name);
    setSubmitting(false);
    resetForm();
  };

  return (
    <Wrapper>
      <Interaction>
        <Heading>{heading}</Heading>
        <Formik
          initialValues={initialValue}
          validationSchema={contactSchema}
          onSubmit={handleSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form onSubmit={handleSubmit}>
              <BasicInfo>
                <InputContainer>
                  <Label>Email</Label>
                  <OpenInput
                    error={
                      !!touched.email ||
                      errors.email === 'email must be a valid email'
                    }
                    placeholder="Your email"
                    onChange={handleChange}
                    value={values.email}
                    name="email"
                  />
                </InputContainer>
                <InputContainer>
                  <Label>Name</Label>
                  <OpenInput
                    placeholder="Your name"
                    onChange={handleChange}
                    value={values.name}
                    name="name"
                  />
                </InputContainer>
              </BasicInfo>
              <InputContainer>
                <Label>Theme</Label>
                <OpenInput
                  placeholder="Your theme"
                  onChange={handleChange}
                  value={values.theme}
                  name="theme"
                />
              </InputContainer>
              <InputContainer>
                <Label>Message</Label>
                <OpenInput
                  placeholder="Your message"
                  onChange={handleChange}
                  value={values.message}
                  name="message"
                />
              </InputContainer>
              <FillButton
                text="Send"
                disabled={
                  (isSubmitting ||
                    errors.email ||
                    errors.message ||
                    errors.name ||
                    errors.theme) as boolean
                }
              />
            </Form>
          )}
        </Formik>
      </Interaction>
    </Wrapper>
  );
};
