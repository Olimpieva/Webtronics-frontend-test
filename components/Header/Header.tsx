import React, { useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// import Logo from 'images/icons/logo.svg';

import css from './Header.module.scss';
import Logo from 'components/Logo';

type LinkDataType = {
  title: string;
  to: string;
};

const linksData: LinkDataType[] = [
  {
    title: 'About',
    to: '#about'
  },
  {
    title: 'Programs',
    to: '#programs'
  },
  {
    title: 'Steps',
    to: '#steps'
  },
  {
    title: 'Questions',
    to: '#questions'
  },
  {
    title: 'Get in touch',
    to: '#connect'
  }
];

const Header = () => {
  const links = useMemo(
    () =>
      linksData.map((link) => (
        <li key={link.title} className={css.link}>
          <Link href={link.to}>{link.title}</Link>
        </li>
      )),
    []
  );

  return (
    <header className={css.header}>
      <Logo />

      <ul className={css.linkList}>{links}</ul>
    </header>
  );
};

export default Header;
