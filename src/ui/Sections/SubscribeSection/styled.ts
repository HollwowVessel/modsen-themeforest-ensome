import styled from 'styled-components';

export const Container = styled.section`
  gap: ${({ theme }) => theme.gaps[5]}px;
  background: ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => theme.paddings[6]}px 0;
  @media (max-width: ${({ theme }) => theme?.breakPoints?.tablet}px) {
    flex-direction: column;
    gap: ${({ theme }) => theme.gaps[2]}px;
    text-align: center;
  }
`;
export const Section = styled.div`
  max-width: ${({ theme }) => theme.sizes.at(-1)}px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: space-between;
`;

export const Info = styled.div`
  input,
  button {
    display: none;
  }
  div {
    margin: 0 auto;
    background: transparent;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    margin: 0 ${({ theme }) => theme.spaces[2]}px;
    input,
    button {
      display: block;
    }
    button {
      background: white;
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

export const Subscribe = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeights[4]};
  font-size: ${({ theme }) => theme.fonts.at(-3)}px;
  line-height: ${({ theme }) => theme.lineHeights.at(-2)}px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.white};
  margin: 0 0 ${({ theme }) => theme.spaces[2]}px 0;
`;

export const Description = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights[0]};
  max-width: ${({ theme }) => theme.sizes.at(-5)}px;
  font-size: ${({ theme }) => theme.fonts[2]}px;
  line-height: ${({ theme }) => theme.lineHeights[2]}px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.white};
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    display: none;
  }
`;

export const Interaction = styled.div`
  max-width: ${({ theme }) => theme.sizes.at(-5)}px;
  background: ${({ theme }) => theme.colors.helperBlueThree};
  border-radius: 6px;
  margin: ${({ theme }) => theme.spaces.at(-2)}px 0;

  @media (max-width: ${({ theme }) => theme?.breakPoints?.tablet}px) {
    margin: 0;
  }
`;

export const Email = styled.input`
  font-weight: ${({ theme }) => theme.fontWeights[2]};
  font-size: ${({ theme }) => theme.fonts[0]}px;
  line-height: ${({ theme }) => theme.lineHeights[0]}px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.helperBlueThree};
  border-radius: 6px;
  padding: ${({ theme }) => theme.paddings[2]}px
    ${({ theme }) => theme.paddings[3]}px;
  border: none;
  outline: none;
  max-width: ${({ theme }) => theme.sizes.at(-7)}px;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    display: none;
  }

  &::placeholder {
    font-weight: ${({ theme }) => theme.fontWeights[2]};
    font-size: ${({ theme }) => theme.fonts[0]}px;
    line-height: ${({ theme }) => theme.lineHeights[0]}px;
    letter-spacing: -0.015em;
    color: ${({ theme }) => theme.colors.black};
  }
  @media (max-width: ${({ theme }) => theme?.breakPoints?.tablet}px) {
    flex-direction: column;
    gap: ${({ theme }) => theme.gaps[2]}px;
  }
`;

export const Send = styled.button`
  font-weight: ${({ theme }) => theme.fontWeights[3]};

  font-size: ${({ theme }) => theme.fonts[1]}px;
  line-height: ${({ theme }) => theme.lineHeights[0]}px;
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.paddings[2]}px
    ${({ theme }) => theme.paddings[3]}px;
  border-radius: 6px;
  border: none;
  outline: none;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    display: none;
  }
`;
