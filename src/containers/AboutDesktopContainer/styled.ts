import styled from 'styled-components';

export const AboutDesktopSection = styled.section`
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    display: none;
  }
`;
