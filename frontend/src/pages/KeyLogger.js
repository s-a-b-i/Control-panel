import React from "react";
import SearchBar from "../components/KeyLoggerSearchBar.js";
import TableWithPagination from "../components/TableWithPagination";

const KeyloggerPage = () => {
  // Mock data for keylogger (replace with actual fetch logic)
  const keyloggerData = [
    {
      deviceNumber: "123456789",
      brand: "Samsung",
      model: "Galaxy S21",
      userId: "987654321",
      account: "user123",
      nickname: "JohnDoe",
      content: "Sample content",
      packageName: "com.example.app",
      recordingTime: "2023-09-12 10:00:00",
    },
    {
      deviceNumber: "987654321",
      brand: "Apple",
      model: "iPhone 13",
      userId: "123456789",
      account: "user456",
      nickname: "JaneDoe",
      content: "Another sample content",
      packageName: "com.example.anotherapp",
      recordingTime: "2023-09-12 12:00:00",
    },
    // ... (repeat or expand this mock data)
  ];

  // Styling for margin and spacing
  const containerStyle = {
    padding: "20px",
    margin: "0px 50px",
    maxWidth: "1200px",
  };

  const elementSpacing = {
    marginBottom: "40px",
  };

  return (
    <div style={containerStyle}>
      <div style={elementSpacing}>
        <SearchBar />
      </div>
      <div>
        <TableWithPagination tableType="keylogger" data={keyloggerData} />
      </div>
    </div>
  );
};

export default KeyloggerPage;
