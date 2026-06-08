"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import styles from "./KerekiPage.module.scss";

export default function KerekiPage() {
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
            <span className={styles.region}>Чукотка</span>
            <h1 className={styles.title}>Кереки</h1>
            <p className={styles.native}>Ацэмэлыт — «люди этого берега»</p>
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Численность (2021)</span>
                <span className={styles.statValue}>106 чел.</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Язык</span>
                <span className={styles.statValue}>Керекский (спящий)</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Верования</span>
                <span className={styles.statValue}>Анимизм</span>
              </div>
            </div>
          </div>

          <div ref={contentRef} className={styles.content}>
            <div className={`${styles.contentBlock} ${styles.intro}`}>
              <h2>О народе</h2>
              <p>
                Кереки — один из самых малочисленных народов России, находящийся
                на грани исчезновения. Они жили по берегам Берингова моря — в
                зоне, где суровые ветра, вечная мерзлота и арктический океан
                диктуют каждое решение.
              </p>
            </div>

            <div className={`${styles.contentBlock} ${styles.feature}`}>
              <h2>Уникальное изобретение</h2>
              <p>
                Кереки изобрели упряжку оленей и собак <strong>«цугом»</strong>{" "}
                (паровозиком) — технологию, которую позже переняли чукчи и
                эскимосы. В этой упряжке собаки и олени бежали друг за другом в
                одной линии, что позволяло преодолевать большие расстояния по
                снегу с грузом.
              </p>
            </div>

            <div className={`${styles.contentBlock} ${styles.media}`}>
              <div className={styles.imageContainer}>
                <img
                  src="/images/kereki/photo.svg"
                  alt="Кереки — народ Чукотки"
                  className={styles.mediaImage}
                />
              </div>
            </div>

            <div className={`${styles.contentBlock} ${styles.facts}`}>
              <h2>Ключевые факты</h2>
              <ul>
                <li>
                  <strong>Упряжка «цугом»</strong> — собаки и олени бежали
                  паровозиком, что стало революционным решением для арктических
                  условий
                </li>
                <li>
                  <strong>Керекский язык</strong> считается мёртвым / «спящим».
                  Относится к чукотско-камчатской семье
                </li>
                <li>
                  <strong>Одежда:</strong> кухлянка (мужская), керкер — меховой
                  комбинезон (женский)
                </li>
                <li>
                  <strong>Жилище:</strong> полуземлянка с печью из плоских
                  камней — оптимальное решение для условий вечной мерзлоты
                </li>
              </ul>
            </div>

            <div className={`${styles.contentBlock} ${styles.beliefs}`}>
              <h2>Верования и духовная культура</h2>
              <p>
                Кереки исповедовали анимизм с ритуалами благодарности морским и
                горным духам. Вера в то, что природа имеет душу и требует
                уважения, была основой их мировоззрения. Охота на морского зверя
                сопровождалась сложными обрядами, направленными на
                умилостивление духов хозяев моря.
              </p>
            </div>

            <div className={`${styles.contentBlock} ${styles.culture}`}>
              <h2>Материальная культура</h2>
              <p>
                Охота на морского зверя (нерпу, белуху, моржа) была основой
                хозяйства. Использовали все части добытого зверя: мясо в пищу,
                шкуры для одежды и жилищ, кость для орудий труда.
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
                  <Link
                    href="/chamalaly"
                    className={styles.navArrow}
                    title="Чамалалы"
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
