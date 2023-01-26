import styled from 'styled-components';
import { Link } from 'react-router-dom';
import minus from '@/assets/images/icons/dropdownMenu/minus.svg';
import plus from '@/assets/images/icons/dropdownMenu/plus.svg';
import { ActiveProps } from './types';

export const Container = styled.aside`
  max-width: 445px;
`;

export const Search = styled.div`
  display: flex;
  position: relative;
  width: 445px;
  margin: 0 0 ${({ theme }) => theme.margins[5]}px 0;
  button {
    position: absolute;
    right: ${({ theme }) => theme.rights[0]};
  }
`;

export const Heading = styled.h3`
  font-weight: 700;
  font-size: 22px;
  line-height: 33px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.black};
  margin: 0 0 ${({ theme }) => theme.margins[3]}px 0;
`;

export const Posts = styled.div`
  margin: 0 0 ${({ theme }) => theme.margins[5]}px 0;
`;

export const Post = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.gaps[2]}px;
  margin: 0 0 ${({ theme }) => theme.margins[3]}px 0;
`;

export const PostDescription = styled.div``;

export const Image = styled.img`
  max-width: 190px;
  height: 114px;
`;

export const Date = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.grey};
  margin: 0 0 ${({ theme }) => theme.margins[1]}px 0;
`;

export const Title = styled.h4`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.black};
  margin: 0 0 ${({ theme }) => theme.margins[1]}px 0;
`;

export const Categories = styled.ul`
  margin: 0 0 ${({ theme }) => theme.margins[5]}px 0;
`;

export const Category = styled.li<ActiveProps>`
  font-weight: 400;
  font-size: 20px;
  line-height: 33px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.black};
  padding: ${({ theme }) => theme.paddings[3]}px 0;
  justify-content: center;
  align-items: flex-start;
  gap: ${({ theme }) => theme.gaps[2]}px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  position: relative;

  &::before {
    content: '';
    width: 24px;
    height: 24px;
    position: absolute;
    background: url(${({ active }) => (active ? minus : plus)});

    background-repeat: no-repeat;
    top: ${({ theme }) => theme.tops[3]};
   right: ${({ theme }) => theme.rights[0]};
    cursor: pointer;
  }
`;

export const Tags = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.gaps[0]}px;
  flex-wrap: wrap;
`;

export const Tag = styled.button<ActiveProps>`
  background: ${({ active, theme }) => (active ? theme.colors.primary : '')};
  border: none;
  outline: none;
  border-radius: 6px;
  font-weight: 800;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.015em;
  padding: ${({ theme }) => theme.paddings[0]}px
    ${({ theme }) => theme.paddings[1]}px;
  color: ${({ active, theme }) =>
    active ? theme.colors.white : theme.colors.primary};
  cursor: pointer;
`;
