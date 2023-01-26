import styled from 'styled-components';

export const Container = styled.section``;

export const Posts = styled.div`
  margin: 0 0 ${({ theme }) => theme.margins[5]}px 0;
`;

export const Post = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.gaps[2]}px;
  margin: 0 0 ${({ theme }) => theme.margins[3]}px 0;
`;

export const PostDescription = styled.div``;

export const Image = styled.img`
  max-width: 215px;
  height: 171px;
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
  margin: 0 0 ${({ theme }) => theme.margins[0]}px 0;
`;

export const Heading = styled.h3`
  font-weight: 700;
  font-size: 22px;
  line-height: 33px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.black};
  margin: 0 0 ${({ theme }) => theme.margins[3]}px 0;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  /* or 175% */

  letter-spacing: -0.015em;

  /* Grey */

  color: ${({ theme }) => theme.colors.grey};
  max-width: 400px;
`;
