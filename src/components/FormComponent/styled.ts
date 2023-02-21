import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    width: ${({ theme }) => theme.sizes[5]}%;
    padding: 0 ${({ theme }) => theme.paddings[2]}px;
  }
`;

export const BasicInfo = styled.div<{ divide: boolean }>`
  display: flex;
  flex-direction: ${({ divide }) => (divide ? 'row' : 'column')};
  margin: 0 0 ${({ theme }) => theme.margins[2]}px 0;
  gap: ${({ theme }) => theme.gaps[3]}px;
  width: ${({ theme }) => theme.sizes[5]}%;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    flex-direction: column;
    gap: 0;
  }
`;

export const Label = styled.label`
  font-weight: ${({ theme }) => theme.fontWeights[2]};
  font-size: ${({ theme }) => theme.fonts[0]}px;
  line-height: ${({ theme }) => theme.lineHeights[0]}px;
  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.colors.grey};
  margin: ${({ theme }) => theme.margins[2]}px 0 0 0;
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
    margin: 0;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.sizes[5]}%;
`;
