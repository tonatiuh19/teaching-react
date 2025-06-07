import React from "react"; // Import React library

// --- Pagination Component ---
// Define the props interface for the Pagination component
interface PaginationProps {
  currentPage: number; // The current active page number
  totalPages: number; // The total number of pages
  totalCount: number; // The total number of items
  onPageChange: (page: number) => void; // Callback when the page changes
}

// Define and export the Pagination component
export default function Pagination({
  currentPage, // Destructure currentPage from props
  totalPages, // Destructure totalPages from props
  totalCount, // Destructure totalCount from props
  onPageChange, // Destructure onPageChange from props
}: PaginationProps) {
  // Helper function to generate an array of page numbers
  const getPageNumbers = () => {
    const pages = []; // Initialize an empty array for page numbers
    for (let i = 1; i <= totalPages; i++) {
      // Loop from 1 to totalPages
      pages.push(i); // Add each page number to the array
    }
    return pages; // Return the array of page numbers
  };

  // Render the pagination navigation
  return (
    <nav
      style={{
        display: "flex", // Use flexbox for layout
        gap: 8, // Gap between elements
        alignItems: "center", // Vertically center items
        margin: 16, // Margin around the nav
      }}
    >
      {/* Previous page button */}
      <button
        onClick={() => onPageChange(currentPage - 1)} // Go to previous page
        disabled={currentPage === 1} // Disable if on first page
        style={{
          padding: "4px 10px", // Padding inside button
          background: "#444", // Background color
          color: "#fff", // Text color
          border: "none", // No border
          borderRadius: 4, // Rounded corners
          opacity: currentPage === 1 ? 0.5 : 1, // Dim if disabled
          cursor: currentPage === 1 ? "not-allowed" : "pointer", // Cursor style
        }}
      >
        Prev {/* Button label */}
      </button>
      {/* Render a button for each page number */}
      {getPageNumbers().map((page) => (
        <button
          key={page} // Unique key for each button
          style={{
            padding: "4px 10px", // Padding inside button
            margin: "0 2px", // Margin between buttons
            fontWeight: page === currentPage ? "bold" : "normal", // Bold if current page
            background: page === currentPage ? "#fff" : "#222", // Background color
            color: page === currentPage ? "#222" : "#fff", // Text color
            border: "1px solid #555", // Border style
            borderRadius: 4, // Rounded corners
            cursor: "pointer", // Cursor style
            outline: page === currentPage ? "2px solid #00f" : "none", // Outline if current page
          }}
          onClick={() => onPageChange(page)} // Change to selected page
        >
          {page} {/* Display page number */}
        </button>
      ))}
      {/* Next page button */}
      <button
        onClick={() => onPageChange(currentPage + 1)} // Go to next page
        disabled={currentPage === totalPages} // Disable if on last page
        style={{
          padding: "4px 10px", // Padding inside button
          background: "#444", // Background color
          color: "#fff", // Text color
          border: "none", // No border
          borderRadius: 4, // Rounded corners
          opacity: currentPage === totalPages ? 0.5 : 1, // Dim if disabled
          cursor: currentPage === totalPages ? "not-allowed" : "pointer", // Cursor style
        }}
      >
        Next {/* Button label */}
      </button>
      {/* Display current page, total pages, and total item count */}
      <span
        style={{
          marginLeft: 12, // Space to the left
          color: "#fff", // Text color
        }}
      >
        Page {currentPage} of {totalPages} ({totalCount} items)
      </span>
    </nav>
  );
}
