import Container from '@shared/ui/Container';
import MainAbout from './section/MainAbout';
import MainBanner from './section/MainBanner';
import MainOffers from './section/MainOffers';
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
