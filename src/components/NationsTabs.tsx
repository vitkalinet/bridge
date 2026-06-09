"use client";

import { useState, useEffect, useRef } from "react";
import anime from "animejs";
import Link from "next/link";
import { getAllNations } from "@/data/nationsPages";
import styles from "./NationsTabs.module.scss";

interface Nation {
  id: string;
  name: string;
  nativeName: string;
  epigraph: string;
  population: string;
  region: string;
}

const nations: Nation[] = getAllNations().map((nation) => ({
  id: nation.id,
  name: nation.name,
  nativeName: nation.nativeName,
  epigraph: nation.epigraph,
  population: nation.population,
  region: nation.region.split(",")[0],
}));

export default function NationsTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const tabsRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Анимация при смене таба
    if (contentRef.current) {
      anime({
        targets: `.${styles.tabContent}`,
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 600,
        easing: "easeOutExpo",
      });
    }
  }, [activeTab]);

  return (
    <section id="nations" className={styles.section}>
      <div className={styles.sectionHeader}>
        <span className={styles.sectionTag}>
          Пять уникальных культур
        </span>
        <h2 className={styles.sectionTitle}>Народы России</h2>
        <p className={styles.sectionDesc}>
          Выберите народ, чтобы узнать больше о его традициях и истории
        </p>
      </div>

      <div ref={tabsRef} className={styles.tabsContainer}>
        <div className={styles.tabsList}>
          {nations.map((nation, index) => (
            <button
              key={nation.id}
              className={`${styles.tabBtn} ${activeTab === index ? styles.active : ""}`}
              onClick={() => setActiveTab(index)}
            >
              <span className={styles.tabIcon}>{nation.name[0]}</span>
              <span className={styles.tabName}>{nation.name}</span>
            </button>
          ))}
        </div>

        <div ref={contentRef} className={styles.tabsContent}>
          {nations.map((nation, index) => (
            <div
              key={nation.id}
              className={`${styles.tabContent} ${activeTab === index ? styles.active : ""}`}
            >
              <div className={styles.tabCard}>
                <div className={styles.tabImage}>
                  <img
                    src={`/images/${nation.id}/${nation.id}.jpg`}
                    alt={nation.name}
                  />
                  <div className={styles.tabImageOverlay}></div>
                </div>

                <div className={styles.tabBody}>
                  <div className={styles.tabRegion}>{nation.region}</div>
                  <h3 className={styles.tabNameTitle}>{nation.name}</h3>
                  <p className={styles.tabNative}>{nation.nativeName}</p>
                  <p className={styles.tabEpigraph}>{nation.epigraph}</p>

                  <div className={styles.tabStats}>
                    <div className={styles.statItem}>
                      <span className={styles.statLabel}>Численность</span>
                      <span className={styles.statValue}>{nation.population}</span>
                    </div>
                    <div className={styles.statItem}>
                      <span className={styles.statLabel}>Регион</span>
                      <span className={styles.statValue}>{nation.region}</span>
                    </div>
                  </div>

                  <div className={styles.tabFooter}>
                    <Link href={`/${nation.id}`} className={styles.tabLink}>
                      Узнать больше <span className={styles.tabLinkArrow}>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}