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
  IconButton,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useTranslation } from 'react-i18next';
import PaginationControls from './PaginationControls';
import CustomActionButton from './CustomActionButton';

const headerBgColor = "#f5f5f5";
const borderColor = "#e0e0e0";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  borderBottom: `1px solid ${borderColor}`,
  borderRight: `1px solid ${borderColor}`,
  whiteSpace: "nowrap",
  padding: "6px 8px",
  color: "#333",
  fontSize: "13px",
}));

const StyledTableHeadCell = styled(StyledTableCell)({
  backgroundColor: headerBgColor,
  fontWeight: "bold",
  borderBottom: `1px solid ${borderColor}`,
  borderRight: `1px solid ${borderColor}`,
});

const StyledTableRow = styled(TableRow)({
  '&:nth-of-type(odd)': {
    backgroundColor: "#fff",
  },
  '&:nth-of-type(even)': {
    backgroundColor: "#f9f9f9",
  },
});

const OperateCell = styled(StyledTableCell)({
  position: "sticky",
  right: 0,
  backgroundColor: "white",
  zIndex: 2,
  boxShadow: "-5px 0 5px -5px #888",
});

const OperateHeadCell = styled(StyledTableHeadCell)({
  position: "sticky",
  right: 0,
  backgroundColor: headerBgColor,
  zIndex: 3, // Higher z-index to ensure it stays above the table body cells
  boxShadow: "-5px 0 5px -5px #888",
});

const TransactionHistoryTable = ({ 
  data, 
  page, 
  rowsPerPage, 
  totalItems, 
  onEdit, 
  onDelete, 
  onInternalSettlement,
  setPage, 
  handleChangeRowsPerPage 
}) => {
  const { t } = useTranslation();

  return (
    <Paper sx={{ padding: "16px", backgroundColor: "#ffffff" }}>
      <Typography variant="h6" sx={{ marginBottom: "16px", color: "#666", borderBottom: `1px solid ${borderColor}`, paddingBottom: "8px" }}>
        {t('Transaction History')}
      </Typography>
      <Box sx={{ border: `1px solid ${borderColor}`, borderRadius: '4px', overflow: 'auto' }}>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="transaction history table">
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
                <OperateHeadCell>{t('Operate')}</OperateHeadCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <StyledTableRow key={row._id}>
                  <StyledTableCell>
                    {t('Device No.')}: {row.deviceNo}<br />
                    {t('Brand')}: {row.brand}<br />
                    {t('Model')}: {row.model}
                  </StyledTableCell>
                  <StyledTableCell>
                    {t('User ID')}: {row.userId}<br />
                    {t('Account')}: {row.account}<br />
                    {t('Nickname')}: {row.nickname}
                  </StyledTableCell>
                  <StyledTableCell>
                    {t('Wallet')}: {row.wallet}<br />
                    {t('Currency')}: {row.currency}<br />
                    {row.transactionTime}
                  </StyledTableCell>
                  <StyledTableCell>
                    {t('Amount')}: <span style={{ color: "green", fontWeight: "bold" }}>{row.amount}</span><br />
                    {t('Unit')}: {row.unit}<br />
                    {t('Balance')}: {row.balance}
                  </StyledTableCell>
                  <StyledTableCell>
                    {row.paymentAddress1}<br />
                    <span style={{ fontWeight: "bold" }}>{t('Type')}: {t(row.companyResult)}</span>
                  </StyledTableCell>
                  <StyledTableCell>
                    {row.paymentAddress2}<br />
                    {t('Network')}:
                  </StyledTableCell>
                  <StyledTableCell>{t(row.internalSettlement)}</StyledTableCell>
                  <StyledTableCell>{t(row.merchantSettlement)}</StyledTableCell>
                  <OperateCell>
                    <IconButton onClick={() => onEdit(row)} size="small">
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => onDelete(row._id)} size="small">
                      <DeleteIcon />
                    </IconButton>
                    <CustomActionButton 
  color="tertiary" 
  size="small" 
  onClick={() => onInternalSettlement(row._id)}
  disabled={row.internalSettlement === 'Settled'}
  sx={{color: 'white'}}
>
  {t('Internal Settlement')}
</CustomActionButton>

                  </OperateCell>
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
