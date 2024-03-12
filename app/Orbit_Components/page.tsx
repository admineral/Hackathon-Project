import Head from 'next/head';
import OrbitAnimation from '../../components/Blackhole/Orbit_Component';
import StarsCanvas from '../../components/Star/StarBackground';
import styles from './Page.module.css'; // Import your CSS module here

export default function Page() {
  return (
    <div className={styles.fullScreenCenter}>
      <Head>
        <title>Orbit Animation</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <StarsCanvas /> {/* This will now be the primary background */}
      <OrbitAnimation />
    </div>
  );
}