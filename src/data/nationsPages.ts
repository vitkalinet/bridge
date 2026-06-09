import nationsPagesData from "./nationsPages.json";

export interface NationPageData {
  header: {
    region: string;
    title: string;
    native: string;
    epigraph: string;
    stats: {
      population: string;
      language: string;
      belief: string;
    };
  };
  legend: {
    title: string;
    content: string;
  };
  geography: {
    title: string;
    items: Array<{ label: string; value: string }>;
  };
  population: {
    title: string;
    table: Array<{ year: string; value: string }>;
    comment: string;
  };
  language: {
    title: string;
    items: Array<{ label: string; value: string }>;
  };
  traditions: {
    title: string;
    items: Array<{ name: string; description: string }>;
  };
  clothing: {
    title: string;
    male: {
      title: string;
      description: string;
    };
    female: {
      title: string;
      description: string;
    };
  };
  dwelling: {
    title: string;
    items: Array<{ title: string; description: string }>;
  };
  beliefs: {
    title: string;
    content: string;
  };
  sources: {
    title: string;
    items: Array<{ text: string; url: string }>;
  };
  navigation: {
    prev: { link: string; title: string };
    next: { link: string; title: string };
  };
}

export const nationsPages = nationsPagesData as Record<string, NationPageData>;

export const getNationPageData = (id: string): NationPageData | undefined => {
  return nationsPages[id];
};
