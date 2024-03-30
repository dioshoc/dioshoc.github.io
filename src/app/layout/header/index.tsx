import Container from '@shared/ui/container';
import Button from '@shared/ui/Button';
import LogoIcon from '@assets/svg/LogoIcon.tsx';
import styles from './styles.module.scss';
import WalletIcon from '@assets/svg/WalletIcon.tsx';
import { useState } from 'react';

const Header = () => {
  const [isShowMobileMenu, setShowMobileMenu] = useState(false);

  const handleToggleMobileMenu = () => {
    setShowMobileMenu((prevValue) => !prevValue);
  };

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
          <LogoIcon />
          <div
            className={isShowMobileMenu ? styles['header__mobile-show'] : ''}
          >
            <div>
              <div
                className={styles['header__mobile-backdrop']}
                onClick={handleToggleMobileMenu}
              />

              <Button
                type="text"
                className={styles['header__mobile-btn']}
                onClick={handleToggleMobileMenu}
              >
                <span className={styles['header__mobile-icon']}></span>
              </Button>
            </div>

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
    </header>
  );
};

export default Header;
