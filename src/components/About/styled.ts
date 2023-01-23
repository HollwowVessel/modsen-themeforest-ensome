import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin: 0 0 120px 0;
`;

export const Image = styled.img``;

export const Description = styled.div``;

export const Heading = styled.h3`
  font-weight: 800;
  font-size: 46px;
  line-height: 60px;
  letter-spacing: -0.015em;
  color: #292d33;
  margin: 0 0 30px 0;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 33px;
  letter-spacing: -0.015em;
  color: #9497a1;
  margin: 0 0 20px 0;
  max-width: 445px;
`;
