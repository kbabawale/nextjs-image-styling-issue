import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import HeroImg from '../assets/hero.png'

export default function Home() {
  return (
    <div className={styles.pagewrapper}>
      <section>
        <Image
          src={HeroImg}
          alt="an hero img"
        />
      </section>

      <section>
        <h1 className={styles.title}>Welcome to Next.js!</h1>
      </section>
    </div>
  );
}
