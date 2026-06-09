"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
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
            <span className={styles.region}>
              Сахалинская область, Хабаровский край
            </span>
            <h1 className={styles.title}>Ороки (Ульта)</h1>
            <p className={styles.native}>Ульта — «олений народ»</p>
            <p className={styles.epigraph}>Люди с поющими халатами</p>
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Численность (2020)</span>
                <span className={styles.statValue}>268 чел.</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Язык</span>
                <span className={styles.statValue}>
                  Орочской (под серьёзной угрозой)
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
            <div className={`${styles.contentBlock} ${styles.legend}`}>
              <h2>Легенда народа</h2>
              <p>
                Ороки (самоназвание — <em>ульта</em>, «олений народ») — один из
                малочисленных коренных народов Сахалина и Хабаровского края.
                Легенды ороков повествуют о том, как предки-тунгусы приручили
                дикого оленя и последовали за ним на остров Сахалин, где и
                остались жить. Удивительно, но у этого народа существует более
                20 самоназваний — рекорд среди малых народов России:{" "}
                <em>улта, орочун, орок, орочен, орочэн, уильта, орокил</em> и
                другие. Это связано с дробной родовой структурой и длительной
                изоляцией групп друг от друга.
              </p>
            </div>

            <div className={`${styles.contentBlock} ${styles.geography}`}>
              <h2>География проживания</h2>
              <ul>
                <li>
                  <strong>Регионы:</strong> Сахалинская область, Хабаровский
                  край
                </li>
                <li>
                  <strong>Населённые пункты:</strong> Вал, Ноглики, Венское,
                  Усть-Ургал
                </li>
                <li>
                  <strong>Тип расселения:</strong> кочевое (оленеводство)
                </li>
              </ul>
              <GallerySection nationId="oroki" section="geog" />
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
                      <td>295 чел.</td>
                    </tr>
                    <tr>
                      <td>2020</td>
                      <td>268 чел.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className={styles.populationComment}>
                Численность ороков сократилась на 27 человек. Несмотря на меры
                государственной поддержки, народ продолжает медленно убывать.
                Основные причины — урбанизация, смешанные браки и переход на
                русский язык.
              </p>
            </div>

            <div className={`${styles.contentBlock} ${styles.language}`}>
              <h2>Язык и современное положение</h2>
              <ul>
                <li>
                  <strong>Языковая семья:</strong> тунгусо-маньчжурская группа,
                  южная ветвь
                </li>
                <li>
                  <strong>Письменность:</strong> кириллица (разработана в
                  2000-е, распространения не получила)
                </li>
                <li>
                  <strong>Статус ЮНЕСКО:</strong> под серьёзной угрозой
                </li>
                <li>
                  <strong>Носители:</strong> 10–15 человек (все старше 60 лет)
                </li>
                <li>
                  <strong>Современный язык:</strong> русский
                </li>
                <li>
                  <strong>Меры поддержки:</strong> языковые кружки в местах
                  компактного проживания, учебные пособия
                </li>
              </ul>
              <GallerySection nationId="oroki" section="lang" />
            </div>

            <div className={`${styles.contentBlock} ${styles.traditions}`}>
              <h2>Традиции и ремёсла</h2>
              <div className={styles.traditionItem}>
                <h3>«Поющие» женские халаты</h3>
                <p>
                  На одежду нашивались металлические подвески, кольца, пластины
                  из кованой меди, бубенчики, монеты. При ходьбе украшения
                  издавали мелодичный звон, отпугивавший злых духов. Каждый шаг
                  создавал уникальный «музыкальный узор».
                </p>
              </div>
              <div className={styles.traditionItem}>
                <h3>Экономика</h3>
                <p>
                  Оленеводство (вьючные и верховые олени), охота, рыболовство
                </p>
              </div>
              <div className={styles.traditionItem}>
                <h3>Ремёсла</h3>
                <p>
                  Изготовление меховой одежды, украшение бисером, резьба по
                  дереву
                </p>
              </div>
              <div className={styles.traditionItem}>
                <h3>Уникальная технология</h3>
                <p>
                  Медвежий праздник (<em>чопо</em> / <em>сёпо</em>) — сложный
                  2–3-летний ритуальный цикл с выкармливанием медвежонка,
                  жертвоприношением и ритуальной трапезой
                </p>
              </div>
              <GallerySection nationId="oroki" section="trad" />
            </div>

            <div className={`${styles.contentBlock} ${styles.clothing}`}>
              <h2>Одежда</h2>
              <div className={styles.clothingItem}>
                <h3>Мужская</h3>
                <p>
                  Нательная рубаха из ткани или ровдуги, ноговицы (штаны) из
                  оленьей шкуры, халат из оленьего меха или ткани (
                  <em>тэтэу</em>), пояс с ножом и огнивом, меховая шапка-ушанка.
                </p>
                <GallerySection nationId="oroki" section="clothM" />
              </div>
              <div className={styles.clothingItem}>
                <h3>Женская</h3>
                <p>
                  Халат с металлическими подвесками по подолу и рукавам («поющий
                  халат»), нагрудник (<em>сэлэ</em> / <em>туэ</em>), расшитый
                  бисером, пояс с колокольчиками и монетами, головной убор —
                  шапочка из оленьего лба с ушами и рогами (ритуальная). Обувь —
                  унты из оленьего камуса мехом наружу, подошва из шкуры лахтака
                  (морского зайца).
                </p>
                <GallerySection nationId="oroki" section="clothF" />
              </div>
            </div>

            <div className={`${styles.contentBlock} ${styles.dwelling}`}>
              <h2>Жилище</h2>
              <div className={styles.dwellingItem}>
                <h3>Зимнее</h3>
                <p>
                  <em>Варас</em> / <em>уилта-дю</em> — полуземлянка глубиной
                  0,5–1 м, стены из бревен или жердей, обмазанные глиной, крыша
                  двускатная из бревен с дерном и землёй. Вход через узкий
                  туннель-коридор.
                </p>
              </div>
              <div className={styles.dwellingItem}>
                <h3>Летнее</h3>
                <p>
                  Чум-варас — конический чум из жердей, покрытый оленьими
                  шкурами (зимой) или берестой (летом).
                </p>
              </div>
              <div className={styles.dwellingItem}>
                <h3>Уникальные особенности</h3>
                <p>
                  Свайные амбары («лабазы») на высоких ножках для хранения мяса
                  и рыбы.
                </p>
              </div>
              <div className={styles.dwellingItem}>
                <h3>Интерьер</h3>
                <p>
                  Очаг в центре, нары вдоль стен, место для хранения утвари.
                </p>
              </div>
              <GallerySection nationId="oroki" section="dwell" />
            </div>

            <div className={`${styles.contentBlock} ${styles.beliefs}`}>
              <h2>Верования</h2>
              <p>
                Шаманизм со сложной космологией (верхний, средний, нижний миры).
                Шаманы (<em>саман</em> / <em>кояма</em>) путешествовали между
                мирами, лечили, предсказывали. Культ медведя (священный зверь,
                превратившийся из человека или небесный посланец). Культ оленя
                (особенно белых оленей — спутников духов). Анимизм: духи-хозяева
                тайги, гор, рек, озёр. Культ предков (души предков помогают
                живым).
              </p>
              <GallerySection nationId="oroki" section="belief" />
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
