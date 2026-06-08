"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import Link from "next/link";
import styles from "./PeopleCards.module.scss";

interface Person {
  id: string;
  region: string;
  name: string;
  native: string;
  tagline: string;
  population: string;
  language: string;
  belief: string;
  photo: string;
  description: string;
  facts: string[];
  beliefs: string;
  atlasUrl: string;
  link: string;
}

const peoples: Person[] = [
  {
    id: "chamalaly",
    region: "Дагестан, Чечня",
    name: "Чамалалы",
    native: "Чамалал — «горные люди»",
    tagline:
      "«Горные джинны» — славятся каменным зодчеством и террасным земледелием",
    population: "452 чел. (2021)",
    language: "Аваро-андо-цезская группа",
    belief: "Ислам + доисламские культы",
    photo: "/images/chamalaly/photo.svg",
    description:
      "Малочисленный народ Кавказа, славившийся каменным зодчеством и воинским искусством. Строили трёхэтажные каменные дома более 1000 лет назад и освоили террасное земледелие в высокогорьях.",
    facts: [
      "Трёхэтажные каменные дома — постройки старше 1000 лет",
      "Террасное земледелие в суровых горных условиях",
      "Прозвище «горные джинны» получили от соседей",
      "Серебряная женская застёжка «казы» — символ статуса",
    ],
    beliefs:
      "Ислам переплелся с доисламскими культами гор, источников и камней-менгиров. Каменные башенные дома с плоской земляной крышей — визитная карточка чамалалов.",
    atlasUrl: "https://sof0306.github.io/project/",
    link: "/chamalaly",
  },
  {
    id: "vod",
    region: "Ленинградская область",
    name: "Водь",
    native: "Vaďďa — «человек земли»",
    tagline:
      "Дали имя Водской пятине. Копорский чай вызвал торговую войну с Англией",
    population: "477 чел. (2021)",
    language: "Прибалтийско-финская ветвь",
    belief: "Православие + духи-хозяева природы",
    photo: "/images/vod/photo.svg",
    description:
      "Древнейший народ Ленинградской области, давший имя Водской пятине Новгородской республики. Знамениты производством «Копорского чая» (иван-чая), который вызвал торговую войну с Англией в XVII–XVIII веках.",
    facts: [
      "Копорский чай — экспортировали в Европу, вызвав торговую войну с Англией",
      "10–15 носителей языка, все старше 75 лет",
      "Священные камни-валуны и духи-хозяева леса, воды, дома",
      "Полосатая женская юбка и берестяная шапка «särkkä»",
    ],
    beliefs:
      "Православие соединилось с верой в духов-хозяев леса, воды и дома. Священные камни-валуны считались местами силы. Брёвенчатые жилища «финского типа» с паховой печью без трубы.",
    atlasUrl: "https://sof0306.github.io/project/",
    link: "/vod",
  },
  {
    id: "kereki",
    region: "Чукотка",
    name: "Кереки",
    native: "Ацэмэлыт — «люди этого берега»",
    tagline:
      "Изобрели упряжку «цугом» — паровозиком, которую переняли чукчи и эскимосы",
    population: "106 чел. (2021)",
    language: "Чукотско-камчатская семья (спящий язык)",
    belief: "Анимизм, культ морских и горных духов",
    photo: "/images/kereki/photo.svg",
    description:
      "Один из самых малочисленных народов России на грани исчезновения. Изобрели упряжку оленей и собак «цугом» (паровозиком) — технологию позже переняли чукчи и эскимосы.",
    facts: [
      "Изобрели упряжку «цугом» — собаки и олени бежали паровозиком",
      "Керекский язык считается мёртвым / «спящим»",
      "Кухлянка (мужская) и керкер — меховой комбинезон (женский)",
      "Полуземлянка с печью из плоских камней — жилище в условиях вечной мерзлоты",
    ],
    beliefs:
      "Анимизм с ритуалами благодарности морским и горным духам. Вера в то, что природа имеет душу и требует уважения. Охота на морского зверя сопровождалась сложными обрядами.",
    atlasUrl: "https://sof0306.github.io/project/",
    link: "/kereki",
  },
  {
    id: "oroki",
    region: "Сахалинская область",
    name: "Ороки (Ульта)",
    native: "Ульта — «олений народ»",
    tagline: "Рекордсмены по самоназваниям (>20). Хранители медвежьего культа",
    population: "2498 чел. (2021)",
    language: "Тунгусо-маньчжурская группа",
    belief: "Шаманизм, культ медведя и оленя",
    photo: "/images/oroki/photo.svg",
    description:
      "«Олений народ» с самым большим числом самоназваний (>20) среди малых народов. Хранители уникального медвежьего праздника «чопо» и традиции «звучащей» одежды.",
    facts: [
      "Более 20 самоназваний — абсолютный рекорд среди малых народов",
      "Медвежий праздник «чопо» — центральный ритуал культуры",
      "Женские халаты с подвесками, кольцами, монетами — звенели как оберег",
      "Полуземлянка «уилта-дю» (зима) и чум «варас» (лето)",
    ],
    beliefs:
      "Шаманизм с культом медведя — священного посланника между мирами. Культ оленя как священного животного. Активно владеют языком всего 10–15 человек.",
    atlasUrl: "https://sof0306.github.io/project/",
    link: "/oroki",
  },
  {
    id: "tazy",
    region: "Приморский край",
    name: "Тазы",
    native: "Таза — «чистый, свежий»",
    tagline:
      "Синкретичный народ. Халаты из рыбьей кожи и медицина долгожителей",
    population: "1106 чел. (2021)",
    language: "Удэгейский диалект + 30% китайской лексики",
    belief: "Шаманизм + даосизм + культ тигра",
    photo: "/images/tazy/photo.svg",
    description:
      "Уникальный синкретичный народ Приморья, сформировавшийся в XIX веке в результате смешения удэгейцев, нанайцев и китайцев. Известны как таёжные врачеватели с методом долгожительства.",
    facts: [
      "Халаты из рыбьей кожи (кета, сазан, сом) — водонепроницаемые, технология утеряна к XX веку",
      "Медицина: акупунктура, женьшень, медвежья желчь, панты — многие жили до 100 лет",
      "20–30 носителей языка — удэгейский диалект с 30% китайской лексики",
      "Культ тигра «taiga mafa» — священное животное тайги",
    ],
    beliefs:
      "Шаманизм переплелся с даосизмом и культом тигра «taiga mafa». Чум «варас» и китайская фанза с лежанкой «кан» — уникальное сочетание культур. Вышивка бабочек и цветов на одежде.",
    atlasUrl: "https://sof0306.github.io/project/",
    link: "/tazy",
  },
];

