import styled from 'styled-components';
import date from '@/assets/images/icons/blog/date.svg';
import person from '@/assets/images/icons/blog/person.svg';
import views from '@/assets/images/icons/blog/views.svg';
import share from '@/assets/images/icons/blog/share.svg';
import tags from '@/assets/images/icons/blog/tags.svg';
import { TagProps } from './types';

export const Container = styled.section`
  max-width: ${({ theme }) => theme.sizes.at(-3)}px;
  margin: 0 0 ${({ theme }) => theme.margins[5]}px 0;

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    max-width: ${({ theme }) => theme.sizes[5]}%;
    padding: 0 ${({ theme }) => theme.paddings[2]}px;
  }
`;

export const Image = styled.img`
  margin: 0 0 ${({ theme }) => theme.margins[2]}px 0;
  width: ${({ theme }) => theme.sizes[5]}%;
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
    width: ${({ theme }) => theme.sizes[0]}px;
    height: ${({ theme }) => theme.sizes[0]}px;
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
    width: ${({ theme }) => theme.sizes[0]}px;
    height: ${({ theme }) => theme.sizes[0]}px;
    position: absolute;
    background: url(${person});
    background-repeat: no-repeat;
    top: ${({ theme }) => theme.tops[0]};
    left: 0;
  }
`;

export const Heading = styled.h3`
  font-weight: ${({ theme }) => theme.fontWeights[4]};
  font-size: ${({ theme }) => theme.fonts[4]}px;
  line-height: ${({ theme }) => theme.lineHeights[3]}px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.black};
  margin: 0 0 ${({ theme }) => theme.margins[3]}px 0;
`;

export const Text = styled.p`
  margin: 0 0 ${({ theme }) => theme.margins[3]}px 0;
  font-weight: ${({ theme }) => theme.fontWeights[0]};
  font-size: ${({ theme }) => theme.fonts[1]}px;
  line-height: ${({ theme }) => theme.lineHeights[1]}px;
  /* or 175% */

  letter-spacing: -0.015em;

  /* Grey */

  color: ${({ theme }) => theme.colors.grey};
`;

export const Quote = styled.p`
  font-weight: ${({ theme }) => theme.fontWeights[0]};
  font-size: ${({ theme }) => theme.fonts[2]}px;
  line-height: ${({ theme }) => theme.lineHeights[2]}px;
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
  font-weight: ${({ theme }) => theme.fontWeights[0]};
  font-size: ${({ theme }) => theme.fonts[0]}px;
  line-height: ${({ theme }) => theme.lineHeights[0]}px;
  letter-spacing: -0.015em;
  color: ${({ theme }) => theme.colors.grey};

  position: relative;
  padding: 0 0 0 ${({ theme }) => theme.paddings[3]}px;
  &::before {
    content: '';
    width: ${({ theme }) => theme.sizes[0]}px;
    height: ${({ theme }) => theme.sizes[0]}px;
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
  font-weight: ${({ theme }) => theme.fontWeights[0]};
  font-size: ${({ theme }) => theme.fonts[0]}px;
  line-height: ${({ theme }) => theme.lineHeights[0]}px;
  /* identical to box height, or 171% */
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.gaps[0]}px;
  letter-spacing: -0.015em;

  /* Grey */

  color: ${({ theme }) => theme.colors.grey};
  &::before {
    content: '';
    width: ${({ theme }) => theme.sizes[0]}px;
    height: ${({ theme }) => theme.sizes[0]}px;
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

export const Tags = styled.div`
  position: relative;
  padding: 0 0 0 ${({ theme }) => theme.paddings[3]}px;
  font-weight: ${({ theme }) => theme.fontWeights[0]};
  font-size: ${({ theme }) => theme.fonts[0]}px;
  line-height: ${({ theme }) => theme.lineHeights[0]}px;
  /* identical to box height, or 171% */
  display: flex;
  align-items: center;
  letter-spacing: -0.015em;
  gap: ${({ theme }) => theme.gaps[0]}px;
  /* Grey */

  color: ${({ theme }) => theme.colors.grey};
  &::before {
    content: '';
    width: ${({ theme }) => theme.sizes[0]}px;
    height: ${({ theme }) => theme.sizes[0]}px;
    position: absolute;
    background: url(${tags});
    background-repeat: no-repeat;
    top: ${({ theme }) => theme.tops[2]};
    left: 0;
  }
`;

export const Tag = styled.button<TagProps>`
  font-weight: ${({ theme }) => theme.fontWeights[4]};
  font-size: ${({ theme }) => theme.fonts[0]}px;
  line-height: ${({ theme }) => theme.lineHeights[0]}px;
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
