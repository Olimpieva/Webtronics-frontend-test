import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// import Logo from 'images/icons/logo.svg';

import css from './Header.module.scss';
import Logo from 'components/Logo';

const Header = () => {
  console.log('Header');

  return (
    <header className={css.header}>
      <Logo />

      <ul className={css.navList}>
        <li>
          <Link href="#about" className={css.navLink}>
            About
          </Link>
        </li>
        <li>
          <Link href="#programs" className={css.navLink}>
            Programs
          </Link>
        </li>
        <li>
          <Link href="#steps" className={css.navLink}>
            Steps
          </Link>
        </li>
        <li>
          <Link href="#questions" className={css.navLink}>
            Questions
          </Link>
        </li>
        <li>
          <Link href="#getInTouch" className={css.navLink}>
            Get in touch
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
