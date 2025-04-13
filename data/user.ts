interface Row {
  key: string;
  email: string;
  source_path: string;
}

interface Column {
  key: keyof Row;
  label: string;
}

export interface User {
  email: string;
  source_path: string;
}

export const columns: Column[] = [
  {
    key: "email",
    label: "EMAIL",
  },
  {
    key: "source_path",
    label: "PATH",
  },
];
