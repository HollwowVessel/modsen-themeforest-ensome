import { useTranslation } from 'react-i18next';

import { ArrowLink } from '@/ui/Links/ArrowLink';

import { Card, Date, Description, Image, Name } from './styled';
import { BlogCardProps } from './types';

export const BlogCard = ({ image, date, text, heading }: BlogCardProps) => {
  const { t } = useTranslation();
  return (
    <Card>
      <Image src={image} alt={image} />
      <Date>{date}</Date>
      <Name>{heading}</Name>
      <Description>{text}</Description>
      <ArrowLink
        to={`/blog/${heading.split(' ').slice(0, 2).join(' ')}`}
        text={t('Read more')}
      />
    </Card>
  );
};
