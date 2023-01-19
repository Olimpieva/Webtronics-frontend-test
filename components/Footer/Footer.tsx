import Logo from 'components/Logo';
import React from 'react';

import FacebookIcon from 'images/social/facebook.svg';
import GitlabIcon from 'images/social/gitlab.svg';
import TwitterIcon from 'images/social/twitter.svg';
import LinkedinIcon from 'images/social/linkedin.svg';

import css from './Footer.module.scss';
import Link from 'next/link';

const Footer = () => {
  console.log('Footer');

  return (
    <footer className={css.footer}>
      <div className={css.infoContainer}>
        <Logo />
        <span className={css.address}>Wisconsin Ave, Suite 700 Chevy Chase, Maryland 20815</span>
      </div>

      <div className={css.navContainer}>
        <h4 className={css.title}>Company</h4>
        <ul className={css.navList}>
          <li className={css.navItem}>
            <Link href="#">About us</Link>
          </li>
          <li className={css.navItem}>
            <Link href="#">Steps</Link>
          </li>
          <li className={css.navItem}>
            <Link href="#">FAQs</Link>
          </li>
          <li className={css.navItem}>
            <Link href="#">Review</Link>
          </li>
          <li className={css.navItem}>
            <Link href="#">Gallery</Link>
          </li>
        </ul>
      </div>

      <div className={css.socialContainer}>
        <h4 className={css.title}>Social media</h4>
        <ul className={css.socialList}>
          <li>
            <Link href="#">
              <FacebookIcon />
            </Link>
          </li>
          <li>
            <Link href="#">
              <GitlabIcon />
            </Link>
          </li>
          <li>
            <Link href="#">
              <TwitterIcon />
            </Link>
          </li>

          <li>
            <Link href="#">
              <LinkedinIcon />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
