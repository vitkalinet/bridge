'use client';

import { useEffect, useRef } from 'react';
import anime from 'animejs';
import styles from './AtlasBanner.module.scss';

export default function AtlasBanner() {
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    anime({
      targets: bannerRef.current,
      opacity: [0, 1],
      translateY: [30, 0],
      delay: 1000,
      duration: 1000,
      easing: 'easeOutExpo'
    });

    anime({
      targets: `.${styles.atlasBtn}`,
      scale: [0.95, 1],
      opacity: [0, 1],
      delay: 1300,
      duration: 600,
      easing: 'easeOutExpo'
    });
  }, []);

  return (
    <section id="atlas" className={styles.atlasSection}>
      <div className={styles.atlasInner}>
        <div ref={bannerRef} className={styles.atlasBanner}>
          <div className={styles.atlasText}>
            <h3>Атлас коренных малочисленных народов</h3>
            <p>
              Официальный ресурс АКМНС России: карты расселения, аудио, видео, тексты 
              и материалы по языкам и культурам малых народов.
            </p>
          </div>
          <a 
            className={styles.atlasBtn}
            href="https://atlaskmns.ru"
            target="_blank"
            rel="noopener noreferrer"
          >
            Открыть Атлас →
          </a>
        </div>
      </div>
    </section>
  );
}
