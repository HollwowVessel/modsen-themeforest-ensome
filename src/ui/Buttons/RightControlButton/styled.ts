import styled from 'styled-components';
import arrowEnabled from '@/assets/images/icons/buttons/rightArrow.svg';
import arrowDisabled from '@/assets/images/icons/buttons/rightArrowDisabled.svg';

export const LeftControl = styled.button<Pick<{ arrow: boolean }, 'arrow'>>`
  position: relative;
  background: ${({ theme }) => theme.colors.tertiary};
  border-radius: 20px;
  border: none;
  width: ${({ theme }) => theme.sizes[6]}px;
  height: 60px;
  cursor: pointer;
  margin: 0 0 0 ${({ theme }) => theme.spaces[1]}px;
  &::after {
    content: '';
    position: absolute;
    width: ${({ theme }) => theme.sizes[1]}px;
    height: ${({ theme }) => theme.sizes[1]}px;
    background: url(${({ arrow }) =>
      !arrow ? `${arrowEnabled}` : `${arrowDisabled}`});
    background-repeat: no-repeat;
    top: ${({ theme }) => theme.spaces[1]}px;
    right: ${({ theme }) => theme.rights[3]}px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    width: ${({ theme }) => theme.sizes[2]}px;
    height: ${({ theme }) => theme.sizes[2]}px;
    &::after {
      right: ${({ theme }) => theme.rights[1]}px;
      top: ${({ theme }) => theme.tops[2]};
    }
  }
`;

export const Image = styled.img`
  width: ${({ theme }) => theme.sizes[2]}px;
  height: ${({ theme }) => theme.sizes[2]}px;
`;
