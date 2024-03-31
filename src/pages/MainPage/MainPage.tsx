import Container from '@shared/ui/Container';
import MainAbout from './sections/MainAbout';
import MainBanner from './sections/MainBanner';
import MainOffers from './sections/MainOffers';
import styles from './styles.module.scss';

function MainPage() {
  return (
    <main className={styles['main-page']}>
      <MainBanner />
      <Container>
        <MainOffers />
      </Container>
      <Container>
        <MainAbout />
      </Container>
    </main>
  );
}

export default MainPage;
