import React from "react";

// --- Pagination Component ---
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalCount: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  totalCount,
  onPageChange,
}: PaginationProps) {
  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <nav style={{ display: "flex", gap: 8, alignItems: "center", margin: 16 }}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        style={{
          padding: "4px 10px",
          background: "#444",
          color: "#fff",
          border: "none",
          borderRadius: 4,
          opacity: currentPage === 1 ? 0.5 : 1,
          cursor: currentPage === 1 ? "not-allowed" : "pointer",
        }}
      >
        Prev
      </button>
      {getPageNumbers().map((page) => (
        <button
          key={page}
          style={{
            padding: "4px 10px",
            margin: "0 2px",
            fontWeight: page === currentPage ? "bold" : "normal",
            background: page === currentPage ? "#fff" : "#222",
            color: page === currentPage ? "#222" : "#fff",
            border: "1px solid #555",
            borderRadius: 4,
            cursor: "pointer",
            outline: page === currentPage ? "2px solid #00f" : "none",
          }}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        style={{
          padding: "4px 10px",
          background: "#444",
          color: "#fff",
          border: "none",
          borderRadius: 4,
          opacity: currentPage === totalPages ? 0.5 : 1,
          cursor: currentPage === totalPages ? "not-allowed" : "pointer",
        }}
      >
        Next
      </button>
      <span style={{ marginLeft: 12, color: "#fff" }}>
        Page {currentPage} of {totalPages} ({totalCount} items)
      </span>
    </nav>
  );
}
