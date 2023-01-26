import Logo from 'components/Logo';
import React, { useMemo } from 'react';

import FacebookIcon from 'images/social/facebook.svg';
import GitlabIcon from 'images/social/gitlab.svg';
import TwitterIcon from 'images/social/twitter.svg';
import LinkedinIcon from 'images/social/linkedin.svg';

import css from './Footer.module.scss';
import Link from 'next/link';
import { Link as LinkDataType } from 'entities/link';

const navLinkItems: LinkDataType[] = [
  { title: 'About us', to: '#about' },
  { title: 'Steps', to: '#steps' },
  { title: 'FAQs', to: '#faq' },
  { title: 'Review', to: '#review' },
  { title: 'Gallery', to: '#gallery' }
];

const socialLinkItems: LinkDataType[] = [
  { title: 'Facebook', to: 'https://facebook.com/', image: <FacebookIcon /> },
  { title: 'Gitlab', to: 'https://gitlab.com/', image: <GitlabIcon /> },
  { title: 'Twitter', to: 'https://twitter.com/', image: <TwitterIcon /> },
  { title: 'Linkedin', to: 'https://linkedin.com/', image: <LinkedinIcon /> }
];

const Footer = () => {
  const socialLinks = useMemo(
    () =>
      socialLinkItems.map((link) => (
        <li key={link.title}>
          <a href={link.to} target="_blank" rel="noopener noreferrer">
            {link.image}
          </a>
        </li>
      )),
    []
  );

  const navLinks = useMemo(
    () =>
      navLinkItems.map((link) => (
        <li className={css.navItem} key={link.title}>
          <Link href={link.to}>{link.title}</Link>
        </li>
      )),
    []
  );

  return (
    <footer className={css.footer}>
      <div className={css.infoContainer}>
        <Logo />
        <span className={css.address}>Wisconsin Ave, Suite 700 Chevy Chase, Maryland 20815</span>
      </div>

      <div className={css.navContainer}>
        <h4 className={css.title}>Company</h4>
        <ul className={css.navList}>{navLinks}</ul>
      </div>

      <div className={css.socialContainer}>
        <h4 className={css.title}>Social media</h4>
        <ul className={css.socialList}>{socialLinks}</ul>
      </div>
    </footer>
  );
};

export default Footer;
