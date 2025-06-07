import React from "react"; // Import React library

// --- Pagination Component ---
// Define the props interface for the Pagination component
interface PaginationProps {
  currentPage: number; // The current active page number
  totalPages: number; // The total number of pages
  totalCount: number; // The total number of items
  onPageChange: (page: number) => void; // Callback when the page changes
  siblingCount?: number; // Optional number of sibling pages to show around the current page
}

// Define and export the Pagination component
export default function Pagination({
  currentPage, // Destructure currentPage from props
  totalPages, // Destructure totalPages from props
  totalCount, // Destructure totalCount from props
  onPageChange, // Destructure onPageChange from props
}: //siblingCount = 1, // Optional prop for sibling count, default is 1
PaginationProps) {
  // Helper function to generate an array of page numbers
  const getPageNumbers = () => {
    const pages = []; // Initialize an empty array for page numbers
    for (let i = 1; i <= totalPages; i++) {
      // Loop from 1 to totalPages
      pages.push(i); // Add each page number to the array
    }
    return pages; // Return the array of page numbers
  };

  // Alternative implementation with sibling count (commented out)
  /*const getPageNumbers = () => {
    const pages = []; // Initialize an empty array to hold page numbers and ellipsis.
    const startPage = Math.max(1, currentPage - siblingCount); // Calculate the first page number to display, ensuring it doesn't go below 1.
    const endPage = Math.min(totalPages, currentPage + siblingCount); // Calculate the last page number to display, ensuring it doesn't exceed totalPages.

    // Loop from startPage to endPage, adding each page number to the pages array.
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    // If the startPage is greater than 1, we may need to add the first page and an ellipsis.
    if (startPage > 1) {
      // If there's a gap of more than one page between 1 and startPage, add an ellipsis.
      if (startPage > 2) pages.unshift("...");

      // Always add the first page at the beginning.
      pages.unshift(1);
    }

    // If the endPage is less than the last page, we may need to add an ellipsis and the last page.
    if (endPage < totalPages) {
      // If there's a gap of more than one page between endPage and totalPages, add an ellipsis.
      if (endPage < totalPages - 1) pages.push("...");

      // Always add the last page at the end.
      pages.push(totalPages);
    }

    // Return the final array of page numbers and ellipsis.
    return pages;
};*/

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
          onClick={() => {
            //return onPageChange(Number(page)); // Call onPageChange with the selected page
            return onPageChange(page);
          }} // Change to selected page
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
