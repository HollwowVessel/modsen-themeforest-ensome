import styled from 'styled-components';

export const Card = styled.div`
  min-height: 525px;
  padding: 35px;
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(12, 68, 204, 0.1);
  border-radius: 6px;
`;

export const Heading = styled.h4`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: #292d33;
  margin: 0 0 16px 0;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 30px 0;
`;

export const Price = styled.span`
  font-weight: 800;
  font-size: 26px;
  line-height: 40px;
  letter-spacing: -0.015em;
  color: #292d33;
`;

export const TimeType = styled.button`
  padding: 4px 10px;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.01em;
  color: #185cff;
  background: #fff;
  border: 1px solid #185cff;
  border-radius: 6px;
  cursor: pointer;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 10px;
`;

export const List = styled.ul`
  margin: 30px 0 0 0;
`;

export const Advantages = styled.li`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: #292d33;
`;
