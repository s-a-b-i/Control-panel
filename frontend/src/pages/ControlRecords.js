import React from "react";
import SearchBar from "../components/ControlRecordsSearchbar";
import TableWithPagination from "../components/TableWithPagination";

const ControlRecordsPage = () => {
  // Mock data for control records
  const controlRecordsData = [
    {
      deviceInfo: {
        deviceNo: "86ad6662bfddc985",
        brand: "Xiaomi",
        model: "M2004J19C",
      },
      userInfo: {
        userId: "10000475",
        account: "sssre",
        nickname: "qw",
      },
      projectionRecords: 1523,
      lastControlTime: "2024-09-15 00:49:37",
    },
    {
      deviceInfo: {
        deviceNo: "86ad6662bfddc985",
        brand: "Xiaomi",
        model: "M2004J19C",
      },
      userInfo: {
        userId: "10000475",
        account: "sssre",
        nickname: "qw",
      },
      projectionRecords: 1523,
      lastControlTime: "2024-09-15 00:49:37",
    },
    {
      deviceInfo: {
        deviceNo: "86ad6662bfddc985",
        brand: "Xiaomi",
        model: "M2004J19C",
      },
      userInfo: {
        userId: "10000475",
        account: "sssre",
        nickname: "qw",
      },
      projectionRecords: 1523,
      lastControlTime: "2024-09-15 00:49:37",
    },
    {
      deviceInfo: {
        deviceNo: "86ad6662bfddc985",
        brand: "Xiaomi",
        model: "M2004J19C",
      },
      userInfo: {
        userId: "10000475",
        account: "sssre",
        nickname: "qw",
      },
      projectionRecords: 1523,
      lastControlTime: "2024-09-15 00:49:37",
    },
    {
      deviceInfo: {
        deviceNo: "86ad6662bfddc985",
        brand: "Xiaomi",
        model: "M2004J19C",
      },
      userInfo: {
        userId: "10000475",
        account: "sssre",
        nickname: "qw",
      },
      projectionRecords: 1523,
      lastControlTime: "2024-09-15 00:49:37",
    },
    {
      deviceInfo: {
        deviceNo: "86ad6662bfddc985",
        brand: "Xiaomi",
        model: "M2004J19C",
      },
      userInfo: {
        userId: "10000475",
        account: "sssre",
        nickname: "qw",
      },
      projectionRecords: 1523,
      lastControlTime: "2024-09-15 00:49:37",
    },
    {
      deviceInfo: {
        deviceNo: "86ad6662bfddc985",
        brand: "Xiaomi",
        model: "M2004J19C",
      },
      userInfo: {
        userId: "10000475",
        account: "sssre",
        nickname: "qw",
      },
      projectionRecords: 1523,
      lastControlTime: "2024-09-15 00:49:37",
    },
    {
      deviceInfo: {
        deviceNo: "86ad6662bfddc985",
        brand: "Xiaomi",
        model: "M2004J19C",
      },
      userInfo: {
        userId: "10000475",
        account: "sssre",
        nickname: "qw",
      },
      projectionRecords: 1523,
      lastControlTime: "2024-09-15 00:49:37",
    },
    {
      deviceInfo: {
        deviceNo: "86ad6662bfddc985",
        brand: "Xiaomi",
        model: "M2004J19C",
      },
      userInfo: {
        userId: "10000475",
        account: "sssre",
        nickname: "qw",
      },
      projectionRecords: 1523,
      lastControlTime: "2024-09-15 00:49:37",
    },
    {
      deviceInfo: {
        deviceNo: "86ad6662bfddc985",
        brand: "Xiaomi",
        model: "M2004J19C",
      },
      userInfo: {
        userId: "10000475",
        account: "sssre",
        nickname: "qw",
      },
      projectionRecords: 1523,
      lastControlTime: "2024-09-15 00:49:37",
    },
    {
      deviceInfo: {
        deviceNo: "86ad6662bfddc985",
        brand: "Xiaomi",
        model: "M2004J19C",
      },
      userInfo: {
        userId: "10000475",
        account: "sssre",
        nickname: "qw",
      },
      projectionRecords: 1523,
      lastControlTime: "2024-09-15 00:49:37",
    },
    {
      deviceInfo: {
        deviceNo: "86ad6662bfddc985",
        brand: "Xiaomi",
        model: "M2004J19C",
      },
      userInfo: {
        userId: "10000475",
        account: "sssre",
        nickname: "qw",
      },
      projectionRecords: 1523,
      lastControlTime: "2024-09-15 00:49:37",
    },
    {
      deviceInfo: {
        deviceNo: "86ad6662bfddc985",
        brand: "Xiaomi",
        model: "M2004J19C",
      },
      userInfo: {
        userId: "10000475",
        account: "sssre",
        nickname: "qw",
      },
      projectionRecords: 1523,
      lastControlTime: "2024-09-15 00:49:37",
    },
    {
      deviceInfo: {
        deviceNo: "86ad6662bfddc985",
        brand: "Xiaomi",
        model: "M2004J19C",
      },
      userInfo: {
        userId: "10000475",
        account: "sssre",
        nickname: "qw",
      },
      projectionRecords: 1523,
      lastControlTime: "2024-09-15 00:49:37",
    },
    {
      deviceInfo: {
        deviceNo: "86ad6662bfddc985",
        brand: "Xiaomi",
        model: "M2004J19C",
      },
      userInfo: {
        userId: "10000475",
        account: "sssre",
        nickname: "qw",
      },
      projectionRecords: 1523,
      lastControlTime: "2024-09-15 00:49:37",
    },
    {
      deviceInfo: {
        deviceNo: "86ad6662bfddc985",
        brand: "Xiaomi",
        model: "M2004J19C",
      },
      userInfo: {
        userId: "10000475",
        account: "sssre",
        nickname: "qw",
      },
      projectionRecords: 1523,
      lastControlTime: "2024-09-15 00:49:37",
    },
    {
      deviceInfo: {
        deviceNo: "86ad6662bfddc985",
        brand: "Xiaomi",
        model: "M2004J19C",
      },
      userInfo: {
        userId: "10000475",
        account: "sssre",
        nickname: "qw",
      },
      projectionRecords: 1523,
      lastControlTime: "2024-09-15 00:49:37",
    },
    {
      deviceInfo: {
        deviceNo: "86ad6662bfddc985",
        brand: "Xiaomi",
        model: "M2004J19C",
      },
      userInfo: {
        userId: "10000475",
        account: "sssre",
        nickname: "qw",
      },
      projectionRecords: 1523,
      lastControlTime: "2024-09-15 00:49:37",
    },
    {
      deviceInfo: {
        deviceNo: "86ad6662bfddc985",
        brand: "Xiaomi",
        model: "M2004J19C",
      },
      userInfo: {
        userId: "10000475",
        account: "sssre",
        nickname: "qw",
      },
      projectionRecords: 1523,
      lastControlTime: "2024-09-15 00:49:37",
    },
    
    
    // ... (repeat this object or add more objects as needed)
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
        <TableWithPagination tableType="controlRecord" data={controlRecordsData} />
      </div>
    </div>
  );
};

export default ControlRecordsPage;