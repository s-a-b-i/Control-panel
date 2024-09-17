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
import { useTranslation } from "react-i18next";  // Import useTranslation

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
  const { t } = useTranslation();  // Initialize translation hook

  return (
    <Paper sx={{ padding: "16px", backgroundColor: "#ffffff" }}>
      <Typography variant="h6" sx={{marginBottom: "16px",
          color: "#666",
          borderBottom: `1px solid ${borderColor}`,
          paddingBottom: "8px", }}>
        {t("Keylogger")} {/* Translated header */}
      </Typography>
      <Box sx={{ border: `1px solid ${borderColor}`, borderRadius: "4px" }}>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="keylogger table">
            <TableHead>
              <TableRow>
                <StyledTableHeadCell>{t("Device Information")}</StyledTableHeadCell>
                <StyledTableHeadCell>{t("User Information")}</StyledTableHeadCell>
                <StyledTableHeadCell>{t("Content/Related Tags")}</StyledTableHeadCell>
                <StyledTableHeadCell>{t("Application package name")}</StyledTableHeadCell>
                <StyledTableHeadCell>{t("Notes Tags")}</StyledTableHeadCell>
                <StyledTableHeadCell>{t("Recording time")}</StyledTableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell>
                    {t("Device number")}: {row.deviceNumber}
                    <br />
                    {t("Brand")}: {row.brand}
                    <br />
                    {t("Model")}: {row.model}
                    <br />
                  </StyledTableCell>
                  <StyledTableCell>
                    {t("User ID")}: {row.userId}
                    <br />
                    {t("Account")}: {row.account}
                    <br />
                    {t("Nickname")}: {row.nickname}
                    <br />
                  </StyledTableCell>
                  <StyledTableCell>{row.content}</StyledTableCell>
                  <StyledTableCell>
                    {t("Application package name")}
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
