import styled from 'styled-components';

export const Container = styled.section`
  margin: 0 0 120px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Info = styled.div`
  margin: 80px 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 220px;
`;

export const Heading = styled.h1`
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 800;
  font-size: 46px;
  line-height: 60px;
`;

export const Description = styled.p`
  font-family: 'Open Sans';
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  display: flex;
  align-items: center;
  letter-spacing: -0.015em;
  max-width: 350px;
  color: #9497a1;
  text-align: justify;
`;

export const HeroesContainer = styled.section`
  position: relative;
`;

export const ButtonContainer = styled.section`
  position: absolute;
  top: -70px;
  right: 625px;
`;

export const Ensome = styled.span`
  color: #185cff;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
