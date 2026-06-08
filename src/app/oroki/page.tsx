"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import styles from "./OrokiPage.module.scss";

export default function OrokiPage() {
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
            <span className={styles.region}>Сахалинская область</span>
            <h1 className={styles.title}>Ороки (Ульта)</h1>
            <p className={styles.native}>Ульта — «олений народ»</p>
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Численность (2021)</span>
                <span className={styles.statValue}>2498 чел.</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Язык</span>
                <span className={styles.statValue}>
                  10–15 активных носителей
                </span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Верования</span>
                <span className={styles.statValue}>
                  Шаманизм, культ медведя
                </span>
              </div>
            </div>
          </div>

          <div ref={contentRef} className={styles.content}>
            <div className={`${styles.contentBlock} ${styles.intro}`}>
              <h2>О народе</h2>
              <p>
                Ороки (Ульта) — коренной народ Сахалина. Их самоназвание «ульта»
                означает «олений человек». Проживают преимущественно в
                Ногликском и Охинском районах Сахалинской области.
              </p>
            </div>

            <div className={`${styles.contentBlock} ${styles.feature}`}>
              <h2>Рекордсмены по самоназваниям</h2>
              <p>
                Ороки имеют <strong>более 20 самоназваний</strong> — абсолютный
                рекорд среди малых народов. Ульта, улта, орочун, орокил… Каждое
                название отражало связь с определённой территорией или родом.
                Хранители уникального медвежьего праздника «чопо» и традиции
                «звучащей» одежды.
              </p>
            </div>

            <div className={`${styles.contentBlock} ${styles.media}`}>
              <div className={styles.imageContainer}>
                <img
                  src="/images/oroki/photo.svg"
                  alt="Ороки — олений народ Сахалина"
                  className={styles.mediaImage}
                />
              </div>
            </div>

            <div className={`${styles.contentBlock} ${styles.facts}`}>
              <h2>Ключевые факты</h2>
              <ul>
                <li>
                  <strong>Более 20 самоназваний</strong> — абсолютный рекорд
                  среди малых народов России
                </li>
                <li>
                  <strong>Медвежий праздник «чопо»</strong> — центральный ритуал
                  культуры, длился 2–3 дня
                </li>
                <li>
                  <strong>Музыкальная одежда</strong> — женские халаты с
                  подвесками, кольцами, монетами звенели как оберег при ходьбе
                </li>
                <li>
                  <strong>Полуземлянка «уилта-дю»</strong> (зима) и чум «варас»
                  (лето) — традиционные жилища
                </li>
              </ul>
            </div>

            <div className={`${styles.contentBlock} ${styles.beliefs}`}>
              <h2>Верования и духовная культура</h2>
              <p>
                Шаманизм с культом медведя — священного посланника между мирами.
                Медведь считался хозяином тайги, послом верхнего мира среди
                людей. Медвежий праздник «чопо» длился 2–3 дня и включал сложные
                ритуалы проводов духа медведя обратно в горы. Культ оленя как
                священного животного также занимал важное место в верованиях
                ороков.
              </p>
            </div>

            <div className={`${styles.contentBlock} ${styles.culture}`}>
              <h2>Материальная культура</h2>
              <p>
                Женские халаты с подвесками из колец и монет звенели как музыка
                при ходьбе — это считалось оберегом от злых духов. В
                совершенстве владели искусством оленеводства, что было основой
                их хозяйства и образа жизни.
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
                  <Link href="/tazy" className={styles.navArrow} title="Тазы">
                    ←
                  </Link>
                  <Link
                    href="/kereki"
                    className={styles.navArrow}
                    title="Кереки"
                  >
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
