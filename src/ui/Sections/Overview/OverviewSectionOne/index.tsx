import React, { memo } from 'react';
import { Container, Item, List, Name, Number } from './styled';

export const OverviewSectionOne = memo(() => (
  <Container>
    <List>
      <Item>
        <Number>1830+</Number>
        <Name>Project executed</Name>
      </Item>
      <Item>
        <Number>220</Number>
        <Name>Data analytics</Name>
      </Item>
      <Item>
        <Number>390</Number>
        <Name>Data management</Name>
      </Item>
      <Item>
        <Number>834+</Number>
        <Name>Satisfied customers</Name>
      </Item>
    </List>
  </Container>
));
