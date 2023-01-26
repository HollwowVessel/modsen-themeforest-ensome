import styled from 'styled-components';

export const Container = styled.section`
  display: flex;

  justify-content: center;
  align-items: flex-start;
  margin: 0 0 120px 0;
`;

export const Cards = styled.div`
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(3, minmax(328px, 540px));
  justify-items: center;

  gap: 15px;
  max-width: 1120px;
`;
