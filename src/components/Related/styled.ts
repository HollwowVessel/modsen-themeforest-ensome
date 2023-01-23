import styled from 'styled-components';

export const Container = styled.section`
  padding: 0 400px;
`;

export const Posts = styled.div`
  margin: 0 0 60px 0;
`;

export const Post = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin: 0 0 30px 0;
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
  color: #9497a1;
  margin: 0 0 15px 0;
`;

export const Title = styled.h4`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: #292d33;
  margin: 0 0 10px 0;
`;

export const Heading = styled.h3`
  font-weight: 700;
  font-size: 22px;
  line-height: 33px;
  letter-spacing: -0.015em;
  color: #292d33;
  margin: 0 0 30px 0;
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  /* or 175% */

  letter-spacing: -0.015em;

  /* Grey */

  color: #9497a1;
  max-width: 400px;
`;
