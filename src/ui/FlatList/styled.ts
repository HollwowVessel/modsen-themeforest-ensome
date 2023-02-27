import styled from 'styled-components';

import { slideAnimationOut } from '@/theme/animations';

export const Cards = styled.div<{ type: 'hidden' | 'open' }>`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.gaps[2]}px;
  margin: 0 auto ${({ theme }) => theme.margins[5]}px auto;
  max-width: ${({ theme }) => theme.sizes[5]}%;
  animation: 1s ${slideAnimationOut} forwards;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    justify-content: flex-start;
  }
  overflow: ${({ type }) => (type === 'hidden' ? 'hidden' : 'none')};
`;
