"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
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
            <span className={styles.region}>Чукотский автономный округ</span>
            <h1 className={styles.title}>Кереки</h1>
            <p className={styles.native}>Ацэмэлыт — «люди этого берега»</p>
            <p className={styles.epigraph}>
              Народ-невидимка на берегу Берингова моря
            </p>
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Численность (2020)</span>
                <span className={styles.statValue}>23 чел.</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Язык</span>
                <span className={styles.statValue}>Керекский (мёртвый)</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Верования</span>
                <span className={styles.statValue}>Анимизм</span>
              </div>
            </div>
          </div>

          <div ref={contentRef} className={styles.content}>
            <div className={`${styles.contentBlock} ${styles.legend}`}>
              <h2>Легенда народа</h2>
              <p>
                Кереки — самый малочисленный народ не только на Чукотке, но и во
                всей России. Одна из самых таинственных и малоизученных северных
                народностей. Их самоназвание —<em> ацэмэлыт</em> («люди этого
                берега»). Судьба кереков трагична: войны, эпидемии и ассимиляция
                поставили их на грань полного исчезновения. В XVII веке они
                занимали обширные территории от устья реки Опуки до Анадырского
                лимана, но сегодня этот народ считается «спящим» — его язык
                ушёл, но память остаётся.
              </p>
            </div>

            <div className={`${styles.contentBlock} ${styles.geography}`}>
              <h2>География проживания</h2>
              <ul>
                <li>
                  <strong>Регионы:</strong> Чукотский автономный округ
                </li>
                <li>
                  <strong>Населённые пункты:</strong> Мейныпильгыно, Хатырка
                </li>
                <li>
                  <strong>Тип расселения:</strong> дисперсное (потомки живут
                  среди чукчей и коряков)
                </li>
              </ul>
              <GallerySection nationId="kereki" section="geog" />
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
                      <td>4 чел.</td>
                    </tr>
                    <tr>
                      <td>2020</td>
                      <td>23 чел.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className={styles.populationComment}>
                За десять лет численность кереков выросла почти в 6 раз — с 4 до
                23 человек. Это феномен «статистического воскрешения»: в 2020
                году потомки кереков, ранее причислявшие себя к чукчам, впервые
                открыто заявили о своей истинной идентичности.
              </p>
            </div>

            <div className={`${styles.contentBlock} ${styles.language}`}>
              <h2>Язык и современное положение</h2>
              <ul>
                <li>
                  <strong>Языковая семья:</strong> чукотско-камчатская семья
                </li>
                <li>
                  <strong>Письменность:</strong> бесписьменный
                </li>
                <li>
                  <strong>Статус ЮНЕСКО:</strong> мёртвый / «спящий»
                </li>
                <li>
                  <strong>Носители:</strong> 0
                </li>
                <li>
                  <strong>Современный язык:</strong> русский, чукотский
                </li>
                <li>
                  <strong>Меры поддержки:</strong> фиксация фольклора и лексики
                  учёными
                </li>
              </ul>
              <GallerySection nationId="kereki" section="lang" />
            </div>

            <div className={`${styles.contentBlock} ${styles.traditions}`}>
              <h2>Традиции и ремёсла</h2>
              <div className={styles.traditionItem}>
                <h3>Упряжка «цугом»</h3>
                <p>
                  Способ упряжки оленей и собак паровозиком (один за другим),
                  эффективный в узких прибрежных проходах и на обледенелых
                  склонах. Позже эту упряжь переняли чукчи и эскимосы.
                </p>
              </div>
              <div className={styles.traditionItem}>
                <h3>Экономика</h3>
                <p>Охота на морского зверя, рыболовство</p>
              </div>
              <div className={styles.traditionItem}>
                <h3>Ремёсла</h3>
                <p>Изготовление меховой одежды, обработка кожи</p>
              </div>
              <div className={styles.traditionItem}>
                <h3>Уникальная технология</h3>
                <p>
                  Очаг из вертикальных плоских камней (прогретые камни
                  использовали для приготовления мяса и рыбы)
                </p>
              </div>
              <GallerySection nationId="kereki" section="trad" />
            </div>

            <div className={`${styles.contentBlock} ${styles.clothing}`}>
              <h2>Одежда</h2>
              <div className={styles.clothingItem}>
                <h3>Мужская</h3>
                <p>
                  Кухлянка — куртка-рубаха глухого кроя из двух шкур оленя мехом
                  внутрь, зимой поверх надевали кухлянку мехом наружу. Рукава
                  широкие в проймах, сужающиеся к кисти. Ворот и рукава
                  оторачивали мехом собаки. Воротник-шарф и двойной меховой
                  капор из шкур лап выдры, собаки, росомахи.
                </p>
                <GallerySection nationId="kereki" section="clothM" />
              </div>
              <div className={styles.clothingItem}>
                <h3>Женская</h3>
                <p>
                  Керкер — меховой комбинезон. Летом — одинарный нательный,
                  зимой — второй аналогичный мехом наружу. Глубокий вырез от шеи
                  до груди затягивали шнурками.
                </p>
                <GallerySection nationId="kereki" section="clothF" />
              </div>
            </div>

            <div className={`${styles.contentBlock} ${styles.dwelling}`}>
              <h2>Жилище</h2>
              <div className={styles.dwellingItem}>
                <h3>Зимнее</h3>
                <p>
                  Полуземлянка — в яму глубиной 0,5 м устанавливали толстые
                  бревна, укреплённые жердями. Крыша утеплялась травой, дерном,
                  снегом.
                </p>
              </div>
              <div className={styles.dwellingItem}>
                <h3>Летнее</h3>
                <p>Небольшие шалаши из жердей вблизи мест промысла.</p>
              </div>
              <div className={styles.dwellingItem}>
                <h3>Уникальные особенности</h3>
                <p>
                  Очаг из поставленных вертикально плоских камней. Когда очаг
                  прогревался, угли вычищали, а на теплые камни помещали мясо и
                  рыбу.
                </p>
              </div>
              <div className={styles.dwellingItem}>
                <h3>Интерьер</h3>
                <p>
                  В одной землянке проживало несколько родственных семей,
                  пользовавшихся одним очагом.
                </p>
              </div>
              <GallerySection nationId="kereki" section="dwell" />
            </div>

            <div className={`${styles.contentBlock} ${styles.beliefs}`}>
              <h2>Верования</h2>
              <p>
                Анимизм, почитание морских и горных духов. Охота на морского
                зверя сопровождалась ритуалами благодарности: кости убитого
                зверя хоронили, а позвонки мужчины нанизывали на охотничий пояс.
                Чтобы задобрить душу убитого животного, на могилу помещали юколу
                (вяленую рыбу) и шикшу.
              </p>
              <GallerySection nationId="kereki" section="belief" />
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
