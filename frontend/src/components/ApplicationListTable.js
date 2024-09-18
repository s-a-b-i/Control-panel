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
import DeleteIcon from '@mui/icons-material/Delete';
import { useTranslation } from "react-i18next";
import PaginationControls from './PaginationControls';

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

const ApplicationListTable = ({ rows, onDelete, onEdit, page, rowsPerPage, setPage, totalItems, handleChangeRowsPerPage }) => {
  const { t } = useTranslation();

  return (
    <Paper sx={{ padding: "16px", backgroundColor: "#ffffff" }}>
      <Typography variant="h6" sx={{ marginBottom: "16px",
          color: "#666",
          borderBottom: `1px solid ${borderColor}`,
          paddingBottom: "8px", }}>
        {t("Application List")}
      </Typography>
      <Box sx={{ border: `1px solid ${borderColor}`, borderRadius: '4px' }}>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="application list table">
            <TableHead>
              <TableRow>
                <StyledTableHeadCell>{t("Device Information")}</StyledTableHeadCell>
                <StyledTableHeadCell>{t("User Information")}</StyledTableHeadCell>
                <StyledTableHeadCell>{t("Application Information")}</StyledTableHeadCell>
                <StyledTableHeadCell>{t("Tag Notes")}</StyledTableHeadCell>
                <StyledTableHeadCell>{t("Recording time")}</StyledTableHeadCell>
                <StyledTableHeadCell>{t("Actions")}</StyledTableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row._id}>
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
                      {row.appName}<br/>
                      {t("Package Name")}: {row.packageName}
                    </Box>
                  </StyledTableCell>
                  <StyledTableCell>{row.tagNotes}</StyledTableCell>
                  <StyledTableCell>{new Date(row.recordingTime).toLocaleString()}</StyledTableCell>
                  <StyledTableCell>
                    <IconButton onClick={() => onEdit(row)} size="small">
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => onDelete(row._id)} size="small">
                      <DeleteIcon />
                    </IconButton>
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

export default ApplicationListTable;