export default function PeopleCards() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Анимация появления карточек с эффектом каскада
    anime({
      targets: `.${styles.card}`,
      opacity: [0, 1],
      translateY: [80, 0],
      scale: [0.9, 1],
      delay: anime.stagger(200, { start: 300 }),
      duration: 1200,
      easing: "easeOutExpo",
    });

    // Анимация баннеров с эффектом "волны"
    anime({
      targets: `.${styles.cardBanner}`,
      translateY: [20, 0],
      opacity: [0, 1],
      delay: anime.stagger(150, { start: 500 }),
      duration: 1000,
      easing: "easeOutQuad",
    });

    // Параллакс-эффект при движении мыши
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll(`.${styles.card}`);
      const mouseX = e.clientX / window.innerWidth - 0.5;
      const mouseY = e.clientY / window.innerHeight - 0.5;

      cards.forEach((card, index) => {
        const factor = (index % 2 === 0 ? 1 : -1) * 8;
        anime({
          targets: card,
          translateX: mouseX * factor,
          translateY: mouseY * factor,
          duration: 800,
          easing: "easeOutQuad",
        });
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section id="peoples" className={styles.section}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionTag}>
          Цифровой информационно-просветительский ресурс
        </span>
        <h2 className={styles.sectionTitle}>Пять голосов Земли</h2>
        <p className={styles.sectionDesc}>
          Нажмите на карточку — перейдите на страницу народа
        </p>
      </div>

      <div ref={cardsRef} className={styles.cardsGrid}>
        {peoples.map((person) => (
          <Link key={person.id} href={person.link} className={styles.card}>
            <div className={styles.cardBanner}>
              <div className={styles.cardImagePlaceholder}>
                <span>{person.name[0]}</span>
              </div>
              <div className={styles.cardBannerOverlay}></div>
            </div>
            <div className={styles.cardBody}>
              <div className={styles.cardRegion}>{person.region}</div>
              <div className={styles.cardName}>{person.name}</div>
              <div className={styles.cardNative}>{person.native}</div>
              <div className={styles.cardTagline}>{person.tagline}</div>
              <div className={styles.cardMeta}>
                <span className={styles.badge}>{person.population}</span>
                <span className={styles.badge}>{person.language}</span>
                <span className={styles.badge}>{person.belief}</span>
              </div>
              <div className={styles.cardCta}>
                Узнать больше <span className={styles.cardCtaArrow}>→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
