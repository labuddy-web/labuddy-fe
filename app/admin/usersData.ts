interface Row {
  key: string;
  name: string;
  phone_number: string;
  email: string;
  source_path: string;
}

interface Column {
  key: keyof Row;
  label: string;
}

export const rows: Row[] = [
  {
    key: "1",
    name: "Tony Reichert",
    phone_number: "CEO",
    email: "Active",
    source_path: "Active",
  },
  {
    key: "2",
    name: "Tony Reichert",
    phone_number: "CEO",
    email: "Active",
    source_path: "Active",
  },
  {
    key: "3",
    name: "Tony Reichert",
    phone_number: "CEO",
    email: "Active",
    source_path: "Active",
  },
  {
    key: "4",
    name: "Tony Reichert",
    phone_number: "CEO",
    email: "Active",
    source_path: "Active",
  },
  {
    key: "5",
    name: "Tony Reichert",
    phone_number: "CEO",
    email: "Active",
    source_path: "Active",
  },
];

export const columns: Column[] = [
  {
    key: "name",
    label: "NAME",
  },
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
