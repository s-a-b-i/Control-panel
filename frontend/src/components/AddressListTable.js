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
import CustomActionButton from "./CustomActionButton.js";

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

const AddressListTable = ({
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
        Address List
      </Typography>
      <Box sx={{ border: `1px solid ${borderColor}`, borderRadius: '4px' }}>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="address list table">
            <TableHead>
              <TableRow>
                <StyledTableHeadCell>Currency</StyledTableHeadCell>
                <StyledTableHeadCell>Address ciphertext</StyledTableHeadCell>
                <StyledTableHeadCell>Address Tips</StyledTableHeadCell>
                <StyledTableHeadCell>Address ...</StyledTableHeadCell>
                <StyledTableHeadCell>Remark</StyledTableHeadCell>
                <StyledTableHeadCell>Creation time</StyledTableHeadCell>
                <StyledTableHeadCell>operate</StyledTableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell>{row.currency}</StyledTableCell>
                  <StyledTableCell>{row.addressCiphertext}</StyledTableCell>
                  <StyledTableCell>{row.addressTips}</StyledTableCell>
                  <StyledTableCell>{row.addressType}</StyledTableCell>
                  <StyledTableCell>{row.remark}</StyledTableCell>
                  <StyledTableCell>{row.creationTime}</StyledTableCell>
                  <StyledTableCell>
                    <CustomActionButton size="small" color="primary">
                      View
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

export default AddressListTable;