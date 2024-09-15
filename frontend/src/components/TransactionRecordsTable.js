import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Button,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import PaginationControls from "./PaginationControls.js";
import CustomActionButton from "./CustomActionButton.js";

const headerBgColor = "#f5f5f5";
const rowBgColorEven = "#ffffff";
const rowBgColorOdd = "#f9f9f9";
const borderColor = "#e0e0e0";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  borderBottom: `1px solid ${borderColor}`,
  borderRight: `1px solid ${borderColor}`,
  whiteSpace: "nowrap",
  padding: "6px 8px",
  color: "#666",
  fontSize: "13px",
}));

const StyledTableHeadCell = styled(StyledTableCell)({
  backgroundColor: headerBgColor,
  fontWeight: "bold",
  borderBottom: `1px solid ${borderColor}`,
  borderRight: `1px solid ${borderColor}`,
});

const StyledTableRow = styled(TableRow)(({ index }) => ({
  backgroundColor: index % 2 === 0 ? rowBgColorEven : rowBgColorOdd,
}));

const TransactionHistoryTable = ({
  rows,
  page,
  rowsPerPage,
  setPage,
  totalItems,
  handleChangeRowsPerPage,
}) => {
  return (
    <Paper
      sx={{
        padding: "16px",
        backgroundColor: "#ffffff",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          marginBottom: "16px",
          color: "#666",
          borderBottom: `1px solid ${borderColor}`,
          paddingBottom: "8px",
        }}
      >
        Transaction History
      </Typography>

      <Box sx={{ border: `1px solid ${borderColor}`, borderRadius: "4px" }}>
        <TableContainer>
          <Table
            stickyHeader
            sx={{ minWidth: 650, borderCollapse: "separate" }}
            size="small"
            aria-label="transaction history table"
          >
            <TableHead>
              <TableRow>
                <StyledTableHeadCell>Device Information</StyledTableHeadCell>
                <StyledTableHeadCell>User Information</StyledTableHeadCell>
                <StyledTableHeadCell>
                  Transaction Information
                </StyledTableHeadCell>
                <StyledTableHeadCell>Transfer Amount</StyledTableHeadCell>
                <StyledTableHeadCell>Payment address</StyledTableHeadCell>
                <StyledTableHeadCell>Payment Address</StyledTableHeadCell>
                <StyledTableHeadCell>
                  Internal settlement status
                </StyledTableHeadCell>
                <StyledTableHeadCell>
                  Settlement with the merchant
                </StyledTableHeadCell>
                <StyledTableHeadCell
                  sx={{
                    position: "sticky",
                    right: 0,
                    backgroundColor: headerBgColor,
                    zIndex: 2,
                    boxShadow: "-4px 0px 10px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  operate
                </StyledTableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <StyledTableRow key={row.id} index={index}>
                  <StyledTableCell>
                    Device No.: {row.deviceNo}
                    <br />
                    Brand: {row.brand}
                    <br />
                    Model: {row.model}
                  </StyledTableCell>
                  <StyledTableCell>
                    User ID: {row.userId}
                    <br />
                    Account: {row.account}
                    <br />
                    Nickname: {row.nickname}
                  </StyledTableCell>
                  <StyledTableCell>
                    Wallet: {row.wallet}
                    <br />
                    Currency: {row.currency}
                    <br />
                    {row.transactionTime}
                  </StyledTableCell>
                  <StyledTableCell>
                    Amount:{" "}
                    <span style={{ color: "green", fontWeight: "bold" }}>
                      {row.amount}
                    </span>
                    <br />
                    Unit: {row.unit}
                    <br />
                    Balance: {row.balance}
                  </StyledTableCell>
                  <StyledTableCell>
                      {row.paymentAddress1} {/* Full Payment Address 1 */}
                      <br />
                      <span style={{ fontWeight: "bold" }}>
                        {row.companyResult} {/* Company Result in bold */}
                      </span>
                      <br />
                      <span
                        style={{ fontWeight: "bold", color: "green" }}
                      >
                        Manual harvesting submitted{/* Green Bold Manual Harvesting */}
                      </span>
                  </StyledTableCell>
                  <StyledTableCell>
                    {row.paymentAddress2}
                    <br />
                    Network:
                  </StyledTableCell>
                  <StyledTableCell>{row.internalSettlement}</StyledTableCell>
                  <StyledTableCell>{row.merchantSettlement}</StyledTableCell>
                  <StyledTableCell
                    sx={{
                      position: "sticky",
                      right: 0,
                      background: "white",
                      zIndex: 1,
                      boxShadow: "-4px 0px 10px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <CustomActionButton size="small" color="tertiary">
                      Internal Settlement
                    </CustomActionButton>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <PaginationControls
          page={page}
          rowsPerPage={rowsPerPage}
          setPage={setPage}
          totalItems={totalItems}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Box>
    </Paper>
  );
};

export default TransactionHistoryTable;

// TransactionHistoryTable;
