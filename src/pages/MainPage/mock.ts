import space1Img from '@assets/images/space3.jpg';
import space2Img from '@assets/images/space5.jpg';
import space3Img from '@assets/images/space2.jpg';
import space4Img from '@assets/images/space4.jpg';
import { IOffer } from '@shared/types.ts';

export const offersMock: IOffer[] = [
  {
    id: 1,
    title: 'Move the borders of reality!',
    description: "Go on a space adventure - it's possible with us!",
    link: '#',
    img: space1Img,
  },
  {
    id: 2,
    title: 'Space is not just stars and planets',
    description: 'Go on a space adventure ',
    link: '#',
    img: space2Img,
  },
  {
    id: 3,
    title: 'For those who dream of stars',
    description: 'Our offer: make your dream come true',
    link: '#',
    img: space3Img,
  },
  {
    id: 4,
    title: 'Fulfill your fantastic dreams',
    description: 'Space has never been so close',
    link: '#',
    img: space4Img,
  },
];
