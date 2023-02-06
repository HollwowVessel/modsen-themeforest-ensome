import YouTube from 'react-youtube';
import { youtubeOptions } from '@/api/youtubeApi';
import { GreyFill } from '@/components/PricingCard/styled';
import { YoutubeContainer } from './styled';
import { YoutubeProps } from './types';

export const Youtube = ({ handleVideo }: YoutubeProps) => (
  <YoutubeContainer onClick={handleVideo}>
    <GreyFill />
    <YouTube
      videoId={process.env.REACT_APP_VIDEO_ID as string}
      opts={youtubeOptions}
      loading="eager"
      className="youtube"
    />
  </YoutubeContainer>
);
