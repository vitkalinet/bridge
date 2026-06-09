"use client";

import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import anime from "animejs";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
import { getNationPageData } from "@/data/nationsPages";
import styles from "./NationPage.module.scss";

export default function NationPageClient() {
  const params = useParams();
  const contentRef = useRef<HTMLDivElement>(null);
  const nationId = params.nationId as string;
  const data = getNationPageData(nationId);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("legend");

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      },
    );

    document.querySelectorAll<HTMLElement>("[data-section]").forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!data) {
    return (
      <>
        <Navigation />
        <main className={styles.page}>
          <div className={styles.container}>
            <div className={styles.error}>
              <h1>Народ не найден</h1>
              <Link href="/" className={styles.homeLink}>
                ← Вернуться на главную
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const hasContent = (field: string): boolean => {
    const value = (data.clothing as any)[field];
    return value && value.description && value.description.trim() !== "";
  };

  const sections = [
    { id: "legend", label: "Предисловие" },
    { id: "geography", label: "География" },
    { id: "population", label: "Население" },
    { id: "language", label: "Язык" },
    { id: "traditions", label: "Традиции" },
    { id: "clothing", label: "Одежда" },
    { id: "dwelling", label: "Жилище" },
    { id: "beliefs", label: "Верования" },
    { id: "media", label: "Фото" },
    { id: "sources", label: "Источники" },
  ];

  return (
    <>
      <Navigation />
      <button
        className={`${styles.sidebarToggle} ${isSidebarOpen ? styles.open : ""}`}
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        aria-label="Меню разделов"
      >
        {isSidebarOpen ? "✕" : "☰"}
      </button>
      {isSidebarOpen && (
        <div
          className={styles.sidebarOverlay}
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      <aside
        className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ""}`}
      >
        <div className={styles.sidebarHeader}>
          <h3>Разделы</h3>
        </div>
        <nav className={styles.sidebarNav}>
          {sections.map((section) => (
            <button
              key={section.id}
              className={`${styles.sidebarLink} ${activeSection === section.id ? styles.active : ""}`}
              onClick={() => {
                scrollToSection(section.id);
                if (window.innerWidth <= 768) {
                  setIsSidebarOpen(false);
                }
              }}
            >
              {section.label}
            </button>
          ))}
        </nav>
      </aside>
      <main
        className={`${styles.page} ${isSidebarOpen ? styles.withSidebar : ""}`}
      >
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
            <div
              className={`${styles.contentBlock} ${styles.legend}`}
              data-section
            >
              <h2>{data.legend.title}</h2>
              <p>{data.legend.content}</p>
            </div>

            <div
              className={`${styles.contentBlock} ${styles.geography}`}
              data-section
              id="geography"
            >
              <h2>{data.geography.title}</h2>
              <ul>
                {data.geography.items.map((item, index) => (
                  <li key={index}>
                    <strong>{item.label}:</strong> {item.value}
                  </li>
                ))}
              </ul>
              <GallerySection nationId={nationId} section="geog" />
            </div>

            <div
              className={`${styles.contentBlock} ${styles.population}`}
              data-section
              id="population"
            >
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

            <div
              className={`${styles.contentBlock} ${styles.language}`}
              data-section
              id="language"
            >
              <h2>{data.language.title}</h2>
              <ul>
                {data.language.items.map((item, index) => (
                  <li key={index}>
                    <strong>{item.label}:</strong> {item.value}
                  </li>
                ))}
              </ul>
              <GallerySection nationId={nationId} section="lang" />
            </div>

            <div
              className={`${styles.contentBlock} ${styles.traditions}`}
              data-section
              id="traditions"
            >
              <h2>{data.traditions.title}</h2>
              {data.traditions.items.map((item, index) => (
                <div key={index} className={styles.traditionItem}>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
              <GallerySection nationId={nationId} section="trad" />
            </div>

            <div
              className={`${styles.contentBlock} ${styles.clothing}`}
              data-section
              id="clothing"
            >
              <h2>{data.clothing.title}</h2>
              {hasContent("male") && (
                <div className={styles.clothingItem}>
                  <h3>{data.clothing.male.title}</h3>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: data.clothing.male.description,
                    }}
                  />
                  <GallerySection nationId={nationId} section="clothM" />
                </div>
              )}
              {hasContent("female") && (
                <div className={styles.clothingItem}>
                  <h3>{data.clothing.female.title}</h3>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: data.clothing.female.description,
                    }}
                  />
                  <GallerySection nationId={nationId} section="clothF" />
                </div>
              )}
            </div>

            <div
              className={`${styles.contentBlock} ${styles.dwelling}`}
              data-section
              id="dwelling"
            >
              <h2>{data.dwelling.title}</h2>
              {data.dwelling.items.map((item, index) => (
                <div key={index} className={styles.dwellingItem}>
                  <h3>{item.title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: item.description }} />
                </div>
              ))}
              <GallerySection nationId={nationId} section="dwell" />
            </div>

            <div
              className={`${styles.contentBlock} ${styles.beliefs}`}
              data-section
              id="beliefs"
            >
              <h2>{data.beliefs.title}</h2>
              <p dangerouslySetInnerHTML={{ __html: data.beliefs.content }} />
              <GallerySection nationId={nationId} section="belief" />
            </div>

            <div
              className={`${styles.contentBlock} ${styles.media}`}
              data-section
              id="media"
            >
              <div className={styles.imageContainer}>
                <img
                  src={`/images/${nationId}/${nationId}.jpg`}
                  alt={`${data.header.title} — ${data.header.epigraph}`}
                  className={styles.mediaImage}
                />
              </div>
            </div>

            <div
              className={`${styles.contentBlock} ${styles.sources}`}
              data-section
              id="sources"
            >
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
