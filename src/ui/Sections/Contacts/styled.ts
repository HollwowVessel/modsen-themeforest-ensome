import styled from 'styled-components';
import { InputProps, InteractionDescriptionProps } from './types';

export const Container = styled.section`
  padding: ${({ theme }) => theme.paddings[8]}px 0
    ${({ theme }) => theme.paddings[8]}px 0;
  background: ${({ theme }) => theme.colors.background};
`;

export const Section = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: ${({ theme }) => theme.sizes.at(-1)}px;
  margin: 0 auto;
`;

export const Info = styled.div`
  max-width: ${({ theme }) => theme.sizes.at(-3)}px;
`;

export const Heading = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeights[4]};
  font-size: ${({ theme }) => theme.fonts[5]}px;
  line-height: ${({ theme }) => theme.lineHeights[4]}px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.black};
  margin: 0 0 ${({ theme }) => theme.margins[2]}px 0;
`;

export const Description = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights[0]};
  font-size: ${({ theme }) => theme.fonts[1]}px;
  line-height: ${({ theme }) => theme.lineHeights[1]}px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.grey};
  margin: 0 0 ${({ theme }) => theme.margins[6]}px 0;
  max-width: ${({ theme }) => theme.sizes.at(-4)}px;
`;

export const ContactList = styled.ul``;

export const Contact = styled.li`
  margin: 0 0 ${({ theme }) => theme.margins[2]}px 0;
`;

export const ContactHeading = styled.h4`
  font-weight: ${({ theme }) => theme.fontWeights[0]};
  font-size: ${({ theme }) => theme.fonts[1]}px;
  line-height: ${({ theme }) => theme.lineHeights[1]}px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.grey};
  text-align: left;
`;

export const ContactDescription = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights[3]};
  font-size: ${({ theme }) => theme.fonts[1]}px;
  line-height: ${({ theme }) => theme.lineHeights[1]}px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.black};
`;

export const Interaction = styled.form`
  padding: ${({ theme }) => theme.paddings[5]}px;
  width: ${({ theme }) => theme.sizes.at(-5)}px;
  background: #ffffff;
  box-shadow: 0px 12px 30px 17px rgba(24, 92, 255, 0.04);
  border-radius: 6px;
`;

export const InteractionBlock = styled.div`
  width: ${({ theme }) => theme.sizes[5]}%;
`;

export const InteractionHeading = styled.h4`
  font-weight: ${({ theme }) => theme.fontWeights[4]};
  font-size: ${({ theme }) => theme.fonts[4]}px;
  line-height: ${({ theme }) => theme.lineHeights[3]}px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.black};
  margin: 0 0 ${({ theme }) => theme.margins[3]}px 0;
`;

export const InteractionDescription = styled.label<InteractionDescriptionProps>`
  font-weight: ${({ theme }) => theme.fontWeights[2]};
  font-size: 12px;
  line-height: ${({ theme }) => theme.lineHeights[0]}px;
  letter-spacing: -0.015em;
  color: ${({ theme, error }) =>
    error ? theme.colors.red : theme.colors.grey};
`;

export const Input = styled.input<InputProps>`
  width: ${({ theme }) => theme.sizes[5]}%;
  display: block;
  font-weight: ${({ theme }) => theme.fontWeights[2]};
  font-size: ${({ theme }) => theme.fonts[0]}px;
  line-height: ${({ theme }) => theme.lineHeights[0]}px;
  letter-spacing: -0.015em;
  color: ${({ theme, error }) =>
    error ? theme.colors.red : theme.colors.black};
  border: none;
  border-bottom: 1px solid
    ${({ theme, error }) => (error ? theme.colors.red : theme.colors.grey)};
  outline: none;
  background: none;
  margin: 0 0 ${({ theme }) => theme.margins[2]}px 0;
  &::placeholder {
    font-weight: ${({ theme }) => theme.fontWeights[2]};
    font-size: ${({ theme }) => theme.fonts[0]}px;
    line-height: ${({ theme }) => theme.lineHeights[0]}px;
    letter-spacing: -0.015em;
    color: ${({ theme }) => theme.colors.grey};
  }
  &:active,
  &:focus {
    border-bottom: 1px solid
      ${({ theme, error }) => (error ? theme.colors.red : theme.colors.primary)};
  }
`;
