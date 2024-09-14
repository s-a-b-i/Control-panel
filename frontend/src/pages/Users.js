import React from "react";
import SearchBar from "../components/UserSearchBar";
import TableWithPagination from "../components/TableWithPagination";

const UsersPage = () => {
  // Mock data (replace with actual fetch logic)
  const userData = [
    {
      id: 10000475,
      nickname: "qw",
      account: "sssre",
      parentId: 10000472,
      parentNickname: "test",
      communication: "Other Equ",
      onlineStatus: "Offline",
    },
    {
      id: 10000475,
      nickname: "qw",
      account: "sssre",
      parentId: 10000472,
      parentNickname: "test",
      communication: "Other Equ",
      onlineStatus: "Offline",
    },
    {
      id: 10000475,
      nickname: "qw",
      account: "sssre",
      parentId: 10000472,
      parentNickname: "test",
      communication: "Other Equ",
      onlineStatus: "Offline",
    },
    {
      id: 10000475,
      nickname: "qw",
      account: "sssre",
      parentId: 10000472,
      parentNickname: "test",
      communication: "Other Equ",
      onlineStatus: "Offline",
    },
    {
      id: 10000475,
      nickname: "qw",
      account: "sssre",
      parentId: 10000472,
      parentNickname: "test",
      communication: "Other Equ",
      onlineStatus: "Offline",
    },
    {
      id: 10000475,
      nickname: "qw",
      account: "sssre",
      parentId: 10000472,
      parentNickname: "test",
      communication: "Other Equ",
      onlineStatus: "Offline",
    },
    {
      id: 10000475,
      nickname: "qw",
      account: "sssre",
      parentId: 10000472,
      parentNickname: "test",
      communication: "Other Equ",
      onlineStatus: "Offline",
    },
    {
      id: 10000475,
      nickname: "qw",
      account: "sssre",
      parentId: 10000472,
      parentNickname: "test",
      communication: "Other Equ",
      onlineStatus: "Offline",
    },
    {
      id: 10000475,
      nickname: "qw",
      account: "sssre",
      parentId: 10000472,
      parentNickname: "test",
      communication: "Other Equ",
      onlineStatus: "Offline",
    },
    
    // ... (repeat this object 16 more times to match your original data)
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
        <TableWithPagination tableType="user" data={userData} />
      </div>
    </div>
  );
};

export default UsersPage;