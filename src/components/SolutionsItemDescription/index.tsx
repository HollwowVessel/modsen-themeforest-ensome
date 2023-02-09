import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  Bold,
  Container,
  DescriptionBlock,
  Heading,
  Image,
  Info,
  Item,
  List,
  TabContainer,
  TabTeleport,
  Text,
} from './styled';
import { SolutionsItemDescriptionProps } from './types';
import Types from '@/assets/images/solutionsTypes.png';
import Practices from '@/assets/images/solutionsPractices.png';
import { solutionListItems, tabs } from '@/constants/services';

export const SolutionsItemDescription = ({
  name,
}: SolutionsItemDescriptionProps) => {
  const lowerCaseName = name.toLowerCase();
  const { hash } = useLocation();
  return (
    <Container>
      <TabContainer>
        {tabs(name).map(({ href, text }, id) => (
          <TabTeleport
            href={`#${href}`}
            key={text}
            active={hash ? `#${href}` === hash : id === 0}
          >
            {text}
          </TabTeleport>
        ))}
      </TabContainer>
      <Info>
        <DescriptionBlock id="what">
          <Heading>What is {lowerCaseName}?</Heading>
          <Text>
            Vestibulum varius mattis sagittis. Cras pharetra rutrum ante.
            Pellentesque pulvinar, odio ut convallis lobortis, massa ante mattis
            neque, a sagittis orci leo in quam. Ut convallis ex orci, nec
            sodales urna convallis ac. Sed cursus non dolor eu aliquam. Aenean
            et nisl in magna imperdiet auctor in vehicula arcu.
          </Text>
        </DescriptionBlock>
        <DescriptionBlock id="types">
          <Heading>Types of {lowerCaseName}?</Heading>
          <Image src={Types} alt="Types" />
          <Text>
            Vestibulum varius mattis sagittis. Cras pharetra rutrum ante.
            Pellentesque pulvinar, odio ut convallis lobortis, massa ante mattis
            neque, a sagittis orci leo in quam. Ut convallis ex orci, nec
            sodales urna convallis ac. Sed cursus non dolor eu aliquam. Aenean
            et nisl in magna imperdiet auctor in vehicula arcu.
          </Text>

          <List>
            {solutionListItems.map((el) => (
              <Item key={el}>
                <Bold>{el.split('—')[0]}</Bold> — {el.split('—')[1]}
              </Item>
            ))}
          </List>
        </DescriptionBlock>
        <DescriptionBlock id="practices">
          <Heading>{name} practices</Heading>
          <Image src={Practices} alt="Practices" />
          <Text>
            Vestibulum varius mattis sagittis. Cras pharetra rutrum ante.
            Pellentesque pulvinar, odio ut convallis lobortis, massa ante mattis
            neque, a sagittis orci leo in quam. Ut convallis ex orci, nec
            sodales urna convallis ac. Sed cursus non dolor eu aliquam. Aenean
            et nisl in magna imperdiet auctor in vehicula arcu.
          </Text>
          <Text>
            Phasellus sed venenatis leo. Cras pulvinar, eros sed dictum semper,
            orci ipsum scelerisque tortor, at euismod sem lectus sed ex.
            Praesent purus orci, rutrum ac aliquet nec, egestas sit amet nibh.
          </Text>
        </DescriptionBlock>
        <DescriptionBlock id="ensome">
          <Heading>{name} in Ensome</Heading>
          <Text>
            Cras aliquet felis nec lobortis pellentesque. Nam accumsan felis
            feugiat lorem volutpat, at mollis ipsum congue. Morbi non feugiat
            odio, ut facilisis eros. Duis in consequat mauris, vel interdum
            odio. Vestibulum et ex in neque bibendum vestibulum. Sed eget
            pharetra nunc. Duis mollis ante mauris, vitae volutpat libero
            rhoncus vitae.
          </Text>
          <Text>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos. Aenean luctus ultrices eros, vel
            sollicitudin arcu fringilla quis.
          </Text>
          <Text>
            Vestibulum porttitor euismod sagittis. Pellentesque scelerisque
            purus nisi, ac convallis neque bibendum eget. Pellentesque augue
            nunc, ullamcorper vel sollicitudin sed, auctor nec libero.
          </Text>
        </DescriptionBlock>
      </Info>
    </Container>
  );
};
