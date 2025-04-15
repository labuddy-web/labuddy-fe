export interface Paper {
  paper_name: string;
  session_id: string;
  results: { company: string; reagent: string; catalog: string }[];
}

interface Row {
  company: string;
  reagent: string;
  catalog: string;
  walla: string;
}

interface Column {
  key: keyof Row;
  label: string;
}

export const columns: Column[] = [
  {
    key: "company",
    label: "제조사",
  },
  {
    key: "reagent",
    label: "시약 및 기구",
  },
  {
    key: "catalog",
    label: "카탈로그 번호",
  },
  {
    key: "walla",
    label: "",
  },
];
