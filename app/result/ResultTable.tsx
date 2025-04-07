"use client";

import { useEffect, useRef, useState } from "react";
import DownloadIcon from "@/components/icons/DownloadIcon";
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
import { authInstance } from "@/api/axios";
import Link from "next/link";
import { columns } from "@/data/paper";
import { useIsLoggedInByCookie } from "@/api/auth";
import { useRouter } from "next/navigation";
import * as XLSX from "xlsx";

const handleDownload = async (sessionId: string | undefined) => {
  try {
    const response = await authInstance.get(
      `/analyze/result/${sessionId}/csv`,
      {
        headers: {},
        responseType: "blob",
      }
    );

    if (response.status >= 200 && response.status < 300) {
      const csvText = await response.data.text(); // blob → text
      const workbook = XLSX.read(csvText, { type: "string" });
      const xlsxArrayBuffer = XLSX.write(workbook, {
        bookType: "xlsx",
        type: "array",
      });

      const xlsxBlob = new Blob([xlsxArrayBuffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });

      const url = window.URL.createObjectURL(xlsxBlob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "result.xlsx");
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } else {
      console.error("파일 다운로드 실패:", response.statusText);
      alert("파일 다운로드에 실패하였습니다.");
    }
  } catch (error) {
    console.error("오류 발생:", error);
    alert("다운로드 중 오류가 발생했습니다.");
  }
};

const handlePath = () => {
  localStorage.setItem("path", "searching");
};

const ResultTable = () => {
  const router = useRouter();

  const isLoggedIn = useIsLoggedInByCookie();

  const tableRef = useRef<HTMLTableElement>(null);
  const [tableHeight, setTableHeight] = useState(0);

  const [sessionId, setSessionId] = useState<string>();
  const [paperName, setPaperName] = useState<string>();
  const [results, setResults] = useState<
    { company: string; reagent: string; catalog: string }[]
  >([]);

  useEffect(() => {
    // localStorage에서 결과 불러오기
    const storedSessionId = localStorage.getItem("sessionId");
    const storedPaperName = localStorage.getItem("paperName");
    const storedResults = localStorage.getItem("searchResults");
    if (storedSessionId && storedPaperName && storedResults) {
      setSessionId(JSON.parse(storedSessionId));
      setPaperName(JSON.parse(storedPaperName));
      setResults(JSON.parse(storedResults));
    }
  }, [isLoggedIn, router]);

  // const isValid = (
  //   results: { company: string; reagent: string; catalog: string }[]
  // ): boolean => {
  //   if (results.length === 0) return false; // 빈 배열이면 false

  //   const firstResult = results[0];
  //   if (firstResult.company === "I am sorry") return false;
  //   else return true;
  // };

  // const [widths, setWidths] = useState<Record<string, number>>({});

  // useEffect(() => {
  //   if (cellRef.current) {
  //     setWidth(width.append(cellRef.current.clientWidth));
  //   }
  // }, []);

  // useEffect(() => {
  //   if (tableRef.current) {
  //     const cells = tableRef.current.querySelectorAll("td");
  //     const newWidths: Record<string, number> = {};

  //     cells.forEach((cell) => {
  //       const key = cell.getAttribute("data-key"); // key 값 가져오기
  //       if (key) {
  //         newWidths[key] = cell.clientWidth; // key를 기반으로 너비 저장
  //       }
  //     });

  //     setWidths(newWidths); // 상태 업데이트
  //   }
  // }, []);

  useEffect(() => {
    if (tableRef.current) {
      setTableHeight(tableRef.current.clientHeight - 68);
    }
  }, []);

  return (
    <div className="flex flex-col w-full z-20 text-center gap-[20px] md:gap-[40px] ">
      <div className="flex flex-row w-full justify-center items-center gap-[20px]">
        <p className="text-lg md:text-2xl lg:text-3xl">
          {paperName}에 대한 검색 결과
        </p>
        {isLoggedIn && (
          <p
            className="cursor-pointer"
            onClick={() => handleDownload(sessionId)}
          >
            <DownloadIcon />
          </p>
        )}
      </div>
      <div className="relative w-full h-auto text-center">
        {/* login 유도 blur */}
        {!isLoggedIn && (
          <div
            className="absolute flex w-[calc((100%-48px)/3)] right-0 bottom-0 h-[calc(100%-64px)]"
            style={{ minHeight: tableHeight }}
          >
            <Link href={"/login"}>
              <button
                className="absolute flex flex-col z-60 w-full h-full justify-center items-center text-center gap-[20px]"
                onClick={handlePath}
              >
                <p>
                  Sign up in just 3 seconds
                  <br />
                  <span className="font-bold">Get your results instantly.</span>
                </p>
                <ArrowRightIcon />
              </button>
            </Link>
            <div className="absolute flex z-50 w-full h-full bg-white blur-sm" />
          </div>
        )}

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
            <TableBody items={results}>
              {results.map((item, index) => (
                <TableRow key={index} className="h-[60px]">
                  {(columnKey) => (
                    <TableCell className="w-auto text-xs md:text-sm text-center px-0.5">
                      {getKeyValue(item, columnKey)}
                    </TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ResultTable;
