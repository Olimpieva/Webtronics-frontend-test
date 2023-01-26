import React, { useMemo } from 'react';
import Link from 'next/link';

import Logo from 'components/Logo';
import { Link as LinkDataType } from 'entities/link';

import css from './Header.module.scss';

const linkItems: LinkDataType[] = [
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
    to: '#faq'
  },
  {
    title: 'Get in touch',
    to: '#connect'
  }
];

const Header = () => {
  const links = useMemo(
    () =>
      linkItems.map((link) => (
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
