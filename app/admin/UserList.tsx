"use client";

import { useEffect, useState } from "react";
import { columns, User } from "@/data/user";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@heroui/table";

const UserList = () => {
  const [userList, setUserList] = useState<User[]>([]);

  useEffect(() => {
    // localStorage에서 검색 결과 불러오기
    const storedUserList = localStorage.getItem("userList");
    if (storedUserList) {
      try {
        const parsedData = JSON.parse(storedUserList); // JSON 파싱
        if (Array.isArray(parsedData)) {
          setUserList(parsedData); // papers 배열을 상태로 저장
        }
      } catch (error) {
        console.error("JSON 파싱 오류:", error);
      }
    }
  }, []);

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
          <TableBody items={userList}>
            {(item) => (
              <TableRow key={item.phone_number} className="h-[60px]">
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
