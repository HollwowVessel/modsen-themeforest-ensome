import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 125px;
  background: #002b4e;
  padding: 80px 0;
`;

export const Info = styled.div`
  max-width: 540px;
`;

export const Subscribe = styled.h3`
  font-weight: 800;
  font-size: 38px;
  line-height: 56px;
  letter-spacing: -0.015em;
  color: #ffffff;
  margin: 0 0 24px 0;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 33px;
  letter-spacing: -0.015em;
  color: #ffffff;
`;

export const Interaction = styled.div`
  max-width: 445px;
  background: #c9dcec;
  border-radius: 6px;
  margin: 126px 0;
`;

export const Email = styled.input`
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: #292d33;
  background: #c9dcec;
  border-radius: 6px;
  padding: 15px 25px;
  border: none;
  outline: none;
  width: 249px;
  &::placeholder {
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: -0.015em;
    color: #292d33;
  }
`;

export const Send = styled.button`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  background: #ffffff;
  padding: 15px 20px;
  border-radius: 6px;
  border: none;
  outline: none;
`;
