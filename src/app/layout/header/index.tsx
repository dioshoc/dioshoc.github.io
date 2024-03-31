import Container from '@shared/ui/container';
import Button from '@shared/ui/Button';
import LogoIcon from '@assets/svg/LogoIcon.tsx';
import styles from './styles.module.scss';
import WalletIcon from '@assets/svg/WalletIcon.tsx';
import { useState } from 'react';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleToggleMobileMenu = () => setShowMobileMenu(!showMobileMenu);

  const navigation = [
    {
      id: 1,
      content: 'Home',
      link: '#',
    },
    {
      id: 2,
      content: 'Products',
      link: '#',
    },
    {
      id: 3,
      content: <WalletIcon />,
      link: '#',
    },
  ];

  return (
    <header className={styles['header']}>
      <Container>
        <div className={styles['header__wrapper']}>
          <LogoIcon className={styles['header__logo']} />
          <div className={showMobileMenu ? styles['header__mobile_show'] : ''}>
            <Button
              type="text"
              className={styles['header__mobile-btn']}
              onClick={handleToggleMobileMenu}
            >
              <span className={styles['header__mobile-icon']}></span>
            </Button>

            <nav>
              <ol className={styles['header__nav']}>
                {navigation.map(({ id, content, link }) => (
                  <li
                    key={id}
                    className={styles['header__nav-item']}
                  >
                    <Button
                      type="gradient"
                      href={link}
                      className={styles['header__nav-btn']}
                    >
                      {content}
                    </Button>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </div>
      </Container>
      <div
        className={`
          ${styles['header__backdrop']}
          ${showMobileMenu ? styles['header__backdrop_show'] : ''}
        `}
        onClick={handleToggleMobileMenu}
      />
    </header>
  );
};

export default Header;
