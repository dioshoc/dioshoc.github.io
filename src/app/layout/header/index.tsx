import Container from '@shared/ui/Container';
import Button from '@shared/ui/Button';
import LogoIcon from '@assets/svg/LogoIcon.tsx';
import WalletIcon from '@assets/svg/WalletIcon.tsx';
import { useState } from 'react';
import cn from 'classname';
import styles from './styles.module.scss';

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
          <a href="#">
            <LogoIcon className={styles['header__logo']} />
          </a>
          <div className={cn(showMobileMenu && styles['header__mobile_show'])}>
            <Button
              type="text"
              className={styles['header__mobile-btn']}
              onClick={handleToggleMobileMenu}
            >
              <span className={styles['header__mobile-icon']}></span>
            </Button>

            <nav>
              <ul className={styles['header__nav']}>
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
              </ul>
            </nav>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
