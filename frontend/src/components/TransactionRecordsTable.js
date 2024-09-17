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
import { useTranslation } from "react-i18next";

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

const getSettlementStatus = (status) => {
  return status === "settled" ? "已结算" : "未结算"; // Chinese: Settled -> 已结算, Unsettled -> 未结算
};

const TransactionHistoryTable = ({
  rows,
  page,
  rowsPerPage,
  setPage,
  totalItems,
  handleChangeRowsPerPage,
}) => {
  const { t } = useTranslation();

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
        {t('Transaction History')}
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
                <StyledTableHeadCell>{t('Device Information')}</StyledTableHeadCell>
                <StyledTableHeadCell>{t('User Information')}</StyledTableHeadCell>
                <StyledTableHeadCell>{t('Transaction Information')}</StyledTableHeadCell>
                <StyledTableHeadCell>{t('Transfer Amount')}</StyledTableHeadCell>
                <StyledTableHeadCell>{t('Payment address')}</StyledTableHeadCell>
                <StyledTableHeadCell>{t('Payment Address')}</StyledTableHeadCell>
                <StyledTableHeadCell>{t('Internal settlement status')}</StyledTableHeadCell>
                <StyledTableHeadCell>{t('Settlement with the merchant')}</StyledTableHeadCell>
                <StyledTableHeadCell
                  sx={{
                    position: "sticky",
                    right: 0,
                    backgroundColor: headerBgColor,
                    zIndex: 2,
                    boxShadow: "-4px 0px 10px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {t('operate')}
                </StyledTableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <StyledTableRow key={row.id} index={index}>
                  <StyledTableCell>
                    {t('Device No.')}: {row.deviceNo}
                    <br />
                    {t('Brand')}: {row.brand}
                    <br />
                    {t('Model')}: {row.model}
                  </StyledTableCell>
                  <StyledTableCell>
                    {t('User ID')}: {row.userId}
                    <br />
                    {t('Account')}: {row.account}
                    <br />
                    {t('Nickname')}: {row.nickname}
                  </StyledTableCell>
                  <StyledTableCell>
                    {t('Wallet')}: {row.wallet}
                    <br />
                    {t('Currency')}: {row.currency}
                    <br />
                    {row.transactionTime}
                  </StyledTableCell>
                  <StyledTableCell>
                    {t('Amount')}:{" "}
                    <span style={{ color: "green", fontWeight: "bold" }}>
                      {row.amount}
                    </span>
                    <br />
                    {t('Unit')}: {row.unit}
                    <br />
                    {t('Balance')}: {row.balance}
                  </StyledTableCell>
                  <StyledTableCell>
                      {row.paymentAddress1}
                      <br />
                      <span style={{ fontWeight: "bold" }}>
                       {t('Type')}: {t('companyResult')}
                      </span>
                      <br />
                      <span
                        style={{ fontWeight: "bold", color: "green" }}
                      >
                        {t('Manual harvesting submitted')}
                      </span>
                  </StyledTableCell>
                  <StyledTableCell>
                    {row.paymentAddress2}
                    <br />
                    {t('Network')}:
                  </StyledTableCell>
                  <StyledTableCell>
                    {getSettlementStatus(row.internalSettlement)}
                  </StyledTableCell>

                  {/* Merchant Settlement Status */}
                  <StyledTableCell>
                    {getSettlementStatus(row.merchantSettlement)}
                  </StyledTableCell>

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
                      {t('Internal Settlement')}
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