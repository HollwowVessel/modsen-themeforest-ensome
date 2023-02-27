import { Field, Formik } from 'formik';
import { FillButton } from 'tired-hollow-lib-modsen';

import { handleSubmit, initialValue } from '@/api/formikApi';
import { contactSchema } from '@/api/yupSchema';

import { BasicInfo, Form, InputContainer, Label } from './styled';
import { FormComponentProps } from './types';

export const FormComponent = ({
  inputComponent,
  messageForm,
  divideFirstRow,
  showLabels,
}: FormComponentProps) => (
  <Formik
    initialValues={initialValue}
    validationSchema={contactSchema}
    onSubmit={handleSubmit}
  >
    {({
      values,
      errors,
      handleChange,
      handleSubmit,
      isSubmitting,
      handleBlur,
      touched,
    }) => (
      <Form onSubmit={handleSubmit}>
        <BasicInfo divide={divideFirstRow}>
          <InputContainer>
            {showLabels && <Label>Email</Label>}
            <Field
              as={inputComponent}
              error={
                touched.email &&
                (errors.email === 'email must be a valid email' ||
                  errors.email === 'email is a required field')
              }
              placeholder="Your email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              name="email"
            />
          </InputContainer>
          <InputContainer>
            {showLabels && <Label>Name</Label>}
            <Field
              as={inputComponent}
              error={touched.name && errors.name}
              placeholder="Your name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              name="name"
            />
          </InputContainer>
        </BasicInfo>
        <InputContainer>
          {showLabels && <Label>Theme</Label>}
          <Field
            as={inputComponent}
            placeholder="Your theme"
            error={touched.theme && errors.theme}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.theme}
            name="theme"
          />
        </InputContainer>
        <InputContainer>
          {showLabels && <Label>Message</Label>}
          <Field
            as={messageForm}
            placeholder="Your message"
            error={touched.message && errors.message}
            onChange={handleChange}
            onBlur={handleBlur}
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
);
