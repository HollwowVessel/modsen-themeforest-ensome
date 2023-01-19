import styled from 'styled-components';
// eslint-disable-next-line import/no-useless-path-segments
import arrowEnabled from '@/assets/images/icons/buttons/leftArrow.svg';
import arrowDisabled from '@/assets/images/icons/buttons/leftArrowDisabled.svg';

export const LeftControl = styled.button<Pick<{ arrow: boolean }, 'arrow'>>`
  background: ${({ theme }) => theme.colors.tertiary};
  width: ${({ theme }) => theme.sizes[6]}px;
  cursor: pointer;
  height: 60px;
  border-radius: 20px;
  border: none;
  margin: 0 0 0 ${({ theme }) => theme.spaces[1]}px;
  position: relative;
  &:after {
    content: '';
    background: url(${({ arrow }) =>
      !arrow ? `${arrowEnabled}` : `${arrowDisabled}`});
    width: ${({ theme }) => theme.sizes[1]}px;
    height: ${({ theme }) => theme.sizes[1]}px;
    position: absolute;
    top: ${({ theme }) => theme.spaces[1]}px;
    left: 40px;
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    width: ${({ theme }) => theme.sizes[2]}px;
    height: ${({ theme }) => theme.sizes[2]}px;
    &::after {
      left: 8px;
      top: 8px;
    }
  }
`;
