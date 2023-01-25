import React, { useState } from 'react';
import { sendEmail } from '../../../api/emailjsApi';
import { FillButton } from '@/ui/Buttons/FillButton';
import { Container, Description, Heading } from './styled';
import { FillButtonLink } from '@/ui/Links/FillButtonLink';

export const HelpSection = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState('');

  const handleEmail = () => {
    sendEmail(setLoading, setResponse);
  };

  return (
    <Container>
      <Heading>Do you need help?</Heading>
      <Description>
        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
        suscipit laboriosam, nisi ut aliquid ex ea commodi.
      </Description>
      <FillButton text="Contact Us" onClick={handleEmail} disabled={loading} />
      <p>{response}</p>
    </Container>
  );
};
