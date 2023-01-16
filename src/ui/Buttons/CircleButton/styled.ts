import styled from 'styled-components';

export const OuterContainer = styled.div`
  width: 140px;
  height: 140px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 100%;
  cursor: pointer;
`;

export const InnerContainer = styled.div<
  Pick<{ background: boolean }, 'background'>
>`
  cursor: pointer;

  background: #185cff;
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;

  button:disabled,
  & {
    background: ${({ background }) => (background ? '#9497a1' : '#185cff')};
  }

  &:hover,
  &:hover button {
    background: ${({ background }) => (background ? '' : '#467dff')};
  }
`;

export const Circle = styled.button`
  border: 2px solid rgba(255, 255, 255, 0.4);
  border-radius: 100%;
  cursor: pointer;

  width: 100px;
  height: 100px;
  background: #185cff;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;

  text-align: center;
  letter-spacing: -0.01em;

  color: #ffffff;
`;
