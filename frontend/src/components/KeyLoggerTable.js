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
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useTranslation } from 'react-i18next';
import PaginationControls from './PaginationControls';

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
  '&:nth-of-type(odd)': {
    backgroundColor: "#fff",
  },
  '&:nth-of-type(even)': {
    backgroundColor: "#f9f9f9",
  },
});

const KeyloggerTable = ({ rows, onDelete, onEdit, page, rowsPerPage, setPage, totalItems, handleChangeRowsPerPage }) => {
  const { t } = useTranslation();

  return (
    <Paper sx={{ padding: "16px", backgroundColor: "#ffffff" }}>
      <Typography variant="h6" sx={{ marginBottom: "16px",
          color: "#666",
          borderBottom: `1px solid ${borderColor}`,
          paddingBottom: "8px", }}>
        {t('Keylogger Entries')}
      </Typography>
      <Box sx={{ border: `1px solid ${borderColor}`, borderRadius: '4px' }}>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="keylogger table">
            <TableHead>
              <TableRow>
                <StyledTableHeadCell>{t('Device Information')}</StyledTableHeadCell>
                <StyledTableHeadCell>{t('User Information')}</StyledTableHeadCell>
                <StyledTableHeadCell>{t('Content/Related Tags')}</StyledTableHeadCell>
                <StyledTableHeadCell>{t('Application Package Name')}</StyledTableHeadCell>
                <StyledTableHeadCell>{t('Tag Notes')}</StyledTableHeadCell>
                <StyledTableHeadCell>{t('Recording Time')}</StyledTableHeadCell>
                <StyledTableHeadCell>{t('Actions')}</StyledTableHeadCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row._id}>
                  <StyledTableCell>
                    {t('Device Number')}: {row.deviceNumber}<br/>
                    {t('Brand')}: {row.brand}<br/>
                    {t('Model')}: {row.model}
                  </StyledTableCell>
                  <StyledTableCell>
                    {t('User ID')}: {row.userId}<br/>
                    {t('Account')}: {row.account}<br/>
                    {t('Nickname')}: {row.nickname}
                  </StyledTableCell>
                  <StyledTableCell>
                    {t('Content')}: {row.content}<br/>
                    {t('Related Tags')}: {row.relatedTags}
                  </StyledTableCell>
                  <StyledTableCell>{row.packageName}</StyledTableCell>
                  <StyledTableCell>{row.tagNotes}</StyledTableCell>
                  <StyledTableCell>{row.recordingTime}</StyledTableCell>
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

export default KeyloggerTable;