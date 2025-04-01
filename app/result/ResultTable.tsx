"use client";

import { useEffect, useRef, useState } from "react";
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
import ArrowRightIcon from "@/components/icons/ArrowRightIcon";

const ResultTable = () => {
  const tableRef = useRef<HTMLDivElement>(null);
  const [tableHeight, setTableHeight] = useState(0);

  useEffect(() => {
    if (tableRef.current) {
      setTableHeight(tableRef.current.clientHeight - 68);
    }
  }, [rows]);
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
      <div className="relative w-full h-auto text-center">
        {/* login 유도 blur */}
        <div
          className="absolute flex w-[calc((100%-48px)/3)] right-0 bottom-0"
          style={{ minHeight: tableHeight }}
        >
          <button className="absolute flex flex-col z-60 w-full h-full justify-center items-center text-center gap-[20px]">
            <p>
              Sign up in just 3 seconds
              <br />
              <span className="font-bold">Get your results instantly.</span>
            </p>
            <ArrowRightIcon />
          </button>
          <div className="absolute flex z-50 w-full h-full bg-white blur-sm" />
        </div>

        {/* Table */}
        <div ref={tableRef}>
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
    </div>
  );
};

export default ResultTable;
