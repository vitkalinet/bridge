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

export interface NationCardData {
  id: string;
  name: string;
  nativeName: string;
  region: string;
  population: string;
  epigraph: string;
  gradient: string;
}

export const nationsPages = nationsPagesData as Record<string, NationPageData>;

export const getNationPageData = (id: string): NationPageData | undefined => {
  return nationsPages[id];
};

export const getAllNations = (): NationCardData[] => {
  return Object.entries(nationsPagesData).map(([id, data]) => ({
    id,
    name: data.header.title,
    nativeName: data.header.native,
    region: data.header.region,
    population: data.header.stats.population,
    epigraph: data.header.epigraph,
    gradient: getGradientForNation(id),
  }));
};

const getGradientForNation = (id: string): string => {
  const gradients: Record<string, string> = {
    kereki: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    chamalaly: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    vod: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    tazy: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    oroki: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
  };
  return gradients[id] || "linear-gradient(135deg, #667eea 0%, #764ba2 100%)";
};
