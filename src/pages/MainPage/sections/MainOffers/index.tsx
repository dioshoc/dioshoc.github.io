import { offersMock } from './mock.ts';
import { IOffer } from '@shared/types.ts';
import OfferCard from '@entities/offerCard';
import styles from './styles.module.scss';

const MainOffers = () => (
  <section className={styles['main-offers']}>
    <h2 className={styles['main-offers__title']}>Embark on a space journey</h2>
    <div className={styles['main-offers__grid']}>
      {offersMock.map(({ id, title, description, link, img }: IOffer) => (
        <OfferCard
          key={id}
          id={id}
          title={title}
          description={description}
          link={link}
          img={img}
          className={styles['main-offers__item']}
        />
      ))}
    </div>
  </section>
);

export default MainOffers;
