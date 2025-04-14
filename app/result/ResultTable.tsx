"use client";

import { useEffect, useRef, useState } from "react";
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
import ArrowTopRightIcon from "@/components/icons/ArrowTopRightIcon";

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
  const [ctaNum, setCtaNum] = useState(0);

  const [sessionId, setSessionId] = useState<string>();
  const [paperName, setPaperName] = useState<string>();
  const [results, setResults] = useState<
    { company: string; reagent: string; catalog: string }[]
  >([]);

  useEffect(() => {
    const storedSessionId = localStorage.getItem("sessionId");
    const storedPaperName = localStorage.getItem("paperName");
    const storedResults = localStorage.getItem("searchResults");

    if (
      storedSessionId !== null &&
      storedPaperName !== null &&
      storedResults !== null
    ) {
      try {
        setSessionId(JSON.parse(storedSessionId));
        setPaperName(JSON.parse(storedPaperName));
        setResults(JSON.parse(storedResults));
      } catch (error) {
        console.error("JSON 파싱 중 오류 발생:", error);
      }
    }
  }, [isLoggedIn, router]);

  useEffect(() => {
    if (tableRef.current) {
      const height = tableRef.current.clientHeight - 68;
      setTableHeight(height);
      setCtaNum(Math.floor(height / 400)); // 80px 단위로 반복한다고 가정
    }
  }, [tableRef.current]);

  return (
    <div className="flex flex-col w-full z-20 text-center gap-[20px] md:gap-[40px] ">
      <div className="flex flex-col w-full justify-center items-center gap-[40px]">
        <p className="text-lg md:text-2xl lg:text-3xl">
          {paperName}에서 사용된 시약 및 기구
        </p>
        {isLoggedIn && (
          <button
            onClick={() => handleDownload(sessionId)}
            className="flex bg-orange-400 rounded-xl sm:rounded-2xl shadow-2xl py-[12px] px-[64px]"
          >
            <p className="text-base md:text-lg lg:text-xl font-extrabold text-center text-white">
              검색결과 다운로드
            </p>
          </button>
        )}
      </div>
      <div className="relative w-full h-auto text-center">
        {/* login 유도 blur */}
        {!isLoggedIn && (
          <div
            className="absolute flex w-[calc((100%-48px)/3)] right-0 bottom-0 h-[calc(100%-68px)]"
            style={{ minHeight: tableHeight }}
          >
            {/* blur 처리용 배경 */}
            <div className="absolute z-50 w-full h-full backdrop-blur-sm bg-white/30" />

            {/* 버튼 콘텐츠 */}
            <Link href={"/login"}>
              <button
                className="absolute flex flex-col z-60 w-full h-full justify-between items-center text-center py-40"
                onClick={handlePath}
              >
                {Array.from({ length: ctaNum }).map((_, index) => (
                  <div
                    key={index}
                    className="flex flex-col z-70 w-full h-auto justify-center items-center text-center gap-[20px]"
                  >
                    <p>
                      3초 만에 회원가입하고
                      <br />
                      <span className="font-bold">결과 확인하기</span>
                    </p>
                    <ArrowRightIcon />
                  </div>
                ))}
              </button>
            </Link>
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
                      {columnKey === "walla"
                        ? isLoggedIn && (
                            <Link
                              href={"https://walla.my/v/ja2h7cK5qXFaI6nJjFn2"}
                              target="_blank"
                            >
                              <button className="hidden sm:block text-blue underline">
                                check LOWEST PRICE
                              </button>
                              <button className="block sm:hidden text-blue underline">
                                <ArrowTopRightIcon />
                              </button>
                            </Link>
                          )
                        : getKeyValue(item, columnKey)}
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
