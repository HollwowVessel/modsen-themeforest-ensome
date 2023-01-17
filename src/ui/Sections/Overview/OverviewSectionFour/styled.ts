import styled from 'styled-components';

export const Container = styled.div``;

export const List = styled.ul`
  display: flex;

  gap: 31px;
`;

export const Number = styled.h4`
  font-weight: 800;
  font-size: 56px;
  line-height: 112px;
  letter-spacing: -0.025em;
  color: #185cff;
  margin: 0;
  padding: 0;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: -0.015em;
  color: #9497a1;
  margin: 0;
  padding: 0;
`;

export const Item = styled.li`
  font-family: 'Open Sans';
  font-style: normal;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 160px;

  border-right: 1px solid rgba(241, 246, 250, 0.2);
`;
