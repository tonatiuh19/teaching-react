"use client";

import Pagination from "./components/Pagination";
import styles from "./page.module.css";
import React, { useState } from "react";

const PAGE_SIZE = 10;
const mockData = Array.from({ length: 53 }, (_, i) => ({
  id: i + 1,
  name: `Item ${i + 1}`,
  value: Math.floor(Math.random() * 1000),
}));

export default function Home() {
  const [page, setPage] = useState(1);
  const totalCount = mockData.length;
  const totalPages = Math.ceil(totalCount / PAGE_SIZE);

  const start = (page - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  const pageData = mockData.slice(start, end);

  return (
    <div className={styles.page}>
      <h1>Pagination</h1>
      <table border={1} cellPadding={8} style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {pageData.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        totalCount={totalCount}
        onPageChange={setPage}
      />
    </div>
  );
}
