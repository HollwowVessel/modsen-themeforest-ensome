import styled from 'styled-components';

export const Container = styled.section`
  margin: 0 0 ${({ theme }) => theme.margins[7]}px 0;
`;

export const Cards = styled.div`
  display: grid;
  margin: ${({ theme }) => theme.margins[7]}px auto;
  grid-template-columns: repeat(auto-fit, minmax(328px, 540px));
  justify-items: center;

  gap: ${({ theme }) => theme.gaps[1]}px;
  max-width: 1120px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Image = styled.img`
  margin: 0 0 ${({ theme }) => theme.margins[3]}px 0;
  width: 300px;
`;

export const Heading = styled.h3`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fonts.at(-1)}px;
  line-height: 33px;

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
  margin: 0 0 ${({ theme }) => theme.margins[2]}px 0;
  max-width: 540px;
`;
