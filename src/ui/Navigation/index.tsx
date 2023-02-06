import { useState } from 'react';

import { Container } from './styled';

import { Youtube } from './components/Youtube';
import { NavBar } from './components/NavBar';

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
