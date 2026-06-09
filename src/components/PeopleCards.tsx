"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import Link from "next/link";
import { getAllNations } from "@/data/nationsPages";
import styles from "./PeopleCards.module.scss";

interface Person {
  id: string;
  region: string;
  name: string;
  native: string;
  tagline: string;
  population: string;
  language: string;
  belief: string;
  photo: string;
  description: string;
  facts: string[];
  beliefs: string;
  atlasUrl: string;
  link: string;
}

const peoples: Person[] = getAllNations().map((nation) => ({
  id: nation.id,
  region: nation.region.split(",")[0], // Берём только первый регион
  name: nation.name,
  native: nation.nativeName,
  tagline: nation.epigraph,
  population: nation.population,
  language: "См. страницу народа",
  belief: "См. страницу народа",
  photo: `/images/${nation.id}/photo.svg`,
  description: nation.epigraph,
  facts: [],
  beliefs: "",
  atlasUrl: "",
  link: `/${nation.id}`,
}));

export default function PeopleCards() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Анимация появления карточек с эффектом каскада
    anime({
      targets: `.${styles.card}`,
      opacity: [0, 1],
      translateY: [80, 0],
      scale: [0.9, 1],
      delay: anime.stagger(200, { start: 300 }),
      duration: 1200,
      easing: "easeOutExpo",
    });

    // Анимация баннеров с эффектом "волны"
    anime({
      targets: `.${styles.cardBanner}`,
      translateY: [20, 0],
      opacity: [0, 1],
      delay: anime.stagger(150, { start: 500 }),
      duration: 1000,
      easing: "easeOutQuad",
    });

    // Параллакс-эффект при движении мыши
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll(`.${styles.card}`);
      const mouseX = e.clientX / window.innerWidth - 0.5;
      const mouseY = e.clientY / window.innerHeight - 0.5;

      cards.forEach((card, index) => {
        const factor = (index % 2 === 0 ? 1 : -1) * 8;
        anime({
          targets: card,
          translateX: mouseX * factor,
          translateY: mouseY * factor,
          duration: 800,
          easing: "easeOutQuad",
        });
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section id="peoples" className={styles.section}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionTag}>
          Цифровой информационно-просветительский ресурс
        </span>
        <h2 className={styles.sectionTitle}>Пять голосов Земли</h2>
        <p className={styles.sectionDesc}>
          Нажмите на карточку — перейдите на страницу народа
        </p>
      </div>

      <div ref={cardsRef} className={styles.cardsGrid}>
        {peoples.map((person) => (
          <Link key={person.id} href={person.link} className={styles.card}>
            <div className={styles.cardBanner}>
              <div className={styles.cardImagePlaceholder}>
                <span>{person.name[0]}</span>
              </div>
              <div className={styles.cardBannerOverlay}></div>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.cardRegion}>{person.region}</div>
              <div className={styles.cardName}>{person.name}</div>
              <div className={styles.cardNative}>{person.native}</div>
              <div className={styles.cardTagline}>{person.tagline}</div>
              <div className={styles.cardMeta}>
                <span className={styles.badge}>{person.population}</span>
                <span className={styles.badge}>{person.language}</span>
                <span className={styles.badge}>{person.belief}</span>
              </div>
              <div className={styles.cardCta}>
                Узнать больше <span className={styles.cardCtaArrow}>→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
