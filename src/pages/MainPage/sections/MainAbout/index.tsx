import { useState } from 'react';
import cn from 'classname';
import Button from '@shared/ui/Button';
import styles from './styles.module.scss';

const MainAbout = () => {
  const [showText, setShowText] = useState(false);

  return (
    <div className={styles['main-about']}>
      <h2 className={styles['main-about__title']}>Embark on a space journey</h2>
      <p
        className={cn(
          styles['main-about__text'],
          showText && styles['main-about__text_show']
        )}
      >
        Traveling into space is one of the most exciting and unforgettable
        adventures that can change your life forever. And if you have ever
        dreamed of exploring stars, planets and galaxies, then our company is
        ready to help you realize this dream. We offer a unique experience that
        will allow you to go on a space journey and see all the secrets of the
        universe. We guarantee that every moment in space will be filled with
        incredible impressions, excitement and new discoveries. Our team of
        professionals takes care of your safety and comfort so that you can
        fully enjoy your adventure in space. We offer various options for space
        excursions.
      </p>

      <Button
        type="text"
        className={styles['main-about__button']}
        onClick={() => setShowText(!showText)}
      >
        {showText ? 'Hide text' : 'Read more'}
      </Button>
    </div>
  );
};

export default MainAbout;
