"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import styles from "./ChamalalyPage.module.scss";

export default function ChamalalyPage() {
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
            <span className={styles.region}>Дагестан, Чечня</span>
            <h1 className={styles.title}>Чамалалы</h1>
            <p className={styles.native}>Чамалал — «горные люди»</p>
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Численность (2021)</span>
                <span className={styles.statValue}>452 чел.</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Язык</span>
                <span className={styles.statValue}>
                  Аваро-андо-цезская группа
                </span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Верования</span>
                <span className={styles.statValue}>
                  Ислам + доисламские культы
                </span>
              </div>
            </div>
          </div>

          <div ref={contentRef} className={styles.content}>
            <div className={`${styles.contentBlock} ${styles.intro}`}>
              <h2>О народе</h2>
              <p>
                Чамалалы — малочисленный народ Кавказа, живущий в высокогорных
                сёлах Цумадинского района Дагестана и Шаройского района Чечни,
                на высотах 1500–2500 метров над уровнем моря. Их предки населяли
                эти горы более тысячи лет.
              </p>
            </div>

            <div className={`${styles.contentBlock} ${styles.feature}`}>
              <h2>Каменное зодчество</h2>
              <p>
                Чамалалы славились своим каменным зодчеством. Они строили{" "}
                <strong>трёхэтажные каменные дома</strong> более 1000 лет назад
                — настоящие башенные поселения, которые сохранились до наших
                дней. Террасное земледелие в суровых горных условиях стало их
                уникальным достижением.
              </p>
            </div>

            <div className={`${styles.contentBlock} ${styles.media}`}>
              <div className={styles.imageContainer}>
                <img
                  src="/images/chamalaly/photo.svg"
                  alt="Чамалалы — горные люди Кавказа"
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
                  <strong>«Горные джинны»</strong> — так называли чамалалов их
                  соседи из-за их мастерства и независимого характера
                </li>
                <li>
                  <strong>Трёхэтажные каменные дома</strong> с плоской земляной
                  крышей — визитная карточка чамалальской архитектуры
                </li>
                <li>
                  <strong>Террасное земледелие</strong> позволило освоить
                  скудные горные почвы и обеспечить пропитание в суровых
                  условиях
                </li>
                <li>
                  <strong>Серебряная женская застёжка «казы»</strong> — символ
                  статуса и красоты
                </li>
              </ul>
            </div>

            <div className={`${styles.contentBlock} ${styles.beliefs}`}>
              <h2>Верования и духовная культура</h2>
              <p>
                Ислам пришёл к чамалалам в XVIII веке, но переплелся с
                доисламскими культами гор, источников и камней-менгиров. Перед
                походом в горы нужно было трижды сказать «Бисмилла» — иначе
                джинн мог сбить с тропы. Вера в то, что джинны живут в
                расщелинах скал, сохранилась до наших дней.
              </p>
            </div>

            <div className={`${styles.contentBlock} ${styles.culture}`}>
              <h2>Материальная культура</h2>
              <p>
                Мужская одежда: черкеска, бешмет, бурка, папаха. Женская одежда
                отличалась серебряной застёжкой «казы» — украшением, которое
                передавалось по наследству и считалось семейной ценностью.
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
                    href="/kereki"
                    className={styles.navArrow}
                    title="Кереки"
                  >
                    ←
                  </Link>
                  <Link href="/vod" className={styles.navArrow} title="Водь">
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
