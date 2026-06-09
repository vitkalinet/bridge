"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
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
            <span className={styles.region}>
              Республика Дагестан, Чеченская Республика
            </span>
            <h1 className={styles.title}>Чамалалы</h1>
            <p className={styles.native}>Чамалал — «горные люди»</p>
            <p className={styles.epigraph}>Горные джинны Андийского хребта</p>
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Численность (2020)</span>
                <span className={styles.statValue}>91 чел.</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Язык</span>
                <span className={styles.statValue}>
                  Антийская подгруппа (исчезающий)
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
            <div className={`${styles.contentBlock} ${styles.legend}`}>
              <h2>Легенда народа</h2>
              <p>
                Чамалалы (самоназвание — <em>чамалал</em>, «горные люди») — один
                из малочисленных андийских народов Дагестана и Чечни. Соседние
                народы называли их «горными джиннами» из-за замкнутого образа
                жизни, суровых условий обитания в высокогорных аулах и легенд о
                необычных способностях этих горцев. Их история насчитывает более
                тысячи лет, а каменные башни до сих пор стоят на склонах
                Андийского хребта как молчаливые свидетели былого величия.
              </p>
            </div>

            <div className={`${styles.contentBlock} ${styles.geography}`}>
              <h2>География проживания</h2>
              <ul>
                <li>
                  <strong>Регионы:</strong> Республика Дагестан, Чеченская
                  Республика
                </li>
                <li>
                  <strong>Населённые пункты:</strong> Агвали, Риквани, Верхнее
                  Чамалалы, Нижнее Чамалалы, Шаройский район, Итум-Калинский
                  район
                </li>
                <li>
                  <strong>Тип расселения:</strong> компактное в высокогорных
                  аулах
                </li>
              </ul>
              <GallerySection nationId="chamalaly" section="geog" />
            </div>

            <div className={`${styles.contentBlock} ${styles.population}`}>
              <h2>Динамика численности</h2>
              <div className={styles.populationTable}>
                <table>
                  <thead>
                    <tr>
                      <th>Год</th>
                      <th>Численность</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>2010</td>
                      <td>24 чел.</td>
                    </tr>
                    <tr>
                      <td>2020</td>
                      <td>91 чел.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className={styles.populationComment}>
                За десять лет численность чамалалов выросла почти в 3,8 раза.
                Этот резкий рост связан не с демографическим взрывом, а с
                возвращением исторической памяти. Многие потомки чамалалов,
                ранее записывавшие себя аварцами, в 2020 году впервые указали
                свою истинную национальность.
              </p>
            </div>

            <div className={`${styles.contentBlock} ${styles.language}`}>
              <h2>Язык и современное положение</h2>
              <ul>
                <li>
                  <strong>Языковая семья:</strong> нахско-дагестанская семья,
                  андийская подгруппа
                </li>
                <li>
                  <strong>Письменность:</strong> бесписьменный
                </li>
                <li>
                  <strong>Статус ЮНЕСКО:</strong> исчезающий
                </li>
                <li>
                  <strong>Носители:</strong> несколько сотен (активных —
                  значительно меньше)
                </li>
                <li>
                  <strong>Современный язык:</strong> аварский, русский,
                  чеченский
                </li>
                <li>
                  <strong>Меры поддержки:</strong> язык не преподаётся в школах,
                  бытует только в устной форме
                </li>
              </ul>
              <GallerySection nationId="chamalaly" section="lang" />
            </div>

            <div className={`${styles.contentBlock} ${styles.traditions}`}>
              <h2>Традиции и ремёсла</h2>
              <div className={styles.traditionItem}>
                <h3>Трёхэтажные каменные дома</h3>
                <p>
                  Жилые дома (тысячу лет назад) — стены толщиной до метра из
                  необработанного камня на глиняном растворе, с плоской земляной
                  крышей.
                </p>
              </div>
              <div className={styles.traditionItem}>
                <h3>Экономика</h3>
                <p>
                  Террасное земледелие (ячмень, пшеница, рожь), скотоводство
                </p>
              </div>
              <div className={styles.traditionItem}>
                <h3>Ремёсла</h3>
                <p>
                  Каменное зодчество, изготовление пороха из местной серы и
                  селитры
                </p>
              </div>
              <div className={styles.traditionItem}>
                <h3>Уникальная технология</h3>
                <p>
                  Система искусственных террас на склонах гор, укреплённых
                  каменными стенами
                </p>
              </div>
              <GallerySection nationId="chamalaly" section="trad" />
            </div>

            <div className={`${styles.contentBlock} ${styles.clothing}`}>
              <h2>Одежда</h2>
              <div className={styles.clothingItem}>
                <h3>Мужская</h3>
                <p>
                  Нательная рубаха туникообразного кроя, штаны из тёмной
                  домотканой материи, черкеска из сукна тёмного цвета с
                  газырями, бешмет, бурка из войлока, папаха из каракуля.
                </p>
                <GallerySection nationId="chamalaly" section="clothM" />
              </div>
              <div className={styles.clothingItem}>
                <h3>Женская</h3>
                <p>
                  Длинное платье (красного, синего или зелёного цвета),
                  штаны-шаровары, нагрудная серебряная застёжка «казы» (семейная
                  реликвия), платок «чохто» или шёлковая чалма «чулга». Замужние
                  женщины поверх платка надевали покрывало «дуба» до пояса.
                </p>
                <GallerySection nationId="chamalaly" section="clothF" />
              </div>
            </div>

            <div className={`${styles.contentBlock} ${styles.dwelling}`}>
              <h2>Жилище</h2>
              <div className={styles.dwellingItem}>
                <h3>Зимнее</h3>
                <p>
                  Каменный дом башенного типа (2–3 этажа). Первый этаж — хлев и
                  склад сена, второй — жилые комнаты с очагом, третий — летняя
                  кухня или гостевая.
                </p>
              </div>
              <div className={styles.dwellingItem}>
                <h3>Летнее</h3>
                <p>Верхний этаж или открытые террасы</p>
              </div>
              <div className={styles.dwellingItem}>
                <h3>Уникальные особенности</h3>
                <p>
                  Стены толщиной до метра из необработанного камня. Плоская
                  земляная крыша использовалась для сушки зерна и фруктов.
                </p>
              </div>
              <div className={styles.dwellingItem}>
                <h3>Интерьер</h3>
                <p>
                  В центре главной комнаты — открытый очаг «гай» с цепью для
                  котла. Вдоль стен — ниши для посуды, деревянные лавки и нары,
                  покрытые войлоками и коврами.
                </p>
              </div>
              <GallerySection nationId="chamalaly" section="dwell" />
            </div>

            <div className={`${styles.contentBlock} ${styles.beliefs}`}>
              <h2>Верования</h2>
              <p>
                Ислам суннитского толка (шафиитский мазхаб), принят в XV–XVI
                веках. Сохраняются доисламские элементы: почитание горных
                вершин, священных источников, камней-менгиров. Духи-хозяева
                местности («дзу»), культ предков, почитание «святых мест»
                (зияратов).
              </p>
              <GallerySection nationId="chamalaly" section="belief" />
            </div>

            <div className={`${styles.contentBlock} ${styles.media}`}>
              <div className={styles.imageContainer}>
                <img
                  src="/images/chamalaly/photo.svg"
                  alt="Чамалалы — горные люди Кавказа"
                  className={styles.mediaImage}
                />
              </div>
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
                    Данные переписи 2020 года — tochno.st
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
