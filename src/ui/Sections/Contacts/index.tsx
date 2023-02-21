import { Field, Formik } from 'formik';
import { useTranslation } from 'react-i18next';

import { handleSubmit, initialValue } from '@/api/formikApi';
import { contactSchema } from '@/api/yupSchema';
import { contacts } from '@/constants/contacts';
import { FillButton } from '@/ui/Buttons/FillButton';
import { OpenInput } from '@/ui/Inputs/OpenInput';

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

export const ContactsSection = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Section>
        <Info>
          <Heading>{t('Left questions')}</Heading>
          <Description>{t('Ut enim')}</Description>
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
                <InteractionDescription>{t('Name')}</InteractionDescription>
                <Field
                  as={OpenInput}
                  placeholder="Andrea"
                  name="name"
                  onChange={handleChange}
                  value={values.name}
                  error={!!touched.name && !!errors.name}
                />
              </InteractionBlock>
              <InteractionBlock>
                <InteractionDescription>{t('Email')}</InteractionDescription>
                <Field
                  as={OpenInput}
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
                <InteractionDescription>{t('Theme')}</InteractionDescription>
                <Field
                  as={OpenInput}
                  placeholder="Message theme"
                  name="theme"
                  onChange={handleChange}
                  value={values.theme}
                  error={!!touched.theme && !!errors.theme}
                />
              </InteractionBlock>
              <InteractionBlock>
                <InteractionDescription>{t('Message')}</InteractionDescription>
                <Field
                  as={OpenInput}
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
