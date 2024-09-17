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
} from "@mui/material";
import { styled } from "@mui/material/styles";
import EditIcon from '@mui/icons-material/Edit';
import PaginationControls from "./PaginationControls";
import { useTranslation } from "react-i18next";  // Import useTranslation

const borderColor = "#e0e0e0";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  borderBottom: `1px solid ${borderColor}`,
  borderRight: `1px solid ${borderColor}`,
  padding: "6px 8px",
  color: "#333",
  fontSize: "13px",
}));

const StyledTableHeadCell = styled(StyledTableCell)({
  fontWeight: "bold",
  backgroundColor: "#f5f5f5",
});

const StyledTableRow = styled(TableRow)({
    '&:nth-of-type(odd)': {
      backgroundColor: "#fff",
    },
    '&:nth-of-type(even)': {
      backgroundColor: "#f9f9f9",
    },
});

const IconBox = styled(Box)(({ theme }) => ({
  border: `1px solid ${borderColor}`, 
  borderRadius: "4px",  
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "30px", 
  height: "30px", 
}));

const ApplicationListTable = ({ rows, page, rowsPerPage, setPage, totalItems, handleChangeRowsPerPage }) => {
  const { t } = useTranslation();  // Initialize translation

  return (
    <Paper sx={{ padding: "16px", backgroundColor: "#ffffff" }}>
      <Typography variant="h6" sx={{ marginBottom: "16px",
          color: "#666",
          borderBottom: `1px solid ${borderColor}`,
          paddingBottom: "8px", }}>
        {t("Application List")} {/* Translated header */}
      </Typography>
      <Box sx={{ border: `1px solid #e0e0e0`, borderRadius: '4px' }}>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="application list table">
            <TableHead>
              <TableRow>
                <StyledTableHeadCell>{t("Device Information")}</StyledTableHeadCell>
                <StyledTableHeadCell>{t("User Information")}</StyledTableHeadCell>
                <StyledTableHeadCell>{t("Application Information")}</StyledTableHeadCell>
                <StyledTableHeadCell>{t("Notes Tags")}</StyledTableHeadCell>
                <StyledTableHeadCell>{t("Recording time")}</StyledTableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell>
                    {t("Device No.")}: {row.deviceNo}<br/>
                    {t("Brand")}: {row.brand}<br/>
                    {t("Model")}: {row.model}
                  </StyledTableCell>
                  <StyledTableCell>
                    {t("User ID")}: {row.userId}<br/>
                    {t("Account")}: {row.account}<br/>
                    {t("Nickname")}: {row.nickname}
                  </StyledTableCell>
                  <StyledTableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <img src={row.appIcon} alt="App Icon" style={{ width: 24, height: 24, marginRight: 8 }} />
                      {row.appName}
                    </Box>
                  </StyledTableCell>
                  <StyledTableCell>
                    <IconBox> 
                      <IconButton size="small">
                        <EditIcon fontSize="small" />
                      </IconButton>
                    </IconBox>
                  </StyledTableCell>
                  <StyledTableCell>{row.recordingTime}</StyledTableCell>
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

export default ApplicationListTable;
