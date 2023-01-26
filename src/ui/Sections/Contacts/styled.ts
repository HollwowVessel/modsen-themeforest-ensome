import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.gaps[5]}px;

  padding: ${({ theme }) => theme.paddings[8]}px 0
    ${({ theme }) => theme.paddings[8]}px 0;
  background: ${({ theme }) => theme.colors.background};
`;

export const Info = styled.div`
  max-width: 540px;
`;

export const Heading = styled.h3`
  font-weight: 800;
  font-size: 38px;
  line-height: 56px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.black};
  margin: 0 0 ${({ theme }) => theme.margins[2]}px 0;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.grey};
  margin: 0 0 ${({ theme }) => theme.margins[6]}px 0;
`;

export const ContactList = styled.ul``;

export const Contact = styled.li`
  margin: 0 0 ${({ theme }) => theme.margins[2]}px 0;
`;

export const ContactHeading = styled.h4`
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.grey};
  text-align: left;
`;

export const ContactDescription = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.black};
`;

export const Interaction = styled.form`
  padding: ${({ theme }) => theme.paddings[5]}px;
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
  color: ${({ theme }) => theme.colors.black};
  margin: 0 0 ${({ theme }) => theme.margins[3]}px 0;
`;

export const InteractionDescription = styled.label`
  font-weight: 600;
  font-size: 12px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.grey};
`;

export const Input = styled.input`
  width: 100%;
  display: block;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.black};
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  outline: none;
  background: none;
  margin: 0 0 ${({ theme }) => theme.margins[2]}px 0;
  &::placeholder {
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: -0.015em;
    color: ${({ theme }) => theme.colors.black};
  }
`;
