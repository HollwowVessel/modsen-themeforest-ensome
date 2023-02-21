import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.section`
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    padding: 0 ${({ theme }) => theme.paddings[2]}px;
  }
`;

export const Posts = styled.div`
  margin: 0 0 ${({ theme }) => theme.margins[5]}px 0;
`;

export const Post = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.gaps[2]}px;
  margin: 0 0 ${({ theme }) => theme.margins[3]}px 0;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    flex-direction: column;
  }
`;

export const PostDescription = styled.div``;

export const Image = styled.img`
  max-width: ${({ theme }) => theme.sizes[8]}px;
  height: ${({ theme }) => theme.sizes[7]}px;
`;

export const Date = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights[0]};
  font-size: ${({ theme }) => theme.fonts[0]}px;
  line-height: ${({ theme }) => theme.lineHeights[0]}px;
  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.colors.grey};
  margin: 0 0 ${({ theme }) => theme.margins[1]}px 0;
`;

export const Title = styled.h4`
  font-weight: ${({ theme }) => theme.fontWeights[3]};
  font-size: ${({ theme }) => theme.fonts[1]}px;
  line-height: ${({ theme }) => theme.lineHeights[0]}px;
  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.colors.black};
  margin: 0 0 ${({ theme }) => theme.margins[0]}px 0;
`;

export const Heading = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeights[3]};
  font-size: ${({ theme }) => theme.fonts[3]}px;
  line-height: ${({ theme }) => theme.lineHeights[2]}px;
  letter-spacing: 0.03em;
  color: ${({ theme }) => theme.colors.black};
  margin: 0 0 ${({ theme }) => theme.margins[3]}px 0;
`;

export const Text = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights[0]};
  font-size: ${({ theme }) => theme.fonts[1]}px;
  line-height: ${({ theme }) => theme.lineHeights[1]}px;
  /* or 175% */

  letter-spacing: 0.03em;

  /* Grey */

  color: ${({ theme }) => theme.colors.grey};
  max-width: ${({ theme }) => theme.sizes[9]}px;
`;

export const BlogLink = styled(Link)`
  text-decoration: none;
`;
