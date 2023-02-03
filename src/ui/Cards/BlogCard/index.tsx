import { useState } from 'react';

import { Keyframes } from 'styled-components';
import { Card, Date, Description, Image, Name, Tag, Tags } from './styled';
import { ArrowLink } from '@/ui/Links/ArrowLink';
import { BlogCardProps } from './types';

export const BlogCard = ({
  image,
  date,
  text,
  heading,
  id,
  animation,
  tags,
}: BlogCardProps) => {
  const [activeTag, setActiveTag] = useState(0);
  const handleActive = (id: number) => () => {
    setActiveTag(id);
  };

  return (
    <Card animation={animation as Keyframes}>
      <Image src={image} alt="" loading="lazy" />
      <Date>{date}</Date>
      <Name>{heading}</Name>
      <Description>{text}</Description>
      <Tags>
        Tags:
        {tags?.map((el, ind) => (
          <Tag key={el} onClick={handleActive(ind)} active={activeTag === ind}>
            {el}
          </Tag>
        ))}
      </Tags>
      <ArrowLink to={`/blog/${id}`} text="Read more" />
    </Card>
  );
};
