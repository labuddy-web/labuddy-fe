export interface Paper {
  paper_name: string;
  session_id: string;
  results: PaperInfo[];
}

export interface PaperInfo {
  company: string;
  reagent: string;
  catalog: string;
}

interface Column {
  key: keyof PaperInfo;
  label: string;
}

export const columns: Column[] = [
  {
    key: "company",
    label: "COMPANY",
  },
  {
    key: "reagent",
    label: "REAGENT",
  },
  {
    key: "catalog",
    label: "CATALOG",
  },
];
