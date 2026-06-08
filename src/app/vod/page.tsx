"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import styles from "./VodPage.module.scss";

export default function VodPage() {
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
            <span className={styles.region}>Ленинградская область</span>
            <h1 className={styles.title}>Водь</h1>
            <p className={styles.native}>Vaďďa — «человек земли»</p>
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Численность (2021)</span>
                <span className={styles.statValue}>477 чел.</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Язык</span>
                <span className={styles.statValue}>10–15 носителей</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Верования</span>
                <span className={styles.statValue}>
                  Православие + духи природы
                </span>
              </div>
            </div>
          </div>

          <div ref={contentRef} className={styles.content}>
            <div className={`${styles.contentBlock} ${styles.intro}`}>
              <h2>О народе</h2>
              <p>
                Водь — древнейший народ Ленинградской области, давший имя
                Водской пятине Новгородской республики. Их предки жили здесь ещё
                до основания Новгорода. Живут преимущественно в Ивангородском
                районе Ленинградской области.
              </p>
            </div>

            <div className={`${styles.contentBlock} ${styles.feature}`}>
              <h2>Копорский чай — торговая война</h2>
              <p>
                Водь знаменита производством <strong>«Копорского чая»</strong>{" "}
                (иван-чая), который экспортировали в Европу в XVII–XVIII веках.
                Это вызвало настоящую торговую войну с Англией, так как русский
                чай стал серьёзным конкурентом английскому импортному чаю.
              </p>
            </div>

            <div className={`${styles.contentBlock} ${styles.media}`}>
              <div className={styles.imageContainer}>
                <img
                  src="/images/vod/photo.svg"
                  alt="Водь — древнейший народ Ленинградской области"
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
                  <strong>Копорский чай</strong> — производили и экспортировали
                  в Европу, вызвав торговую войну с Англией
                </li>
                <li>
                  <strong>10–15 носителей языка</strong>, все старше 75 лет.
                  Водский язык относится к прибалтийско-финской ветви
                </li>
                <li>
                  <strong>Священные камни-валуны</strong> считались местами
                  силы, духи-хозяева леса, воды и дома занимали центральное
                  место в верованиях
                </li>
                <li>
                  <strong>Полосатая женская юбка</strong> и берестяная шапка
                  «särkkä» — элементы традиционного костюма
                </li>
              </ul>
            </div>

            <div className={`${styles.contentBlock} ${styles.beliefs}`}>
              <h2>Верования и духовная культура</h2>
              <p>
                Православие соединилось с верой в духов-хозяев леса, воды и
                дома. Священные камни-валуны считались местами силы. После
                христианизации сохранились обряды, сочетающие православные и
                языческие элементы. Брёвенчатые жилища «финского типа» с паховой
                печью без трубы — характерная черта водских поселений.
              </p>
            </div>

            <div className={`${styles.contentBlock} ${styles.culture}`}>
              <h2>Материальная культура</h2>
              <p>
                Женская одежда включала полосатую юбку, передник и берестяную
                шапку «särkkä». Мужчины носили лапти с косой решёткой. Жилища
                строились по «финскому типу» с паховой печью — без трубы, с
                дымом, выходившим через дверь или специальное отверстие.
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
                  <Link
                    href="/chamalaly"
                    className={styles.navArrow}
                    title="Чамалалы"
                  >
                    ←
                  </Link>
                  <Link href="/tazy" className={styles.navArrow} title="Тазы">
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
