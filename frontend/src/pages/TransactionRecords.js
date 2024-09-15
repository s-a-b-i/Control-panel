import React from "react";
import SearchBar from "../components/TransactionRecordsSearchBar";
import TableWithPagination from "../components/TableWithPagination";

// Mock transaction data (replace with actual fetch logic)
const transactionData = [
  {
    deviceNo: "97c4a4834d3d2259",
    brand: "Xiaomi",
    model: "M2006C3LG",
    userId: "10000607",
    account: "ghj123",
    nickname: "hjh",
    wallet: "TokenPocket",
    currency: "TRX",
    transactionTime: "2024-09-09 09:57:21",
    amount: "18.89",
    unit: "TRX",
    balance: "18.89 (before)",
    paymentAddress1: ":TNWqRSRZNUNQHFQ...",
     companyResult: ":CompanyResult",
    paymentAddress2: "TGby8Y7urVgesetgdLJb...",
    internalSettlement: "Unsettled",
    settlementWith: "Unsettled",
    merchantSettlement: "Unsettled",
  },
  // Add more rows as needed
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

const TransactionHistoryPage = () => {
  return (
    <div style={containerStyle}>
      <div style={elementSpacing}>
        <SearchBar />
      </div>
      <div>
        <TableWithPagination tableType="transactionHistory" data={transactionData} />
      </div>
    </div>
  );
};

export default TransactionHistoryPage;
