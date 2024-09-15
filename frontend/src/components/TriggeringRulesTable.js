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

const headerBgColor = "#f5f5f5";
const borderColor = "#e0e0e0";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  borderBottom: `1px solid ${borderColor}`,
  borderRight: `1px solid ${borderColor}`,
  whiteSpace: "nowrap",
  padding: "12px 16px",
  color: "#333",
  fontSize: "14px",
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

const TriggeringRulesTable = ({
  rows,
  page,
  rowsPerPage,
  setPage,
  totalItems,
  handleChangeRowsPerPage,
}) => {
  return (
    <Paper sx={{ padding: "16px", backgroundColor: "#ffffff" }}>
      <Typography variant="h6" sx={{ marginBottom: "16px", color: "#333" }}>
        Triggering rules
      </Typography>
      <Box sx={{ border: `1px solid ${borderColor}`, borderRadius: '4px' }}>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="triggering rules table">
            <TableHead>
              <TableRow>
                <StyledTableHeadCell>Device Number</StyledTableHeadCell>
                <StyledTableHeadCell>Units of measure...</StyledTableHeadCell>
                <StyledTableHeadCell>Trigger Amount</StyledTableHeadCell>
                <StyledTableHeadCell>operate</StyledTableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell>{row.deviceNumber}</StyledTableCell>
                  <StyledTableCell>{row.unitsOfMeasure}</StyledTableCell>
                  <StyledTableCell>{row.triggerAmount}</StyledTableCell>
                  <StyledTableCell>{row.operate}</StyledTableCell>
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

export default TriggeringRulesTable;