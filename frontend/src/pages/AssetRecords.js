import React from "react";
import SearchBar from "../components/AssetRecordsSeachBar"; // Assuming you have a search bar for assets
import TableWithPagination from "../components/TableWithPagination";

const AssetsPage = () => {
  // Mock data (replace with actual fetch logic)
  const assetData = [
    {
      deviceInfo: {
        deviceNo: "12345",
        brand: "BrandA",
        model: "ModelX"
      },
      userInfo: {
        userId: "user01",
        account: "userAccount",
        nickname: "UserNickname"
      },
      wallet: "Wallet1",
      currency: "USD",
      amount: 1000,
      amountUSD: 1000,
      updateTime: "2024-09-15T12:00:00Z"
    },
    {
      deviceInfo: {
        deviceNo: "67890",
        brand: "BrandB",
        model: "ModelY"
      },
      userInfo: {
        userId: "user02",
        account: "userAccount2",
        nickname: "UserNickname2"
      },
      wallet: "Wallet2",
      currency: "EUR",
      amount: 2000,
      amountUSD: 2200, // Example conversion rate
      updateTime: "2024-09-15T13:00:00Z"
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
        <SearchBar /> {/* Replace with the appropriate search bar if available */}
      </div>
      <div>
        <TableWithPagination tableType="asset" data={assetData} />
      </div>
    </div>
  );
};

export default AssetsPage;
