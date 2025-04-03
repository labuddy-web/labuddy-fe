interface Row {
  key: string;
  phone_number: string;
  email: string;
  source_path: string;
}

interface Column {
  key: keyof Row;
  label: string;
}

export interface User {
  email: string;
  phone_number: string;
  source_path: string;
}

export const columns: Column[] = [
  {
    key: "phone_number",
    label: "PHONE",
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
