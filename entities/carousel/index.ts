import { StaticImageData } from 'next/image';

export type CarouselItem = {
  title: string;
  description: string;
  image: StaticImageData;
};
