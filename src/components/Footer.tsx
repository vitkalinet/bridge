"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import styles from "./Footer.module.scss";

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    anime({
      targets: footerRef.current,
      opacity: [0, 1],
      translateY: [20, 0],
      delay: 1500,
      duration: 800,
      easing: "easeOutExpo",
    });
  }, []);

  return (
    <footer ref={footerRef} className={styles.footer}>
      <div className={styles.footerLogo}>
        <div className={styles.footerLogoMark}>᳁</div>
        <div className={styles.footerLogoText}>КУЛЬТУРНЫЙ МОСТ</div>
      </div>
      <p className={styles.footerTagline}>
        Цифровой ресурс о традициях и языках малых народов России
      </p>
      <div className={styles.footerLinks}>
        <a href="#contact" className={styles.footerLink}>
          Связаться с нами
        </a>
        <a
          href="https://sof0306.github.io/project/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Исходный проект
        </a>
        <a
          href="https://atlaskmns.ru"
          target="_blank"
          rel="noopener noreferrer"
        >
          Атлас КМНС
        </a>
        <a
          href="https://rosstat.gov.ru/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Данные переписи из Росстата
        </a>
      </div>
      <div className={styles.footerCopy}>
        © 2026 Культурный мост. Создано с уважением к культурному наследию.
      </div>
    </footer>
  );
}
