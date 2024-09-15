import React from "react";
import { Box, Button, IconButton, TextField, Typography, Select, MenuItem } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { styled } from "@mui/material/styles";

const textColor = "#666";

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#00A497",
  color: "white",
  minWidth: 30,
  height: 32,
  padding: "2px 6px",
  "&:hover": {
    backgroundColor: "#00887A",
  },
}));

const PaginationControls = ({ page, rowsPerPage, setPage, totalItems, handleChangeRowsPerPage }) => {
  const totalPages = Math.ceil(totalItems / rowsPerPage);

  const handlePageChange = (event) => {
    const newPage = parseInt(event.target.value) - 1; // Subtract 1 to convert to zero-based index
    if (newPage >= 0 && newPage < totalPages) {
      setPage(newPage);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        m: 1,
        height: 32,
      }}
    >
      <IconButton 
        onClick={() => setPage(page - 1)} 
        disabled={page === 0 || totalPages === 1}
        sx={{ height: 32, width: 32 }}
      >
        <KeyboardArrowLeftIcon />
      </IconButton>

      <StyledButton variant="contained" size="small">
        {page + 1} {/* Display one-based page number */}
      </StyledButton>

      <IconButton 
        onClick={() => setPage(page + 1)} 
        disabled={page >= totalPages - 1 || totalPages === 1}
        sx={{ height: 32, width: 32 }}
      >
        <KeyboardArrowRightIcon />
      </IconButton>

      <Typography sx={{ color: textColor, mx: 1, fontSize: 14, height: 32, lineHeight: '32px' }}>
        To
      </Typography>

      <TextField
        value={page + 1} // Display one-based page number
        onChange={handlePageChange}
        size="small"
        sx={{ width: 40, height: 32 }}
        type="number"
        inputProps={{ min: 1, max: totalPages, style: { height: '32px', padding: 0 } }}
      />

      <Typography sx={{ color: textColor, mx: 1, fontSize: 14, height: 32, lineHeight: '32px' }}>
        Page
      </Typography>

      <StyledButton 
        variant="contained" 
        size="small" 
        sx={{ mx: 1 }}
        onClick={() => setPage(parseInt(page))}
      >
        Sure
      </StyledButton>

      <Typography sx={{ color: textColor, mx: 1, fontSize: 14, height: 32, lineHeight: '32px' }}>
        Total {totalItems} items
      </Typography>

      <Select
        value={rowsPerPage}
        onChange={handleChangeRowsPerPage}
        size="small"
        sx={{ width: 160, height: 32 }}
      >
        {[15, 20, 30, 50].map((option) => (
          <MenuItem key={option} value={option}>
            {option} items/page
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
};

export default PaginationControls;