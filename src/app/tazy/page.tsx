"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import styles from "./TazyPage.module.scss";

export default function TazyPage() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    anime({
      targets: `.${styles.contentBlock}`,
      opacity: [0, 1],
      translateY: [30, 0],
      delay: anime.stagger(200, { start: 500 }),
      duration: 1000,
      easing: "easeOutExpo",
    });
  }, []);

  return (
    <>
      <Navigation />
      <main className={styles.page}>
        <div className={styles.container}>
          <div className={styles.header}>
            <span className={styles.region}>Приморский край</span>
            <h1 className={styles.title}>Тазы</h1>
            <p className={styles.native}>Таза — «чистый, свежий»</p>
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Численность (2021)</span>
                <span className={styles.statValue}>1106 чел.</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Язык</span>
                <span className={styles.statValue}>20–30 носителей</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Верования</span>
                <span className={styles.statValue}>
                  Шаманизм + даосизм + культ тигра
                </span>
              </div>
            </div>
          </div>

          <div ref={contentRef} className={styles.content}>
            <div className={`${styles.contentBlock} ${styles.intro}`}>
              <h2>О народе</h2>
              <p>
                Тазы — уникальный синкретичный народ Приморья, сформировавшийся
                в XIX веке в результате смешения удэгейцев, нанайцев и китайских
                переселенцев. Единственный синкретический народ России,
                сочетающий культуры трёх этносов.
              </p>
            </div>

            <div className={`${styles.contentBlock} ${styles.feature}`}>
              <h2>Медицина долгожителей</h2>
              <p>
                Тазы славились как таёжные врачеватели. Использовали{" "}
                <strong>акупунктуру, женьшень, медвежью желчь и панты</strong> —
                многие жили до 100 лет. Их медицина впитала знания удэгейского
                шаманизма, нанайских травяных практик и китайской народной
                медицины.
              </p>
            </div>

            <div className={`${styles.contentBlock} ${styles.media}`}>
              <div className={styles.imageContainer}>
                <img
                  src="/images/tazy/photo.svg"
                  alt="Тазы — синкретичный народ Приморья"
                  className={styles.mediaImage}
                />
                <span className={styles.imageSource}>
                  Изображение: авторский дизайн
                </span>
              </div>
            </div>

            <div className={`${styles.contentBlock} ${styles.facts}`}>
              <h2>Ключевые факты</h2>
              <ul>
                <li>
                  <strong>Халаты из рыбьей кожи</strong> (кета, сазан, сом) —
                  водонепроницаемые и лёгкие. Технология выделки была утеряна к
                  XX веку
                </li>
                <li>
                  <strong>Язык</strong> — удэгейский диалект с 30% китайской
                  лексики. 20–30 носителей
                </li>
                <li>
                  <strong>Культ тигра «taiga mafa»</strong> — тигр считался
                  священным животным тайги
                </li>
                <li>
                  <strong>Вышивка бабочек и цветов</strong> на одежде —
                  характерный элемент тазской культуры
                </li>
              </ul>
            </div>

            <div className={`${styles.contentBlock} ${styles.beliefs}`}>
              <h2>Верования и духовная культура</h2>
              <p>
                Шаманизм переплелся с даосизмом и культом тигра «taiga mafa».
                Вера в духов природы сочетается с буддийскими и даосскими
                элементами. Чум «варас» и китайская фанза с лежанкой «кан» —
                уникальное сочетание культурных традиций.
              </p>
            </div>

            <div className={`${styles.contentBlock} ${styles.culture}`}>
              <h2>Материальная культура</h2>
              <p>
                Одежда тазов сочетала элементы китайской и удэгейской традиций:
                халат с запахом справа налево (китайское влияние), вышивка
                бабочек и цветов. Секрет выделки рыбьей кожи передавался по
                женской линии.
              </p>
            </div>

            <div className={`${styles.contentBlock} ${styles.sources}`}>
              <h2>Источники</h2>
              <ul>
                <li>
                  <a
                    href="https://sof0306.github.io/project/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Исходный проект «Культурный мост»
                  </a>
                </li>
                <li>
                  <a
                    href="https://tochno.st/datasets/allsettlements"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Данные переписи 2021 года — tochno.st
                  </a>
                </li>
                <li>
                  <a
                    href="https://atlaskmns.ru"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Атлас коренных малочисленных народов Севера
                  </a>
                </li>
              </ul>
            </div>

            <div className={`${styles.contentBlock} ${styles.navigation}`}>
              <div className={styles.navButtons}>
                <Link href="/" className={styles.navHomeBtn}>
                  ← На главную
                </Link>
                <div className={styles.navArrows}>
                  <Link href="/vod" className={styles.navArrow} title="Водь">
                    ←
                  </Link>
                  <Link href="/oroki" className={styles.navArrow} title="Ороки">
                    →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
