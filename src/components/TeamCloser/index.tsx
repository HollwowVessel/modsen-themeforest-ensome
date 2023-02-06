import { Container, Description, Heading, Image, Text } from './styled';
import Team from '@/assets/images/teamImage.png';

export const TeamCloser = () => (
  <Container>
    <Heading>Get to know us closer</Heading>
    <Description>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium.
    </Description>
    <Image src={Team} />
    <Text>
      Phasellus tristique eu nisl eu consectetur. Morbi urna massa, imperdiet in
      mauris et, euismod vestibulum lacus. Integer enim elit, tincidunt aliquam
      ligula id, lacinia auctor orci. Sed quis lobortis eros. Fusce id commodo
      libero.
    </Text>
    <Text>
      At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
      praesentium voluptatum deleniti atque corrupti quos dolores et quas. Nulla
      rhoncus consectetur eros non iaculis.
    </Text>
  </Container>
);
