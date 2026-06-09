import nationsData from "../../info.json";

export interface Nation {
  id: string;
  name: string;
  selfName: string;
  shortLegend: string;
  epigraph: string;
  legend: string;
  geography: {
    regions: string[];
    settlements: string[];
    settlementType: string;
  };
  population: {
    2010: number;
    2020: number;
    comment: string;
  };
  language: {
    family: string;
    script: string;
    unescoStatus: string;
    speakers: number | string;
    supportMeasures: string;
    currentLanguage: string;
  };
  traditions: {
    uniqueInvention: string;
    economy: string;
    crafts: string;
    specialTechnologies: string;
  };
  clothing: {
    male: string;
    female: string;
  };
  dwelling: {
    winter: string;
    summer: string;
    uniqueFeatures: string;
    interior: string;
  };
  beliefs: string;
}

export const nations = nationsData.nations as Nation[];

export const getNationById = (id: string): Nation | undefined => {
  return nations.find((nation) => nation.id === id);
};
