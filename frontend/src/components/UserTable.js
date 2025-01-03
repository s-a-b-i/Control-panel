import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  Box,
  Button,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import PaginationControls from "./PaginationControls.js";
import { useTranslation } from 'react-i18next';

// Colors based on the image
const headerBgColor = "#f5f5f5";
const rowBgColorEven = "#ffffff";
const rowBgColorOdd = "#f9f9f9";
const borderColor = "#e0e0e0";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  borderBottom: `1px solid ${borderColor}`,
  borderRight: `1px solid ${borderColor}`,
  whiteSpace: "nowrap",
  padding: "6px 8px",
  color: "#666",
  fontSize: "13px",
}));

const StyledTableHeadCell = styled(StyledTableCell)({
  backgroundColor: headerBgColor,
  fontWeight: "bold",
  borderBottom: `1px solid ${borderColor}`,
  borderRight: `1px solid ${borderColor}`,
});

const CustomActionButton = styled(Button)(({ theme }) => ({
  backgroundColor: "white",
  color: "#666",
  fontSize: "11px",
  border: `1px solid ${borderColor}`,
  margin: "0 2px",
  padding: "1px 6px",
  textTransform: "none",
  minWidth: "unset",
  "&:hover": {
    backgroundColor: "#e0e0e0",
  },
}));

const GrayCheckbox = styled(Checkbox)(({ theme }) => ({
  color: "#ccc",
  "&.Mui-checked": {
    color: "#aaa",
  },
}));

const StyledTableRow = styled(TableRow)(({ index }) => ({
  backgroundColor: index % 2 === 0 ? rowBgColorEven : rowBgColorOdd,
}));

const UserTable = ({ rows, page, rowsPerPage, setPage, totalItems, handleChangeRowsPerPage }) => {
  const { t } = useTranslation();

  return (
    <Paper
      sx={{
        padding: "16px",
        backgroundColor: "#ffffff",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          marginBottom: "16px",
          color: "#666",
          borderBottom: `1px solid ${borderColor}`,
          paddingBottom: "8px",
        }}
      >
        {t('User List')}
      </Typography>

      <Box sx={{ border: `1px solid ${borderColor}`, borderRadius: '4px' }}>
        <TableContainer >
          <Table stickyHeader sx={{ minWidth: 650, borderCollapse: "separate" }} size="small" aria-label={t('user table')}>
            <TableHead>
              <TableRow>
                <StyledTableHeadCell
                  padding="checkbox"
                  sx={{
                    position: "sticky",
                    left: 0,
                    zIndex: 3,
                    backgroundColor: headerBgColor,
                    boxShadow: "4px 0px 10px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <GrayCheckbox />
                </StyledTableHeadCell>
                <StyledTableHeadCell>{t('UserId')}</StyledTableHeadCell>
                <StyledTableHeadCell>{t('Nickname')}</StyledTableHeadCell>
                <StyledTableHeadCell>{t('Account')}</StyledTableHeadCell>
                <StyledTableHeadCell>{t('Parent UserId')}</StyledTableHeadCell>
                <StyledTableHeadCell>{t('Parent Nickname')}</StyledTableHeadCell>
                <StyledTableHeadCell>{t('Parent Account')}</StyledTableHeadCell>
                <StyledTableHeadCell>{t('Proxy UserId')}</StyledTableHeadCell>
                <StyledTableHeadCell>{t('Proxy Nickname')}</StyledTableHeadCell>
                <StyledTableHeadCell>{t('Proxy Account')}</StyledTableHeadCell>
                <StyledTableHeadCell>{t('Communication')}</StyledTableHeadCell>
                <StyledTableHeadCell>{t('Login Level')}</StyledTableHeadCell>
                <StyledTableHeadCell>{t('SMS Response')}</StyledTableHeadCell>
                <StyledTableHeadCell>{t('Account Balance')}</StyledTableHeadCell>
                <StyledTableHeadCell>{t('Registration Time')}</StyledTableHeadCell>
                <StyledTableHeadCell>{t('Online Status')}</StyledTableHeadCell>
                <StyledTableHeadCell>{t('Last Online Time')}</StyledTableHeadCell>
                <StyledTableHeadCell>{t('Last Offline Time')}</StyledTableHeadCell>
                <StyledTableHeadCell
                  sx={{
                    position: "sticky",
                    right: 0,
                    backgroundColor: headerBgColor,
                    zIndex: 2,
                    boxShadow: "-4px 0px 10px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {t('Operations')}
                </StyledTableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <StyledTableRow key={row.id} index={index}>
                  <StyledTableCell
                    padding="checkbox"
                    sx={{
                      position: "sticky",
                      left: 0,
                      zIndex: 1,
                      backgroundColor: rowBgColorEven,
                      boxShadow: "4px 0px 10px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <GrayCheckbox />
                  </StyledTableCell>
                  <StyledTableCell>{row.id}</StyledTableCell>
                  <StyledTableCell>{row.nickname}</StyledTableCell>
                  <StyledTableCell>{row.account}</StyledTableCell>
                  <StyledTableCell>{row.parentId}</StyledTableCell>
                  <StyledTableCell>{row.parentNickname}</StyledTableCell>
                  <StyledTableCell>{row.parentAccount}</StyledTableCell>
                  <StyledTableCell>{row.proxyUserId}</StyledTableCell>
                  <StyledTableCell>{row.proxyNickname}</StyledTableCell>
                  <StyledTableCell>{row.proxyAccount}</StyledTableCell>
                  <StyledTableCell>{row.communication}</StyledTableCell>
                  <StyledTableCell>{row.loginLevel}</StyledTableCell>
                  <StyledTableCell>{row.smsRes}</StyledTableCell>
                  <StyledTableCell>{row.accountBalance}</StyledTableCell>
                  <StyledTableCell>{row.registrationTime}</StyledTableCell>
                  <StyledTableCell>{row.onlineStatus}</StyledTableCell>
                  <StyledTableCell>{row.lastOnlineTime}</StyledTableCell>
                  <StyledTableCell>{row.lastOfflineTime}</StyledTableCell>
                  <StyledTableCell
                    sx={{
                      position: "sticky",
                      right: 0,
                      background: "white",
                      zIndex: 1,
                      boxShadow: "-4px 0px 10px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <Box sx={{ display: "flex", flexWrap: "nowrap", gap: 0.5, paddingRight: "95px" }}>
                      <CustomActionButton size="small">{t('delete')}</CustomActionButton>
                      <CustomActionButton size="small">{t('Revise')}</CustomActionButton>
                      <CustomActionButton size="small">{t('Reset Password')}</CustomActionButton>
                      <CustomActionButton size="small">{t('title')}</CustomActionButton>
                      <CustomActionButton size="small">{t('Friend Management')}</CustomActionButton>
                      <CustomActionButton size="small">{t('Add Friend')}</CustomActionButton>
                      <CustomActionButton size="small">{t('Send Message')}</CustomActionButton>
                    </Box>
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

export default UserTable;
