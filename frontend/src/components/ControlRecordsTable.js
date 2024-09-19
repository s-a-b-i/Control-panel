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
import PaginationControls from "./PaginationControls.js";
import { useTranslation } from 'react-i18next';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  borderBottom: `1px solid #e0e0e0`,
  borderRight: `1px solid #e0e0e0`,
  padding: "6px 8px",
  color: "#333",
  fontSize: "13px",
}));

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

const ControlRecordsTable = ({ rows, page, rowsPerPage, setPage, totalItems, handleChangeRowsPerPage }) => {
  const { t } = useTranslation();
  const borderColor = "#e0e0e0"; // moved this inside to use correctly

  return (
    <Paper sx={{ padding: "16px", backgroundColor: "#ffffff" }}>
      <Typography
        variant="h6"
        sx={{
          marginBottom: "16px",
          color: "#666",
          borderBottom: `1px solid ${borderColor}`,
          paddingBottom: "8px",
        }}
      >
        {t('ControlRecords')}
      </Typography>
      <Box sx={{ border: `1px solid ${borderColor}`, borderRadius: '4px' }}>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="control records table">
            <TableHead>
              <TableRow>
                <StyledTableHeadCell>{t('DeviceInformation')}</StyledTableHeadCell>
                <StyledTableHeadCell>{t('UserInformation')}</StyledTableHeadCell>
                <StyledTableHeadCell align="center">{t('NumberOfProjectionRecords')}</StyledTableHeadCell>
                <StyledTableHeadCell>{t('LastControlTime')}</StyledTableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell>
                    {t('DeviceNo')}: {row.deviceInfo.deviceNo}<br />
                    {t('Brand')}: {row.deviceInfo.brand}<br />
                    {t('Model')}: {row.deviceInfo.model}
                  </StyledTableCell>
                  <StyledTableCell>
                    {t('UserID')}: {row.userInfo.userId}<br />
                    {t('Account')}: {row.userInfo.account}<br />
                    {t('Nickname')}: {row.userInfo.nickname}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <Box sx={{
                      backgroundColor: "#2196f3",
                      color: "white",
                      padding: "2px 8px",
                      borderRadius: "4px",
                      display: "inline-block",
                    }}>
                      {row.projectionRecords}
                    </Box>
                  </StyledTableCell>
                  <StyledTableCell>{row.lastControlTime}</StyledTableCell>
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

export default ControlRecordsTable;
