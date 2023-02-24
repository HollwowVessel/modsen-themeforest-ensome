import { blogArticles } from '@/constants/blogArticle';
import { testimonialCards } from '@/constants/testimonialCards';
import { BlogCard } from '@/ui/Cards/BlogCard';
import { TestimonialsCard } from '@/ui/Cards/TestimonialsCard';
import { TestimonialsCardProps } from '@/ui/Cards/TestimonialsCard/types';
import { TestimonialsCardOpen } from '@/ui/Cards/TestimonialsCardOpen';
import { ItemLink } from '@/ui/Carousel/styled';

export const testimonialsRender = ({
  heading,
  icon,
  info,
  text,
}: {
  heading: string;
  icon: string;
  info: string;
  text: string;
}) => (
  <TestimonialsCard
    icon={icon}
    name={heading}
    profession={info}
    description={text}
  />
);

export const testimonialsOpenRender = ({
  heading,
  icon,
  info,
  text,
}: {
  heading: string;
  icon: string;
  info: string;
  text: string;
}) => (
  <TestimonialsCardOpen
    icon={icon}
    name={heading}
    profession={info}
    description={text}
  />
);

export const blogRender = ({
  icon,
  info,
  text,
  heading,
  id,
}: {
  icon: string;
  info: string;
  text: string;
  heading: string;
  id: number;
}) => (
  <BlogCard
    date={info}
    heading={heading}
    text={text}
    image={icon}
    key={id}
    id={id}
  />
);
