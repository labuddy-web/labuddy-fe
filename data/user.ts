interface Row {
  key: string;
  name: string;
  email: string;
  source_path: string;
}

interface Column {
  key: keyof Row;
  label: string;
}

export interface User {
  name: string;
  email: string;
  source_path: string;
}

export const columns: Column[] = [
  {
    key: "name",
    label: "NAME",
  },
  {
    key: "email",
    label: "EMAIL",
  },
  {
    key: "source_path",
    label: "PATH",
  },
];
