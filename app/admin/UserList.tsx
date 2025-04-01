"use client";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@heroui/table";
import { columns, rows } from "./usersData";

const UserList = () => {
  return (
    <div className="flex flex-col w-full z-20 text-center gap-[20px] md:gap-[40px]">
      <div className="relative w-full h-auto text-center">
        {/* Table */}
        <Table
          aria-label="Example table with dynamic content"
          className="relative w-full h-auto pt-[8px] px-[24px] pb-[24px] bg-white rounded-xl drop-shadow-xl"
        >
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn
                key={column.key}
                className="text-sm md:text-base text-center px-0.5 h-[60px] border-b-2 border-b-gray-200"
              >
                {column.label}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={rows}>
            {(item) => (
              <TableRow key={item.key} className="h-[60px]">
                {(columnKey) => (
                  <TableCell className="w-auto text-xs md:text-sm text-center px-0.5">
                    {getKeyValue(item, columnKey)}
                  </TableCell>
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default UserList;
