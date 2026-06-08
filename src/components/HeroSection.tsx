"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import styles from "./HeroSection.module.scss";

export default function HeroSection() {
  const heroTitle = useRef<HTMLHeadingElement>(null);
  const heroSubtitle = useRef<HTMLParagraphElement>(null);
  const scrollIndicator = useRef<HTMLDivElement>(null);

  useEffect(() => {
    anime({
      targets: heroTitle.current,
      opacity: [0, 1],
      translateY: [-30, 0],
      duration: 1500,
      easing: "easeOutExpo",
    });

    anime({
      targets: heroSubtitle.current,
      opacity: [0, 1],
      translateY: [20, 0],
      delay: 600,
      duration: 1200,
      easing: "easeOutExpo",
    });

    anime({
      targets: scrollIndicator.current,
      opacity: [0.5, 1, 0.5],
      translateY: [0, 10, 0],
      loop: true,
      duration: 2000,
      easing: "easeInOutSine",
    });
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 ref={heroTitle} className={styles.heroTitle}>
          Культурный мост
        </h1>
        <p ref={heroSubtitle} className={styles.heroSubtitle}>
          Традиции и языки малых народов России
        </p>
        <p className={styles.heroDescription}>
          Кереки • Чамалалы • Водь • Тазы • Ороки
        </p>
        <p className={styles.heroQuote}>
          «Каждый народ — отдельный мир со своим голосом»
        </p>
      </div>
      <div ref={scrollIndicator} className={styles.scrollIndicator}>
        <div className={styles.scrollArrow}>↓</div>
        <span className={styles.scrollText}>Листайте вниз</span>
      </div>
    </section>
  );
}
