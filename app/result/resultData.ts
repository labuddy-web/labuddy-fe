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

export const title: string = "title";

export const rows: Row[] = [
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
  {
    key: "3",
    company: "Jane Fisher",
    reagent: "Senior Developer",
    catalog: "Active",
  },
  {
    key: "4",
    company: "William Howard",
    reagent: "Community Manager",
    catalog: "Vacation",
  },
];

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
