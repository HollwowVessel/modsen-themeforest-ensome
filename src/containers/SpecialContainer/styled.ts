import styled from 'styled-components';

export const Container = styled.section`
  margin: 0 0 ${({ theme }) => theme.margins[7]}px 0;
`;

export const Cards = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fit, minmax(328px, 540px));
  justify-items: center;

  gap: ${({ theme }) => theme.gaps[1]}px;
  max-width: ${({ theme }) => theme.sizes.at(-1)}px;
`;
