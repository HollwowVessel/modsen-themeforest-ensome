import styled from 'styled-components';
import date from '@/assets/images/icons/blog/date.svg';
import person from '@/assets/images/icons/blog/person.svg';
import views from '@/assets/images/icons/blog/views.svg';
import share from '@/assets/images/icons/blog/share.svg';
import tags from '@/assets/images/icons/blog/tags.svg';
import { TagProps } from './types';

export const Container = styled.section`
  max-width: 635px;
  margin: 0 0 ${({ theme }) => theme.margins[5]}px 0;
`;

export const Image = styled.img`
  margin: 0 0 ${({ theme }) => theme.margins[2]}px 0;
  width: 635px;
`;

export const GeneralInfo = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.gaps[3]}px;
  margin: 0 0 ${({ theme }) => theme.margins[4]}px 0;
`;

export const Date = styled.span`
  position: relative;
  padding: 0 0 0 ${({ theme }) => theme.paddings[3]}px;
  &::before {
    content: '';
    width: 16px;
    height: 16px;
    position: absolute;
    background: url(${date});
    background-repeat: no-repeat;
    top: ${({ theme }) => theme.tops[0]};
    left: 0;
  }
`;

export const Author = styled.span`
  position: relative;
  padding: 0 0 0 ${({ theme }) => theme.paddings[3]}px;
  &::before {
    content: '';
    width: 16px;
    height: 16px;
    position: absolute;
    background: url(${person});
    background-repeat: no-repeat;
    top: ${({ theme }) => theme.tops[0]};
    left: 0;
  }
`;

export const Heading = styled.h3`
  font-weight: 800;
  font-size: 30px;
  line-height: 40px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.black};
  margin: 0 0 ${({ theme }) => theme.margins[3]}px 0;
`;

export const Text = styled.p`
  margin: 0 0 ${({ theme }) => theme.margins[3]}px 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  /* or 175% */

  letter-spacing: -0.015em;

  /* Grey */

  color: ${({ theme }) => theme.colors.grey};
`;

export const Quote = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 33px;
  /* or 165% */

  letter-spacing: -0.015em;

  /* Black */

  color: ${({ theme }) => theme.colors.black};
  padding: 0 0 0 ${({ theme }) => theme.paddings[4]}px;
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
`;

export const Statistics = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.gaps[3]}px;
  margin: 0 0 ${({ theme }) => theme.margins[5]}px 0;
`;

export const Views = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.grey};

  position: relative;
  padding: 0 0 0 ${({ theme }) => theme.paddings[3]}px;
  &::before {
    content: '';
    width: 16px;
    height: 16px;
    position: absolute;
    background: url(${views});
    background-repeat: no-repeat;
    top: ${({ theme }) => theme.tops[1]};
    left: 0;
  }
`;

export const Share = styled.ul`
  position: relative;
  padding: 0 0 0 ${({ theme }) => theme.paddings[3]}px;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 171% */
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.gaps[0]}px;
  letter-spacing: -0.015em;

  /* Grey */

  color: ${({ theme }) => theme.colors.grey};
  &::before {
    content: '';
    width: 16px;
    height: 16px;
    position: absolute;
    background: url(${share});
    background-repeat: no-repeat;
    top: ${({ theme }) => theme.tops[1]};
    left: 0;
  }
`;

export const ShareItem = styled.li`
  cursor: pointer;
  padding: ${({ theme }) => theme.paddings[0]}px 0;
`;

export const Tags = styled.ul`
  position: relative;
  padding: 0 0 0 ${({ theme }) => theme.paddings[3]}px;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 171% */
  display: flex;
  align-items: center;
  letter-spacing: -0.015em;
  gap: ${({ theme }) => theme.gaps[0]}px;
  /* Grey */

  color: ${({ theme }) => theme.colors.grey};
  &::before {
    content: '';
    width: 16px;
    height: 16px;
    position: absolute;
    background: url(${tags});
    background-repeat: no-repeat;
    top: ${({ theme }) => theme.tops[2]};
    left: 0;
  }
`;

export const Tag = styled.li<TagProps>`
  font-weight: 800;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.015em;
  background: ${({ active, theme }) =>
    active ? theme.colors.primary : theme.colors.background};
  color: ${({ active, theme }) =>
    active ? theme.colors.background : theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.background};
  border-radius: 6px;
  padding: ${({ theme }) => theme.paddings[0]}px
    ${({ theme }) => theme.paddings[1]}px;
  cursor: pointer;
`;

export const Social = styled.img``;
