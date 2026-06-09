"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
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
            <p className={styles.epigraph}>Дети тайги и Поднебесной</p>
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Численность (2020)</span>
                <span className={styles.statValue}>235 чел.</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Язык</span>
                <span className={styles.statValue}>
                  Тунгусо-маньчжурский (на грани исчезновения)
                </span>
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
            <div className={`${styles.contentBlock} ${styles.legend}`}>
              <h2>Легенда народа</h2>
              <p>
                Тазы (самоназвание — <em>таза</em>, от китайского 塔子 —
                «чистый, свежий») — один из самых молодых этносов России.
                Легенды тазов рассказывают о том, как в XIX веке на Дальнем
                Востоке встретились и смешались коренные удэгейцы и нанайцы с
                китайскими и маньчжурскими переселенцами. Китайские старатели
                вступали в браки с местными женщинами, и так родился народ,
                впитавший культуру тайги и цивилизацию Поднебесной. В советский
                период тазы подверглись репрессиям как «китайские шпионы», что
                привело к сокрытию этничности и утрате языка во многих семьях.
              </p>
            </div>

            <div className={`${styles.contentBlock} ${styles.geography}`}>
              <h2>География проживания</h2>
              <ul>
                <li>
                  <strong>Регионы:</strong> Приморский край
                </li>
                <li>
                  <strong>Населённые пункты:</strong> Михайловка, Пермское,
                  Дальнегорск
                </li>
                <li>
                  <strong>Тип расселения:</strong> оседлое
                </li>
              </ul>
              <GallerySection nationId="tazy" section="geog" />
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
                      <td>274 чел.</td>
                    </tr>
                    <tr>
                      <td>2020</td>
                      <td>235 чел.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className={styles.populationComment}>
                Численность тазов сократилась на 39 человек. Это единственный
                народ в данной пятерке, показывающий устойчивую отрицательную
                динамику. Снижение связано с ассимиляцией, оттоком молодежи в
                города и утратой языковой идентичности.
              </p>
            </div>

            <div className={`${styles.contentBlock} ${styles.language}`}>
              <h2>Язык и современное положение</h2>
              <ul>
                <li>
                  <strong>Языковая семья:</strong> тунгусо-маньчжурская группа
                  (удэгейский диалект)
                </li>
                <li>
                  <strong>Письменность:</strong> бесписьменный (при фиксации —
                  кириллица)
                </li>
                <li>
                  <strong>Статус ЮНЕСКО:</strong> на грани исчезновения
                </li>
                <li>
                  <strong>Носители:</strong> 20–30 человек (пожилые)
                </li>
                <li>
                  <strong>Современный язык:</strong> русский, китайский
                </li>
                <li>
                  <strong>Меры поддержки:</strong> единичные этнографические
                  записи
                </li>
              </ul>
              <GallerySection nationId="tazy" section="lang" />
            </div>

            <div className={`${styles.contentBlock} ${styles.traditions}`}>
              <h2>Традиции и ремёсла</h2>
              <div className={styles.traditionItem}>
                <h3>Одежда из рыбьей кожи</h3>
                <p>
                  Из кеты, сазана, сома — легкая, водонепроницаемая, дышащая.
                  Технология включала квашение, разминание и шитьё сухожильными
                  нитями. К сожалению, утеряна к концу XX века.
                </p>
              </div>
              <div className={styles.traditionItem}>
                <h3>Экономика</h3>
                <p>Охота, рыболовство, сбор женьшеня</p>
              </div>
              <div className={styles.traditionItem}>
                <h3>Ремёсла</h3>
                <p>Медицина (акупунктура, траволечение), выделка рыбьей кожи</p>
              </div>
              <div className={styles.traditionItem}>
                <h3>Уникальная технология</h3>
                <p>
                  Кан — тёплая лежанка из кирпича или камня с внутренними
                  дымоходами, занимавшая 2/3 площади комнаты. Топилась со
                  стороны кухни.
                </p>
              </div>
              <GallerySection nationId="tazy" section="trad" />
            </div>

            <div className={`${styles.contentBlock} ${styles.clothing}`}>
              <h2>Одежда</h2>
              <div className={styles.clothingItem}>
                <h3>Мужская</h3>
                <p>
                  Куртка (<em>тэжикэй</em>) длиной до колен с запахом справа
                  налево (китайское влияние), халат из рыбьей кожи на лето,
                  меховая куртка из оленьих шкур на зиму.
                </p>
                <GallerySection nationId="tazy" section="clothM" />
              </div>
              <div className={styles.clothingItem}>
                <h3>Женская</h3>
                <p>
                  Халат (<em>пальто</em>) с широкими рукавами и вышивкой по
                  подолу и вороту (растительный орнамент — цветы, листья,
                  бабочки в китайском стиле), передник (<em>эри</em>), шёлковый
                  платок или шапочка, расшитая бисером. Украшения: браслеты из
                  серебра, бусы из нефрита, серьги-подвески.
                </p>
                <GallerySection nationId="tazy" section="clothF" />
              </div>
            </div>

            <div className={`${styles.contentBlock} ${styles.dwelling}`}>
              <h2>Жилище</h2>
              <div className={styles.dwellingItem}>
                <h3>Зимнее</h3>
                <p>
                  Фанза — каркас из бревен, стены обмазаны глиной с навозом,
                  крыша двускатная, крытая берестой или тесом.
                </p>
              </div>
              <div className={styles.dwellingItem}>
                <h3>Летнее</h3>
                <p>
                  Конический чум (<em>варас</em>) из жердей, покрытый
                  берестяными полотнищами или тканью (при перекочевках по
                  тайге).
                </p>
              </div>
              <div className={styles.dwellingItem}>
                <h3>Уникальные особенности</h3>
                <p>
                  Кан (тёплая лежанка с подогревом) — занимал 2/3 комнаты, на
                  нём спали, сидели и ели.
                </p>
              </div>
              <div className={styles.dwellingItem}>
                <h3>Интерьер</h3>
                <p>Кан, низкие столики, сундуки, ниши для утвари.</p>
              </div>
              <GallerySection nationId="tazy" section="dwell" />
            </div>

            <div className={`${styles.contentBlock} ${styles.beliefs}`}>
              <h2>Верования</h2>
              <p>
                Шаманизм с сильным влиянием народного даосизма и китайских
                верований. Культ тигра (Амбы) — дух — хозяин тайги (
                <em>taiga mafa</em>), убивать тигра без крайней нужды
                запрещалось. Культ предков (подношения еды, водки, благовоний,
                сжигание «бумажных денег» на могилах). Анимизм — духи гор, рек,
                деревьев. Перед выходом в тайгу охотник «кормил» духов, бросая в
                костер мясо или жир.
              </p>
              <GallerySection nationId="tazy" section="belief" />
            </div>

            <div className={`${styles.contentBlock} ${styles.media}`}>
              <div className={styles.imageContainer}>
                <img
                  src="/images/tazy/photo.svg"
                  alt="Тазы — синкретичный народ Приморья"
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
