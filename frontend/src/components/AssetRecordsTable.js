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
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTranslation } from 'react-i18next'; // Import translation hook
import PaginationControls from "./PaginationControls.js";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  borderBottom: `1px solid #e0e0e0`,
  borderRight: `1px solid #e0e0e0`,
  padding: "6px 8px",
  color: "#333",
  fontSize: "13px",
}));

const borderColor = "#e0e0e0";

const StyledTableHeadCell = styled(StyledTableCell)({
  backgroundColor: "#f5f5f5",
  fontWeight: "bold",
});

const StyledTableRow = styled(TableRow)({
  '&:nth-of-type(odd)': {
    backgroundColor: "#fff",
  },
  '&:nth-of-type(even)': {
    backgroundColor: "#f9f9f9",
  },
});

const AssetRecordsTable = ({ rows, page, rowsPerPage, setPage, totalItems, handleChangeRowsPerPage }) => {
  const { t } = useTranslation(); // Hook for translations

  return (
    <Paper sx={{ padding: "16px", backgroundColor: "#ffffff" }}>
      <Typography variant="h6" sx={{marginBottom: "16px",
          color: "#666",
          borderBottom: `1px solid ${borderColor}`,
          paddingBottom: "8px", }}>
        {t('Asset Records')}
      </Typography>
      <Box sx={{ border: `1px solid #e0e0e0`, borderRadius: '4px' }}>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="asset records table">
            <TableHead>
              <TableRow>
                <StyledTableHeadCell>{t('Device Information')}</StyledTableHeadCell>
                <StyledTableHeadCell>{t('User Information')}</StyledTableHeadCell>
                <StyledTableHeadCell>{t('Wallet')}</StyledTableHeadCell>
                <StyledTableHeadCell>{t('Currency')}</StyledTableHeadCell>
                <StyledTableHeadCell>{t('Amount')}</StyledTableHeadCell>
                <StyledTableHeadCell>{t('Update time')}</StyledTableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell>
                    {t('Device No.')}: {row.deviceInfo.deviceNo}<br />
                    {t('Brand')}: {row.deviceInfo.brand}<br />
                    {t('Model')}: {row.deviceInfo.model}
                  </StyledTableCell>
                  <StyledTableCell>
                    {t('User ID')}: {row.userInfo.userId}<br />
                    {t('Account')}: {row.userInfo.account}<br />
                    {t('Nickname')}: {row.userInfo.nickname}
                  </StyledTableCell>
                  <StyledTableCell>{row.wallet}</StyledTableCell>
                  <StyledTableCell>{row.currency}</StyledTableCell>
                  <StyledTableCell>
                    {row.amount}<br />
                    <span style={{ color: 'green', fontWeight: 'bold' }}>${row.amountUSD}</span>
                  </StyledTableCell>
                  <StyledTableCell>{row.updateTime}</StyledTableCell>
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

export default AssetRecordsTable;
