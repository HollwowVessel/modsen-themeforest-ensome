import { Formik } from 'formik';
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

import { contactSchema } from '@/api/yupSchema';
import { initialValue } from '@/api/formikApi';

export const ContactsDescription = () => {
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
    <Container>
      <Links>
        <Home to="/">Home</Home>
        <Contacts to="/">Contacts</Contacts>
      </Links>
      <Interaction>
        <Heading>
          How can we <Blue> help you?</Blue>
        </Heading>
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
                <CloseInput
                  error={
                    !!touched.email ||
                    errors.email === 'email must be a valid email'
                  }
                  placeholder="Your email"
                  onChange={handleChange}
                  value={values.email}
                  name="email"
                />
                <CloseInput
                  placeholder="Your name"
                  onChange={handleChange}
                  value={values.name}
                  name="name"
                />
              </BasicInfo>
              <CloseInput
                placeholder="Your theme"
                onChange={handleChange}
                value={values.theme}
                name="theme"
              />
              <Message
                placeholder="Your message"
                onChange={handleChange}
                value={values.message}
                name="message"
              />
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
      <ContactInfo>
        {contacts.map(({ icon, heading, description }) => (
          <Contact key={icon}>
            <ContactHeading icon={icon}>{heading}</ContactHeading>
            <ContactDescription>{description}</ContactDescription>
          </Contact>
        ))}
      </ContactInfo>
    </Container>
  );
};
