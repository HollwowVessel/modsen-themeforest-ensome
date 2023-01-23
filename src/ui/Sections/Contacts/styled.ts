import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  gap: 125px;
  padding: 120px 0 120px 0;
  background: #f1f6fa;
`;

export const Info = styled.div`
  max-width: 540px;
`;

export const Heading = styled.h3`
  font-weight: 800;
  font-size: 38px;
  line-height: 56px;
  letter-spacing: -0.015em;
  color: #292d33;
  margin: 0 0 24px 0;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: -0.015em;
  color: #9497a1;
  margin: 0 0 80px 0;
`;

export const ContactList = styled.ul``;

export const Contact = styled.li`
  margin: 0 0 24px 0;
`;

export const ContactHeading = styled.h4`
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: -0.015em;
  color: #9497a1;
  text-align: left;
`;

export const ContactDescription = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: -0.015em;
  color: #292d33;
`;

export const Interaction = styled.form`
  padding: 50px;
  width: 445px;
  background: #ffffff;
  box-shadow: 0px 12px 30px 17px rgba(24, 92, 255, 0.04);
  border-radius: 6px;
`;

export const InteractionBlock = styled.div`
  width: 100%;
`;

export const InteractionHeading = styled.h4`
  font-weight: 800;
  font-size: 30px;
  line-height: 40px;
  letter-spacing: -0.015em;
  color: #292d33;
  margin: 0 0 30px 0;
`;

export const InteractionDescription = styled.label`
  font-weight: 600;
  font-size: 12px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: #9497a1;
`;

export const Input = styled.input`
  width: 100%;
  display: block;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: #292d33;
  border: none;
  border-bottom: 1px solid #9497a1;
  outline: none;
  background: none;
  margin: 0 0 20px 0;
  &::placeholder {
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: -0.015em;
    color: #292d33;
  }
`;
