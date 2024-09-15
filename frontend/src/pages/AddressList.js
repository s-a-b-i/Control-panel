import React from "react";
import SearchBar from "../components/AddressListSearchBar";
import TableWithPagination from "../components/TableWithPagination";

const AddressListPage = () => {
  // Mock data (replace with actual fetch logic)
  const addressData = [
    {
      currency: "USD",
      addressCiphertext: "abc123",
      addressTips: "Main Address",
      addressType: "Type1",
      remark: "None",
      creationTime: "2024-09-15T10:00:00Z"
    },
    {
      currency: "EUR",
      addressCiphertext: "def456",
      addressTips: "Secondary Address",
      addressType: "Type2",
      remark: "Important",
      creationTime: "2024-09-15T11:00:00Z"
    },
    // Add more objects to match the required data size
    // Repeat above object as needed
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
        {/* Add a search bar or other components if needed */}
      </div>
      <div>
        <TableWithPagination tableType="addressList" data={addressData} />
      </div>
    </div>
  );
};

export default AddressListPage;
