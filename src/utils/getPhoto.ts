import { photoMap } from 'constants/testimonialCards';

export const getPhoto = (photo: string) => photoMap.get(photo);
