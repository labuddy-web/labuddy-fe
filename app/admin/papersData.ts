interface Paper {
  key: string;
  title: string;
  rows: Row[];
  columns: Column[];
}

interface Row {
  key: string;
  company: string;
  reagent: string;
  catalog: string;
}

interface Column {
  key: keyof Row;
  label: string;
}

export const papers: Paper[] = [
  {
    key: "1",
    title: "title",
    rows: [
      {
        key: "1",
        company: "Tony Reichert",
        reagent: "CEO",
        catalog: "Active",
      },
      {
        key: "2",
        company: "Zoey Lang",
        reagent: "Technical Lead",
        catalog: "Paused",
      },
    ],
    columns: [
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
    ],
  },
  {
    key: "2",
    title: "title",
    rows: [
      {
        key: "1",
        company: "Tony Reichert",
        reagent: "CEO",
        catalog: "Active",
      },
      {
        key: "2",
        company: "Zoey Lang",
        reagent: "Technical Lead",
        catalog: "Paused",
      },
    ],
    columns: [
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
    ],
  },
];
