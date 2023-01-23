import styled from 'styled-components';

export const Card = styled.div`
  width: 350px;
  height: 500px;
  position: relative;
  &:nth-of-type(3n + 2) {
    transform: translateY(-120px);
  }
`;
export const Image = styled.img`
  position: absolute;
  z-index: -1;
`;

export const Name = styled.h3`
  margin: 420px 0 0 0;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  letter-spacing: -0.015em;
  color: #ffffff;
  padding: 0 25px;
`;

export const Profession = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: -0.015em;
  color: #ffffff;
  padding: 0 25px;
`;
