import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 ${({ theme }) => theme.margins[7]}px 0;
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  max-width: ${({ theme }) => theme.sizes.at(-1)}px;
  justify-items: center;

  gap: ${({ theme }) => theme.gaps[2]}px;
`;
