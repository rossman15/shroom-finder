import React from 'react';
import Link from 'next/link';
import styles from './NavBar.module.scss';

export default function NavBar() {

  return (
    <nav className={styles.navbar}>
      <a href="#">
        <img className={styles.logo} src="/pink-shroom.png" />
      </a>
      <div className={styles.links}>
        <Link href="/">
          <a className='link'>Home</a>
        </Link>
        <Link href="/about">
          <a className='link'> About</a>
        </Link>
        <Link href="/contact">
          <a className='link'>Contact</a>
        </Link>
        {/* <input placeholder="Search..." /> */}
      </div>
    </nav>
  );
}
  