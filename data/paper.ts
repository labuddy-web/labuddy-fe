export interface Paper {
  paper_name: string;
  session_id: string;
  results: { company: string; reagent: string; catalog: string }[];
}

interface Row {
  company: string;
  reagent: string;
  catalog: string;
}

interface Column {
  key: keyof Row;
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
