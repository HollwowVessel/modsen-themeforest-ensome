import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ContactHeadingProps } from './types';

export const Container = styled.section`
  padding: 0 0 0 405px;
  margin: 20px 0 120px 0;
`;

export const Links = styled.div`
  display: flex;
  margin: 0 0 56px 0;
`;

export const Home = styled(Link)`
  padding: 0 10px 0 0;
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #9497a1;
`;

export const Contacts = styled(Link)`
  border-left: 2px solid #9497a1;
  padding: 0 0 0 10px;
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #292d33;
  max-height: 24px;
`;

export const Interaction = styled.div`
  display: flex;

  align-items: baseline;
  gap: 30px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Heading = styled.h1`
  font-weight: 800;
  font-size: 80px;
  line-height: 110%;
  letter-spacing: -0.015em;
  color: #292d33;
  max-width: 540px;
`;

export const Blue = styled.span`
  color: #185cff;
`;

export const BasicInfo = styled.div`
  display: flex;
  gap: 30px;
  margin: 0 0 20px 0;
  width: 100%;
`;

export const Email = styled.input`
  padding: 15px 25px;
  width: 100%;
  display: block;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: #292d33;
  border: 1px solid #9497a1;
  &::placeholder {
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: -0.015em;
    color: #292d33;
  }
`;

export const Message = styled.textarea`
  margin: 20px 0 0 0;
  padding: 15px 25px;
  width: 540px;
  height: 140px;
  resize: none;
  margin: 20px 0 20px 0;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: #292d33;
  border-radius: 6px;
  &::placeholder {
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: -0.015em;
    color: #292d33;
  }
`;

export const ContactInfo = styled.ul`
  display: flex;
  gap: 47px;
`;

export const Contact = styled.li``;

export const ContactHeading = styled.h4<ContactHeadingProps>`
  padding: 0 0 0 32px;
  position: relative;
  margin: 0 0 5px 0;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;

  letter-spacing: -0.01em;
  color: #292d33;
  &:before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background: url(${({ icon }) => icon});
    background-repeat: no-repeat;
    top: 0;
    left: 0;
  }
`;

export const ContactDescription = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  text-align: right;
  letter-spacing: -0.015em;
  color: #9497a1;
`;
