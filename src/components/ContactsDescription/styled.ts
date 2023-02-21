import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ContactHeadingProps } from './types';

export const Container = styled.section`
  margin: ${({ theme }) => theme.margins[2]}px auto
    ${({ theme }) => theme.margins[7]}px auto;
  max-width: ${({ theme }) => theme.sizes.at(-1)}px;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    padding: 0 ${({ theme }) => theme.paddings[2]}px;
  }
`;

export const Links = styled.div`
  display: flex;
  margin: 0 0 ${({ theme }) => theme.margins[5]}px 0;
`;

export const Home = styled(Link)`
  padding: 0 ${({ theme }) => theme.paddings[0]}px 0 0;
  text-decoration: none;
  font-weight: ${({ theme }) => theme.fontWeights[1]};
  font-size: ${({ theme }) => theme.fonts[0]}px;
  line-height: ${({ theme }) => theme.lineHeights[0]}px;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.grey};
`;

export const Contacts = styled(Link)`
  border-left: 2px solid ${({ theme }) => theme.colors.grey};
  padding: 0 0 0 ${({ theme }) => theme.paddings[0]}px;
  text-decoration: none;
  font-weight: ${({ theme }) => theme.fontWeights[1]};
  font-size: ${({ theme }) => theme.fonts[0]}px;
  line-height: ${({ theme }) => theme.lineHeights[0]}px;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.black};
  max-height: ${({ theme }) => theme.sizes[0]}px;
`;

export const Interaction = styled.div`
  display: flex;

  align-items: baseline;
  gap: ${({ theme }) => theme.gaps[3]}px;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    flex-direction: column;
    align-items: center;
    margin: 0 0 ${({ theme }) => theme.margins[5]}px 0;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    width: ${({ theme }) => theme.sizes[5]}%;
  }
`;

export const Heading = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeights[4]};
  font-size: ${({ theme }) => theme.fonts.at(-1)}px;
  line-height: ${({ theme }) => theme.lineHeights[5]}%;
  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.colors.black};
  max-width: ${({ theme }) => theme.sizes.at(-4)}px;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    flex-direction: column;
    align-items: flex-start;
    max-width: ${({ theme }) => theme.sizes.at(-4)}px;
    font-size: ${({ theme }) => theme.fonts.at(-4)}px;
    margin: 0 auto;
  }
`;

export const Blue = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

export const BasicInfo = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.gaps[3]}px;
  margin: 0 0 ${({ theme }) => theme.margins[2]}px 0;
  width: ${({ theme }) => theme.sizes[5]}%;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    flex-direction: column;
  }
`;

export const Email = styled.input`
  padding: ${({ theme }) => theme.paddings[2]}px
    ${({ theme }) => theme.paddings[3]}px;
  width: ${({ theme }) => theme.sizes[5]}%;
  display: block;
  font-weight: ${({ theme }) => theme.fontWeights[2]};
  font-size: ${({ theme }) => theme.fonts[0]}px;
  line-height: ${({ theme }) => theme.lineHeights[0]}px;
  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.colors.black};
  border: 1px solid ${({ theme }) => theme.colors.grey};
  &::placeholder {
    font-weight: ${({ theme }) => theme.fontWeights[2]};
    font-size: ${({ theme }) => theme.fonts[0]}px;
    line-height: ${({ theme }) => theme.lineHeights[0]}px;
    letter-spacing: 0.03em;
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const Message = styled.textarea`
  margin: 0;
  padding: ${({ theme }) => theme.paddings[2]}px
    ${({ theme }) => theme.paddings[3]}px;
  width: ${({ theme }) => theme.sizes[5]}%;
  height: ${({ theme }) => theme.sizes[7]}px;
  resize: none;
  margin: ${({ theme }) => theme.margins[2]}px 0
    ${({ theme }) => theme.margins[2]}px 0;
  font-weight: ${({ theme }) => theme.fontWeights[2]};
  font-size: ${({ theme }) => theme.fonts[0]}px;
  line-height: ${({ theme }) => theme.lineHeights[0]}px;
  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.colors.black};
  border-radius: 6px;
  outline: none;
  &:active,
  &:focus,
  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
  &::placeholder {
    font-weight: ${({ theme }) => theme.fontWeights[2]};
    font-size: ${({ theme }) => theme.fonts[0]}px;
    line-height: ${({ theme }) => theme.lineHeights[0]}px;
    letter-spacing: 0.03em;
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const ContactInfo = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.gaps[4]}px;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Contact = styled.li``;

export const ContactHeading = styled.h4<ContactHeadingProps>`
  padding: 0 0 0 ${({ theme }) => theme.paddings[4]}px;
  position: relative;
  margin: 0 0 ${({ theme }) => theme.margins[0]}px 0;
  font-weight: ${({ theme }) => theme.fontWeights[2]};
  font-size: ${({ theme }) => theme.fonts[0]}px;
  line-height: ${({ theme }) => theme.lineHeights[0]}px;

  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.black};
  &:before {
    content: '';
    position: absolute;
    width: ${({ theme }) => theme.sizes[0]}px;
    height: ${({ theme }) => theme.sizes[0]}px;
    background: url(${({ icon }) => icon});
    background-repeat: no-repeat;
    top: 0;
    left: 0;
  }
`;

export const ContactDescription = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights[0]};
  font-size: ${({ theme }) => theme.fonts[1]}px;
  line-height: ${({ theme }) => theme.lineHeights[1]}px;
  text-align: right;
  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.colors.grey};
`;

export const InfoLink = styled.a`
  text-decoration: none;
`;
