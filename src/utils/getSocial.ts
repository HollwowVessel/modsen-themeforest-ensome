import { socialMap } from '../constants/footer';

export const getSocial = (social: string) => socialMap.get(social);
