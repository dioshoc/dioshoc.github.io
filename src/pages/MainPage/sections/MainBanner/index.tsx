import Container from '@shared/ui/Container';
import earthImg from '@assets/images/earthImg.png';
import Button from '@shared/ui/Button';
import styles from './styles.module.scss';

const MainBanner = () => (
  <section className={styles['main-banner']}>
    <Container>
      <div className={styles['main-banner__wrapper']}>
        <div className={styles['main-banner__img']}>
          <img
            src={earthImg}
            alt="Discover the vast expanses of space"
          />
        </div>
        <div className={styles['main-banner__content']}>
          <h1 className={styles['main-banner__title']}>
            Discover the vast expanses of&nbsp;
            <strong className={styles['main-banner__discharge']}>space</strong>
          </h1>
          <p className={styles['main-banner__description']}>
            Where the possibilities are&nbsp;
            <strong className={styles['main-banner__discharge']}>
              endless!
            </strong>
          </p>
          <Button
            href="#"
            className={styles['main-banner__link']}
          >
            Learn more
          </Button>
        </div>
      </div>
    </Container>
  </section>
);

export default MainBanner;
