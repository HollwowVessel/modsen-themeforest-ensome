import styled from 'styled-components';
import date from '@/assets/images/icons/blog/date.svg';
import person from '@/assets/images/icons/blog/person.svg';
import views from '@/assets/images/icons/blog/views.svg';
import share from '@/assets/images/icons/blog/share.svg';
import tags from '@/assets/images/icons/blog/tags.svg';

export const Container = styled.section`
  max-width: 635px;
  margin: 0 0 63px 0;
`;

export const Image = styled.img`
  margin: 0 0 25px 0;
`;

export const GeneralInfo = styled.div`
  display: flex;
  gap: 30px;
  margin: 0 0 40px 0;
`;

export const Date = styled.span`
  position: relative;
  padding: 0 0 0 25px;
  &::before {
    content: '';
    width: 16px;
    height: 16px;
    position: absolute;
    background: url(${date});
    background-repeat: no-repeat;
    top: 2px;
    left: 0;
  }
`;

export const Author = styled.span`
  position: relative;
  padding: 0 0 0 25px;
  &::before {
    content: '';
    width: 16px;
    height: 16px;
    position: absolute;
    background: url(${person});
    background-repeat: no-repeat;
    top: 2px;
    left: 0;
  }
`;

export const Heading = styled.h3`
  font-weight: 800;
  font-size: 30px;
  line-height: 40px;
  letter-spacing: -0.015em;
  color: #292d33;
  margin: 0 0 30px 0;
`;

export const Text = styled.p`
  margin: 0 0 30px 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  /* or 175% */

  letter-spacing: -0.015em;

  /* Grey */

  color: #9497a1;
`;

export const Quote = styled.p`
  font-weight: 400;
  font-size: 20px;
  line-height: 33px;
  /* or 165% */

  letter-spacing: -0.015em;

  /* Black */

  color: #292d33;
  padding: 0 0 0 34px;
  border-left: 4px solid #185cff;
`;

export const Statistics = styled.div`
  display: flex;
  gap: 30px;
`;

export const Views = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: -0.015em;
  color: #9497a1;

  position: relative;
  padding: 0 0 0 25px;
  &::before {
    content: '';
    width: 16px;
    height: 16px;
    position: absolute;
    background: url(${views});
    background-repeat: no-repeat;
    top: 4px;
    left: 0;
  }
`;

export const Share = styled.ul`
  position: relative;
  padding: 0 0 0 25px;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 171% */
  display: flex;
  align-items: flex-start;
  gap: 8px;
  letter-spacing: -0.015em;

  /* Grey */

  color: #9497a1;
  &::before {
    content: '';
    width: 16px;
    height: 16px;
    position: absolute;
    background: url(${share});
    background-repeat: no-repeat;
    top: 4px;
    left: 0;
  }
`;

export const ShareItem = styled.li`
  cursor: pointer;
  padding: 4px 0;
`;

export const Tags = styled.ul`
  position: relative;
  padding: 0 0 0 25px;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 171% */
  display: flex;
  align-items: center;
  letter-spacing: -0.015em;
  gap: 9px;
  /* Grey */

  color: #9497a1;
  &::before {
    content: '';
    width: 16px;
    height: 16px;
    position: absolute;
    background: url(${tags});
    background-repeat: no-repeat;
    top: 8px;
    left: 0;
  }
`;

export const Tag = styled.li`
  font-weight: 800;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  letter-spacing: -0.015em;
  color: #185cff;
  border: 1px solid #f1f6fa;
  border-radius: 6px;
  padding: 3px 11px;
  cursor: pointer;
`;

export const Social = styled.img``;
