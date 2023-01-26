import styled from 'styled-components';
import MenuIcon from '@/assets/images/icons/general/menuIcon.svg';

export const Container = styled.div`
  display: flex;
  background: ${({ theme }) => theme.colors.background};
  gap: ${({ theme }) => theme.gaps[4]}px;
  margin: 0 0 ${({ theme }) => theme.margins[7]}px 0;
`;

export const Image = styled.img``;

export const Info = styled.div``;

export const Heading = styled.h3`
  font-weight: 800;
  font-size: 38px;
  line-height: 56px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.black};
  margin: 0 0 ${({ theme }) => theme.margins[5]}px 0;
`;

export const List = styled.ul``;

export const Item = styled.li`
  position: relative;
  margin: 0 0 ${({ theme }) => theme.margins[3]}px 0;

  &::before {
    content: '';
    width: 17px;
    height: 12px;
    position: absolute;
    background: url(${MenuIcon});
    top: ${({ theme }) => theme.tops[0]};
  }
`;

export const ItemName = styled.h4`
  margin: 0 0 ${({ theme }) => theme.margins[1]}px 0;
  padding: 0 0 0 ${({ theme }) => theme.paddings[3]}px;
`;

export const ItemDescription = styled.p`
  max-width: 540px;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.grey};
`;
