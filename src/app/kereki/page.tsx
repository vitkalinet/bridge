"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
import { getNationPageData } from "@/data/nationsPages";
import styles from "./KerekiPage.module.scss";

export default function KerekiPage() {
  const contentRef = useRef<HTMLDivElement>(null);
  const data = getNationPageData("kereki");

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

  if (!data) return null;

  return (
    <>
      <Navigation />
      <main className={styles.page}>
        <div className={styles.container}>
          <div className={styles.header}>
            <span className={styles.region}>{data.header.region}</span>
            <h1 className={styles.title}>{data.header.title}</h1>
            <p className={styles.native}>{data.header.native}</p>
            <p className={styles.epigraph}>{data.header.epigraph}</p>
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Численность (2020)</span>
                <span className={styles.statValue}>
                  {data.header.stats.population}
                </span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Язык</span>
                <span className={styles.statValue}>
                  {data.header.stats.language}
                </span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statLabel}>Верования</span>
                <span className={styles.statValue}>
                  {data.header.stats.belief}
                </span>
              </div>
            </div>
          </div>

          <div ref={contentRef} className={styles.content}>
            <div className={`${styles.contentBlock} ${styles.legend}`}>
              <h2>{data.legend.title}</h2>
              <p>{data.legend.content}</p>
            </div>

            <div className={`${styles.contentBlock} ${styles.geography}`}>
              <h2>{data.geography.title}</h2>
              <ul>
                {data.geography.items.map((item, index) => (
                  <li key={index}>
                    <strong>{item.label}:</strong> {item.value}
                  </li>
                ))}
              </ul>
              <GallerySection nationId="kereki" section="geog" />
            </div>

            <div className={`${styles.contentBlock} ${styles.population}`}>
              <h2>{data.population.title}</h2>
              <div className={styles.populationTable}>
                <table>
                  <thead>
                    <tr>
                      <th>Год</th>
                      <th>Численность</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.population.table.map((row, index) => (
                      <tr key={index}>
                        <td>{row.year}</td>
                        <td>{row.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className={styles.populationComment}>
                {data.population.comment}
              </p>
            </div>

            <div className={`${styles.contentBlock} ${styles.language}`}>
              <h2>{data.language.title}</h2>
              <ul>
                {data.language.items.map((item, index) => (
                  <li key={index}>
                    <strong>{item.label}:</strong> {item.value}
                  </li>
                ))}
              </ul>
              <GallerySection nationId="kereki" section="lang" />
            </div>

            <div className={`${styles.contentBlock} ${styles.traditions}`}>
              <h2>{data.traditions.title}</h2>
              {data.traditions.items.map((item, index) => (
                <div key={index} className={styles.traditionItem}>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
              <GallerySection nationId="kereki" section="trad" />
            </div>

            <div className={`${styles.contentBlock} ${styles.clothing}`}>
              <h2>{data.clothing.title}</h2>
              <div className={styles.clothingItem}>
                <h3>{data.clothing.male.title}</h3>
                <p>{data.clothing.male.description}</p>
                <GallerySection nationId="kereki" section="clothM" />
              </div>
              <div className={styles.clothingItem}>
                <h3>{data.clothing.female.title}</h3>
                <p>{data.clothing.female.description}</p>
                <GallerySection nationId="kereki" section="clothF" />
              </div>
            </div>

            <div className={`${styles.contentBlock} ${styles.dwelling}`}>
              <h2>{data.dwelling.title}</h2>
              {data.dwelling.items.map((item, index) => (
                <div key={index} className={styles.dwellingItem}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
              <GallerySection nationId="kereki" section="dwell" />
            </div>

            <div className={`${styles.contentBlock} ${styles.beliefs}`}>
              <h2>{data.beliefs.title}</h2>
              <p>{data.beliefs.content}</p>
              <GallerySection nationId="kereki" section="belief" />
            </div>

            <div className={`${styles.contentBlock} ${styles.media}`}>
              <div className={styles.imageContainer}>
                <img
                  src="/images/kereki/photo.svg"
                  alt={`Кереки — народ Чукотки`}
                  className={styles.mediaImage}
                />
              </div>
            </div>

            <div className={`${styles.contentBlock} ${styles.sources}`}>
              <h2>{data.sources.title}</h2>
              <ul>
                {data.sources.items.map((source, index) => (
                  <li key={index}>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {source.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`${styles.contentBlock} ${styles.navigation}`}>
              <div className={styles.navButtons}>
                <Link href="/" className={styles.navHomeBtn}>
                  ← На главную
                </Link>
                <div className={styles.navArrows}>
                  <Link
                    href={data.navigation.prev.link}
                    className={styles.navArrow}
                    title={data.navigation.prev.title}
                  >
                    ←
                  </Link>
                  <Link
                    href={data.navigation.next.link}
                    className={styles.navArrow}
                    title={data.navigation.next.title}
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
