import { useState } from 'react';

import { NavBar } from './components/NavBar';
import { Youtube } from './components/Youtube';
import { Container } from './styled';

export const Navigation = () => {
  const [showVideo, setVideo] = useState(false);

  const handleVideo = () => {
    setVideo((prev) => !prev);
  };

  return (
    <Container>
      <NavBar handleVideo={handleVideo} />
      {showVideo && <Youtube handleVideo={handleVideo} />}
    </Container>
  );
};
