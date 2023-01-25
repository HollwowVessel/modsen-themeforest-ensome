import React, { memo } from 'react';
import { useParams } from 'react-router-dom';
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
import img1 from '@/assets/images/blog/img1.jpg';
import { blogSocials } from '@/constants/blogSocials';

export const BlogArticle = memo(
  ({
    text,
    date,
    heading,
    image,
  }: {
    text: string;
    date: string;
    heading: string;
    image: string;
  }) => (
    <Container>
      <Image src={image} />
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
        <Views>481 Views</Views>
        <Share>
          Share:
          {blogSocials.map((el, id) => (
            <ShareItem>
              <Social src={el} alt={el} title={el} key={id} />
            </ShareItem>
          ))}
        </Share>
        <Tags>
          Tags:
          <Tag>Data</Tag>
          <Tag>Future</Tag>
        </Tags>
      </Statistics>
    </Container>
  )
);
