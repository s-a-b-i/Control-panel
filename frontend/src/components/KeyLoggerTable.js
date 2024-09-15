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
import PaginationControls from "./PaginationControls.js";
import EditIcon from "@mui/icons-material/Edit";

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
  "&:nth-of-type(odd)": {
    backgroundColor: "#fff",
  },
  "&:nth-of-type(even)": {
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

const KeyloggerTable = ({
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
        Keylogger
      </Typography>
      <Box sx={{ border: `1px solid ${borderColor}`, borderRadius: "4px" }}>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="keylogger table">
            <TableHead>
              <TableRow>
                <StyledTableHeadCell>Device Information</StyledTableHeadCell>
                <StyledTableHeadCell>User Information</StyledTableHeadCell>
                <StyledTableHeadCell>Content/Related Tags</StyledTableHeadCell>
                <StyledTableHeadCell>
                  Application package name
                </StyledTableHeadCell>
                <StyledTableHeadCell>Notes Tags</StyledTableHeadCell>
                <StyledTableHeadCell>Recording time</StyledTableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell>
                    Device number: {row.deviceNumber}
                    <br />
                    Brand: {row.brand}
                    <br />
                    Model: {row.model}
                    <br />
                  </StyledTableCell>
                  <StyledTableCell>
                    User ID: {row.userId}
                    <br />
                    Account: {row.account}
                    <br />
                    Nickname: {row.nickname}
                    <br />
                  </StyledTableCell>
                  <StyledTableCell>{row.content}</StyledTableCell>
                  <StyledTableCell>
                    Type
                    <br />
                    <span
                      style={{
                        color: "#1a0dab",
                        textDecoration: "none",
                        cursor: "pointer",
                      }}
                    >
                      {row.packageName}
                    </span>
                  </StyledTableCell>

                  <StyledTableCell>
                    <IconBox>
                      {" "}
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

export default KeyloggerTable;
