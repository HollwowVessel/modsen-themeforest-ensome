import { useState } from 'react';

import {
  Author,
  Container,
  Date,
  GeneralInfo,
  Heading,
  Image,
  Quote,
  Share,
  ShareItem,
  Social,
  Statistics,
  Tag,
  Tags,
  Text,
  Views,
} from './styled';

import { blogSocials } from '@/constants/blogSocials';
import { Related } from '@/components/Related';
import { BlogArticleProps } from './types';

export const BlogArticle = ({
  text,
  date,
  heading,
  image,
  views,
  tags,
}: BlogArticleProps) => {
  const [active, setActive] = useState(0);

  const handleActive = (id: number) => () => {
    setActive(id);
  };

  return (
    <Container>
      <Image src={image} alt={image} loading="lazy" />
      <GeneralInfo>
        <Date>{date}</Date>
        <Author>William Pond</Author>
      </GeneralInfo>
      <Heading>{heading}</Heading>
      <Text>{text}</Text>
      <Text>
        Ut sit amet neque vel mauris consequat aliquam at in arcu. Ut vulputate,
        augue luctus dignissim pretium, elit magna placerat elit, at venenatis
        lacus arcu eget quam. Fusce nec cursus mi, sed blandit.
      </Text>
      <Text>
        Phasellus tristique eu nisl eu consectetur. Morbi urna massa, imperdiet
        in mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt
        aliq uam ligula id, lacinia auctor orci. Sed quis lobortis eros. Fusce
        id commodo libero. Praesent mollis velit ac accumsan ultrices. Ut
        convallis ipsum pulvinar ante maximus suscipit.
      </Text>
      <Quote>
        "Morbi urna massa, imperdiet in mauris et, euismod vestibulum lacus.
        Integer enim elit, tincidunt aliquam ligula id, lacinia auctor orci. Sed
        quis lobortis eros. Fusce id commodo libero"
      </Quote>
      <Text>
        Mauris purus diam, iaculis non leo nec, ultricies fringilla odio. Fusce
        feugiat elit facilisis volutpat venenatis. Vestibulum tempor ligula vel
        orci consectetur, eu euismod augue bibendum. In volutpat libero velit,
        et mattis tortor placerat eget.
      </Text>
      <Text>
        Ut nec aliquam urna, et varius massa. Praesent eu nisl ac ex maximus
        iaculis. Sed placerat, ligula vel tempor pellentesque, odio ipsum
        lobortis orci, sit amet fermentum ex nunc ac diam.
      </Text>
      <Statistics>
        <Views>{views} Views</Views>
        <Share>
          Share:
          {blogSocials.map((el) => (
            <ShareItem>
              <Social src={el} alt={el} title={el} key={el} />
            </ShareItem>
          ))}
        </Share>
        <Tags>
          Tags:
          {tags?.map((el, id) => (
            <Tag key={el} onClick={handleActive(id)} active={active === id}>
              {el}
            </Tag>
          ))}
        </Tags>
      </Statistics>
      <Related tag={active >= 0 && tags?.length ? tags[active] : -1} />
    </Container>
  );
};
