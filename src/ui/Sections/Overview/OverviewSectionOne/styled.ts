import styled from 'styled-components';

export const Container = styled.div`
  background: #185cff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
`;

export const List = styled.ul`
  display: flex;
  gap: 16px;
`;

export const Number = styled.h4`
  font-weight: 800;
  font-size: 56px;
  line-height: 112px;
  text-align: center;
  letter-spacing: -0.025em;
  margin: 0;
  padding: 0;
  color: #ffffff;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 28px;
  text-align: center;
  letter-spacing: -0.015em;
  margin: 0;
  padding: 0;
  color: #ffffff;
`;

export const Item = styled.li`
  font-family: 'Open Sans';
  font-style: normal;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 255px;
  height: 104px;
  border-right: 1px solid rgba(241, 246, 250, 0.2);
`;
