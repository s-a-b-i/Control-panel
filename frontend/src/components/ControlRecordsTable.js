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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  borderBottom: `1px solid #e0e0e0`,
  borderRight: `1px solid #e0e0e0`,
  padding: "12px 16px",
  color: "#333",
  fontSize: "14px",
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
  return (
    <Paper sx={{ padding: "16px", backgroundColor: "#ffffff" }}>
      <Typography variant="h6" sx={{ marginBottom: "16px", color: "#333" }}>
        Control records
      </Typography>
      <Box sx={{ border: `1px solid #e0e0e0`, borderRadius: '4px' }}>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="control records table">
            <TableHead>
              <TableRow>
                <StyledTableHeadCell>Device Information</StyledTableHeadCell>
                <StyledTableHeadCell>User Information</StyledTableHeadCell>
                <StyledTableHeadCell align="center">Number of projection rec...</StyledTableHeadCell>
                <StyledTableHeadCell>Last control time</StyledTableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell>
                    Device No.: {row.deviceInfo.deviceNo}<br />
                    Brand: {row.deviceInfo.brand}<br />
                    Model: {row.deviceInfo.model}
                  </StyledTableCell>
                  <StyledTableCell>
                    User ID: {row.userInfo.userId}<br />
                    Account: {row.userInfo.account}<br />
                    Nickname: {row.userInfo.nickname}
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