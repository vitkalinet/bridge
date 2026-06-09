"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
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
            <p className={styles.epigraph}>
              Хранители Копорского чая и водских роз
            </p>
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Численность (2020)</span>
                <span className={styles.statValue}>99 чел.</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Язык</span>
                <span className={styles.statValue}>
                  Водский (на грани исчезновения)
                </span>
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
            <div className={`${styles.contentBlock} ${styles.legend}`}>
              <h2>Легенда народа</h2>
              <p>
                Водь (самоназвание — <em>vaďďa</em>, «человек земли» или «люди
                земли») — один из древнейших коренных народов Ленинградской
                области. Именно по имени этого народа получила название «Водская
                пятина» — одна из пяти административных частей Новгородской
                республики, упоминаемая в летописях с 1069 года. Легенды води
                рассказывают о духах леса и воды, которым поклонялись их предки
                задолго до прихода христианства. Сегодня этот народ стоит на
                грани исчезновения, но продолжает бороться за свою идентичность.
              </p>
            </div>

            <div className={`${styles.contentBlock} ${styles.geography}`}>
              <h2>География проживания</h2>
              <ul>
                <li>
                  <strong>Регионы:</strong> Ленинградская область
                </li>
                <li>
                  <strong>Населённые пункты:</strong> Краколье (Йыгыпэря),
                  Лужицы (Лууттса), Пиллово, Раяйоки
                </li>
                <li>
                  <strong>Тип расселения:</strong> компактное (несколько
                  деревень)
                </li>
              </ul>
              <GallerySection nationId="vod" section="geog" />
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
                      <td>64 чел.</td>
                    </tr>
                    <tr>
                      <td>2020</td>
                      <td>99 чел.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className={styles.populationComment}>
                Численность води выросла на 35 человек. Это редкий пример
                положительной демографической динамики среди
                прибалтийско-финских народов России, достигнутый благодаря росту
                национального самосознания и культурному возрождению.
              </p>
            </div>

            <div className={`${styles.contentBlock} ${styles.language}`}>
              <h2>Язык и современное положение</h2>
              <ul>
                <li>
                  <strong>Языковая семья:</strong> уральская семья,
                  прибалтийско-финская ветвь
                </li>
                <li>
                  <strong>Письменность:</strong> латиница (в научных записях)
                </li>
                <li>
                  <strong>Статус ЮНЕСКО:</strong> на грани исчезновения
                </li>
                <li>
                  <strong>Носители:</strong> 10–15 человек (все старше 75 лет)
                </li>
                <li>
                  <strong>Современный язык:</strong> русский
                </li>
                <li>
                  <strong>Меры поддержки:</strong> детский фольклорный ансамбль
                  «Линнуд» («Птички») в Усть-Луге, летние языковые школы,
                  издание грамматики (2015)
                </li>
              </ul>
              <GallerySection nationId="vod" section="lang" />
            </div>

            <div className={`${styles.contentBlock} ${styles.traditions}`}>
              <h2>Традиции и ремёсла</h2>
              <div className={styles.traditionItem}>
                <h3>Копорский чай</h3>
                <p>
                  Иван-чай — водь первой начала его промышленную заготовку. В
                  XVII–XVIII веках активно экспортировался в Европу, но
                  английские купцы добились запрета на ввоз — один из первых
                  случаев «чайной войны».
                </p>
              </div>
              <div className={styles.traditionItem}>
                <h3>Экономика</h3>
                <p>Земледелие, рыболовство, отхожие промыслы</p>
              </div>
              <div className={styles.traditionItem}>
                <h3>Ремёсла</h3>
                <p>
                  Льняное узорное ткачество с «водскими розами» (геометрические
                  орнаменты с обереговым значением)
                </p>
              </div>
              <div className={styles.traditionItem}>
                <h3>Уникальная технология</h3>
                <p>
                  Паховая печь (без трубы) — дым выходил через окно в предбанник
                </p>
              </div>
              <GallerySection nationId="vod" section="trad" />
            </div>

            <div className={`${styles.contentBlock} ${styles.clothing}`}>
              <h2>Одежда</h2>
              <div className={styles.clothingItem}>
                <h3>Мужская</h3>
                <p>
                  Длинная рубаха туникообразного кроя, штаны из небеленого
                  холста, свита из серого или чёрного сукна.
                </p>
                <GallerySection nationId="vod" section="clothM" />
              </div>
              <div className={styles.clothingItem}>
                <h3>Женская</h3>
                <p>
                  Нательная рубаха (<em>rätüsö</em>) с вышивкой, полосатая или
                  клетчатая юбка (<em>hame</em>) чаще красная, передник (
                  <em>essu</em>) из белого или цветного холста. Головной убор
                  замужней женщины — <em>särkkä</em> (высокая шапка на
                  берестяном каркасе) или <em>päähkine</em> (полотенчатый убор).
                  Девушки носили венок (<em>värkä</em>) из цветов и лент.
                  Нагрудное украшение — <em>rindaazõ</em> (массивная серебряная
                  брошь).
                </p>
                <GallerySection nationId="vod" section="clothF" />
              </div>
            </div>

            <div className={`${styles.contentBlock} ${styles.dwelling}`}>
              <h2>Жилище</h2>
              <div className={styles.dwellingItem}>
                <h3>Зимнее</h3>
                <p>
                  Бревенчатый дом (<em>perä</em>) по «финскому типу»: сени (
                  <em>esihuone</em>), горница (<em>perä</em>), кухня (
                  <em>kööki</em>).
                </p>
              </div>
              <div className={styles.dwellingItem}>
                <h3>Летнее</h3>
                <p>Дом того же типа</p>
              </div>
              <div className={styles.dwellingItem}>
                <h3>Уникальные особенности</h3>
                <p>
                  Паховая печь (без трубы), позже — русская печь с трубой.
                  Отличались особой чистотой: белые холщовые занавески,
                  домотканые половики.
                </p>
              </div>
              <div className={styles.dwellingItem}>
                <h3>Интерьер</h3>
                <p>
                  Лавки, покрытые половиками, печь, стол. Хозяйственные
                  постройки: амбар (<em>ait</em>), рига (<em>rehi</em>) для
                  сушки снопов, баня (<em>savu</em>), топившаяся «по-чёрному» до
                  середины XX века.
                </p>
              </div>
              <GallerySection nationId="vod" section="dwell" />
            </div>

            <div className={`${styles.contentBlock} ${styles.beliefs}`}>
              <h2>Верования</h2>
              <p>
                Православие (обращены в XVI веке) с сильными языческими
                пережитками. Вера в хозяина леса (<em>metsäizä</em>), воды (
                <em>veessäizä</em>), дома (<em>pereväizä</em>). Культ предков
                (поминальные трапезы на кладбищах с киселём, блинами, яйцами).
                Почитание священных камней-валунов («чудских камней») и
                родников.
              </p>
              <GallerySection nationId="vod" section="belief" />
            </div>

            <div className={`${styles.contentBlock} ${styles.media}`}>
              <div className={styles.imageContainer}>
                <img
                  src="/images/vod/photo.svg"
                  alt="Водь — древнейший народ Ленинградской области"
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
