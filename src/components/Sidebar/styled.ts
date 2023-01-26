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
  margin: 0 0 60px 0;
  button {
    position: absolute;
    right: 0;
  }
`;

export const Heading = styled.h3`
  font-weight: 700;
  font-size: 22px;
  line-height: 33px;
  letter-spacing: -0.015em;
  color: #292d33;
  margin: 0 0 30px 0;
`;

export const Posts = styled.div`
  margin: 0 0 60px 0;
`;

export const Post = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 0 0 30px 0;
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
  color: #9497a1;
  margin: 0 0 15px 0;
`;

export const Title = styled.h4`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: #292d33;
  margin: 0 0 15px 0;
`;

export const Categories = styled.ul`
  margin: 0 0 60px 0;
`;

export const Category = styled.li<ActiveProps>`
  font-weight: 400;
  font-size: 20px;
  line-height: 33px;
  letter-spacing: -0.015em;
  color: #292d33;
  padding: 20px 0;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  border-bottom: 1px solid #9497a1;
  position: relative;

  &::before {
    content: '';
    width: 24px;
    height: 24px;
    position: absolute;
    background: url(${({ active }) => (active ? minus : plus)});

    background-repeat: no-repeat;
    top: 32px;
    right: 0;
    cursor: pointer;
  }
`;

export const Tags = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const Tag = styled.button<ActiveProps>`
  background: ${({ active }) => (active ? '#185CFF' : '')};
  border: none;
  outline: none;
  border-radius: 6px;
  font-weight: 800;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.015em;
  padding: 3px 11px;
  color: ${({ active }) => (active ? '#fff' : '#185CFF')};
  cursor: pointer;
`;
