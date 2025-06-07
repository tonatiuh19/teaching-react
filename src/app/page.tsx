"use client"; // Enables React Server Components to use client-side features

import Pagination from "./components/Pagination"; // Import the Pagination component
import styles from "./page.module.css"; // Import CSS module for styling
import React, { useState } from "react"; // Import React and useState hook

const PAGE_SIZE = 10; // Number of items per page
const mockData = Array.from({ length: 53 }, (_, i) => ({
  id: i + 1, // Assign a unique id to each item
  name: `Item ${i + 1}`, // Assign a name to each item
  value: Math.floor(Math.random() * 1000), // Assign a random value to each item
})); // Create an array of 53 mock items

export default function Home() {
  // Define the Home component
  const [page, setPage] = useState(1); // State to track the current page, default is 1
  const totalCount = mockData.length; // Total number of items
  const totalPages = Math.ceil(totalCount / PAGE_SIZE); // Calculate total number of pages

  const start = (page - 1) * PAGE_SIZE; // Calculate the starting index for the current page
  const end = start + PAGE_SIZE; // Calculate the ending index for the current page
  const pageData = mockData.slice(start, end); // Get the data for the current page

  return (
    <div className={styles.page}>
      {" "}
      {/* Container div with styling */}
      <h1>Pagination</h1> {/* Page title */}
      <table border={1} cellPadding={8} style={{ borderCollapse: "collapse" }}>
        {" "}
        {/* Table with border and padding */}
        <thead>
          <tr>
            <th>ID</th> {/* Table header for ID */}
            <th>Name</th> {/* Table header for Name */}
            <th>Value</th> {/* Table header for Value */}
          </tr>
        </thead>
        <tbody>
          {pageData.map(
            (
              row // Loop through the current page's data
            ) => (
              <tr key={row.id}>
                {" "}
                {/* Table row with unique key */}
                <td>{row.id}</td> {/* Display item ID */}
                <td>{row.name}</td> {/* Display item Name */}
                <td>{row.value}</td> {/* Display item Value */}
              </tr>
            )
          )}
        </tbody>
      </table>
      <Pagination
        currentPage={page} // Pass current page to Pagination component
        totalPages={totalPages} // Pass total pages to Pagination component
        totalCount={totalCount} // Pass total item count to Pagination component
        onPageChange={setPage} // Pass function to change page
      />
    </div>
  );
}
