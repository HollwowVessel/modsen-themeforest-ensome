import styled from 'styled-components';

import { ContactHeadingProps } from '@/components/ContactsDescription/types';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    width: ${({ theme }) => theme.sizes[5]}%;
    padding: 0 ${({ theme }) => theme.paddings[2]}px;
  }
`;

export const BasicInfo = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.gaps[3]}px;
  width: ${({ theme }) => theme.sizes[5]}%;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    flex-direction: column;
    gap: 0;
  }
`;

export const Interaction = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.sizes.at(-1)}px;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    flex-direction: column;
  }
`;

export const Heading = styled.h3`
  margin: 0 0 ${({ theme }) => theme.margins[2]}px 0;
  font-weight: ${({ theme }) => theme.fontWeights.at(-1)};
  font-size: ${({ theme }) => theme.fonts.at(-3)}px;
  line-height: ${({ theme }) => theme.lineHeights.at(-2)}px;
  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.colors.black};
  max-width: ${({ theme }) => theme.sizes.at(-5)}px;

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    font-size: ${({ theme }) => theme.fonts[2]}px;
    padding: 0 ${({ theme }) => theme.paddings[0]}px;
  }
`;

export const Label = styled.label`
  font-weight: ${({ theme }) => theme.fontWeights[2]};
  font-size: ${({ theme }) => theme.fonts[0]}px;
  line-height: ${({ theme }) => theme.lineHeights[0]}px;
  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.colors.grey};
  margin: ${({ theme }) => theme.margins[2]}px 0 0 0;
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
    margin: 0;
  }
`;

export const ContactDesc = styled.div`
  max-width: ${({ theme }) => theme.sizes.at(-5)}px;
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
    padding: 0 ${({ theme }) => theme.paddings[2]}px;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.sizes[5]}%;
`;

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.paddings.at(-2)}px 0;
`;

export const ContactInfo = styled.ul`
  display: flex;
  gap: ${({ theme }) => theme.gaps[1]}px;
  flex-direction: column;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
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
