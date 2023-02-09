import { Formik } from 'formik';
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
  Interaction,
  InteractionBlock,
  InteractionDescription,
  Section,
} from './styled';
import { FillButton } from '@/ui/Buttons/FillButton';
import { sendMessage } from '@/api/emailjsApi';
import { contactSchema } from '@/api/yupSchema';
import { OpenInput } from '@/ui/Inputs/OpenInput';
import { initialValue } from '@/api/formikApi';

export const ContactsSection = () => {
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
            <Interaction onSubmit={handleSubmit}>
              <InteractionBlock>
                <InteractionDescription>Name</InteractionDescription>
                <OpenInput
                  placeholder="Andrea"
                  name="name"
                  onChange={handleChange}
                  value={values.name}
                  error={!!touched.name && !!errors.name}
                />
              </InteractionBlock>
              <InteractionBlock>
                <InteractionDescription>Email</InteractionDescription>
                <OpenInput
                  placeholder="andrea@gmail.com"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                  error={
                    !!touched.email ||
                    errors.email === 'email must be a valid email'
                  }
                />
              </InteractionBlock>
              <InteractionBlock>
                <InteractionDescription>Theme</InteractionDescription>
                <OpenInput
                  placeholder="Message theme"
                  name="theme"
                  onChange={handleChange}
                  value={values.theme}
                  error={!!touched.theme && !!errors.theme}
                />
              </InteractionBlock>
              <InteractionBlock>
                <InteractionDescription>Message</InteractionDescription>
                <OpenInput
                  placeholder="Your message"
                  name="message"
                  onChange={handleChange}
                  value={values.message}
                  error={!!touched.message && !!errors.message}
                />
              </InteractionBlock>
              <FillButton
                text="Submit"
                disabled={
                  (isSubmitting ||
                    errors.email ||
                    errors.message ||
                    errors.name ||
                    errors.theme) as boolean
                }
              />
            </Interaction>
          )}
        </Formik>
      </Section>
    </Container>
  );
};
