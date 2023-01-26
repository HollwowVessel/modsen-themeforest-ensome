import styled from 'styled-components';

export const Container = styled.div`
  max-width: 540px;
  box-shadow: 0px 4px 12px rgba(12, 68, 204, 0.1);
  border-radius: 6px;
  padding: ${({ theme }) => theme.paddings[3]}px
    ${({ theme }) => theme.paddings[4]}px;
`;

export const Image = styled.img`
  margin: 0 0 ${({ theme }) => theme.margins[2]}px 0;
`;

export const Heading = styled.h3`
  font-weight: 700;
  font-size: 22px;
  line-height: 33px;

  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.black};
  margin: 0 0 ${({ theme }) => theme.margins[1]}px 0;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.grey};
  margin: 0 0 ${({ theme }) => theme.margins[2]}px 0;
`;
