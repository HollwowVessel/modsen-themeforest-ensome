import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ContactHeadingProps } from './types';

export const Container = styled.section`
  padding: 0 0 0 ${({ theme }) => theme.paddings[9]}px;
  margin: ${({ theme }) => theme.margins[2]}px 0
    ${({ theme }) => theme.margins[7]}px 0;
`;

export const Links = styled.div`
  display: flex;
  margin: 0 0 ${({ theme }) => theme.margins[5]}px 0;
`;

export const Home = styled(Link)`
  padding: 0 ${({ theme }) => theme.paddings[0]}px 0 0;
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.grey};
`;

export const Contacts = styled(Link)`
  border-left: 2px solid ${({ theme }) => theme.colors.grey};
  padding: 0 0 0 ${({ theme }) => theme.paddings[0]}px;
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.black};
  max-height: 24px;
`;

export const Interaction = styled.div`
  display: flex;

  align-items: baseline;
  gap: ${({ theme }) => theme.gaps[3]}px;
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
  color: ${({ theme }) => theme.colors.black};
  max-width: 540px;
`;

export const Blue = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

export const BasicInfo = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.gaps[3]}px;
  margin: 0 0 ${({ theme }) => theme.margins[2]}px 0;
  width: 100%;
`;

export const Email = styled.input`
  padding: ${({ theme }) => theme.paddings[2]}px
    ${({ theme }) => theme.paddings[3]}px;
  width: 100%;
  display: block;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.black};
  border: 1px solid ${({ theme }) => theme.colors.grey};
  &::placeholder {
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: -0.015em;
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const Message = styled.textarea`
  margin: ${({ theme }) => theme.margins[2]}px 0 0 0;
  padding: ${({ theme }) => theme.paddings[2]}px
    ${({ theme }) => theme.paddings[3]}px;
  width: 540px;
  height: 140px;
  resize: none;
  margin: ${({ theme }) => theme.margins[2]}px 0
    ${({ theme }) => theme.margins[2]}px 0;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.black};
  border-radius: 6px;
  &::placeholder {
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: -0.015em;
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const ContactInfo = styled.ul`
  display: flex;
  gap: 47px;
`;

export const Contact = styled.li``;

export const ContactHeading = styled.h4<ContactHeadingProps>`
  padding: 0 0 0 ${({ theme }) => theme.paddings[4]}px;
  position: relative;
  margin: 0 0 ${({ theme }) => theme.margins[0]}px 0;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;

  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.black};
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
  color: ${({ theme }) => theme.colors.grey};
`;
