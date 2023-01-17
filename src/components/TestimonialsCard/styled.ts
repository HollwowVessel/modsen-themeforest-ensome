import styled from 'styled-components';

export const Card = styled.div`
  box-shadow: 0px 4px 12px rgba(12, 68, 204, 0.1);
  max-width: 350px;
  display: flex;
  align-items: center;
  gap: 25px;
  flex-wrap: wrap;
  padding: 35px;
`;

export const Info = styled.div``;

export const Image = styled.img``;

export const Name = styled.h4`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: #292d33;
`;

export const Profession = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.01em;
  color: #9497a1;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  text-align: justify;
  letter-spacing: -0.015em;
  color: #9497a1;
`;
