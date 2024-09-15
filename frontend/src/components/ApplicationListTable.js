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

const borderColor = "#e0e0e0";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  borderBottom: `1px solid ${borderColor}`,
  borderRight: `1px solid ${borderColor}`,
  padding: "12px 16px",
  color: "#333",
  fontSize: "14px",
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
  return (
    <Paper sx={{ padding: "16px", backgroundColor: "#ffffff" }}>
      <Typography variant="h6" sx={{ marginBottom: "16px", color: "#333" }}>
        Application List
      </Typography>
      <Box sx={{ border: `1px solid #e0e0e0`, borderRadius: '4px' }}>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="application list table">
          <TableHead>
            <TableRow>
              <StyledTableHeadCell>Device Information</StyledTableHeadCell>
              <StyledTableHeadCell>User Information</StyledTableHeadCell>
              <StyledTableHeadCell>Application Information</StyledTableHeadCell>
              <StyledTableHeadCell>Notes Tags</StyledTableHeadCell>
              <StyledTableHeadCell>Recording time</StyledTableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
                <StyledTableRow key={index}>
                <StyledTableCell>
                  Device No.: {row.deviceNo}<br/>
                  Brand: {row.brand}<br/>
                  Model: {row.model}
                </StyledTableCell>
                <StyledTableCell>
                  User ID: {row.userId}<br/>
                  Account: {row.account}<br/>
                  Nickname: {row.nickname}
                </StyledTableCell>
                <StyledTableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <img src={row.appIcon} alt="App Icon" style={{ width: 24, height: 24, marginRight: 8 }} />
                    {row.appName}
                  </Box>
                </StyledTableCell>
                <StyledTableCell>
                 <IconBox> <IconButton size="small">
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