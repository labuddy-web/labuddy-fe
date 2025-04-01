"use client";

import DownloadIcon from "@/components/icons/DownloadIcon";
import { columns, rows, title } from "./resultData";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@heroui/table";

const ResultTable = () => {
  return (
    <div className="flex flex-col w-full z-20 text-center gap-[20px] md:gap-[40px]">
      <div className="flex flex-row w-full justify-center items-center gap-[20px]">
        <p className="text-lg md:text-2xl lg:text-3xl">
          &quot;{title}&quot;에 대한 검색 결과
        </p>
        <p className="cursor-pointer">
          <DownloadIcon />
        </p>
      </div>
      <div className="w-full h-auto text-center">
        <Table
          aria-label="Example table with dynamic content"
          className="w-full h-auto p-[24px] bg-white rounded-xl drop-shadow-xl"
        >
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn
                key={column.key}
                className="text-sm md:text-base text-center px-0.5 pt-[8px] pb-[24px] border-b-2 border-b-gray-200"
              >
                {column.label}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={rows}>
            {(item) => (
              <TableRow key={item.key} className="h-[60px]">
                {(columnKey) => (
                  <TableCell className=" w-auto text-xs md:text-sm text-center px-0.5">
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

export default ResultTable;
