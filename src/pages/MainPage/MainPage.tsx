import Button from '@shared/ui/Button';
import styles from './styles.module.scss';
import OfferCard from '../../entities/offerCard';
import { offersMock } from './mock.ts';
import { IOffer } from '@shared/types.ts';

function MainPage() {
  return (
    <main className={styles['main-page']}>
      <div className="container">
        <section
          className={`
            ${styles['main-page__offers']}
            ${styles['main-page__section']}
          `}
        >
          <h2 className={styles['main-page__section-title']}>Offers</h2>

          <div className={styles['offers-grid']}>
            {offersMock.map(({ id, title, description, link, img }: IOffer) => (
              <OfferCard
                key={id}
                id={id}
                title={title}
                description={description}
                link={link}
                img={img}
                className={styles['offers-grid__item']}
              />
            ))}
          </div>
        </section>

        <section
          className={`
            ${styles['main-page__about']}
            ${styles['main-page__section']} 
         `}
        >
          <h2 className={styles['main-page__section-title']}>
            Embark on a space journey
          </h2>

          <p className={styles['main-page__about-text']}>
            Travelling into space is one of the most exciting and unforgettable
            adventures that can change your life forever. And if you have ever
            dreamed of exploring stars, planets and galaxies, then our company
            is ready to help you realize this dream. We offer a unique
            experience that will allow you to go on a space journey and see all
            the secrets of the universe. We guarantee that every moment in space
            will be filled with incredible impressions, excitement and new
            discoveries. Our team of professionals takes care of your safety and
            comfort so that you can fully enjoy your adventure in space. We
            offer various options for space excursions.
          </p>

          <Button
            href="#"
            type="text"
            className={styles['main-page__about-link']}
          >
            Read more
          </Button>
        </section>
      </div>
    </main>
  );
}

export default MainPage;
