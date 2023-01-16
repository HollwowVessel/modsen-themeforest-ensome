import { logoMap } from 'constants/logo';

export const getLogo = (logo: string) => logoMap.get(logo);
