import React from "react";
import { Box, TextField, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#2196f3",
  color: "white",
  "&:hover": {
    backgroundColor: "#1976d2",
  },
}));

const StyledTextField = styled(TextField)({
  backgroundColor: "white",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#e0e0e0",
    },
    "&:hover fieldset": {
      borderColor: "#2196f3",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#2196f3",
    },
  },
});

const SearchBar = () => {
  return (
    <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
      <StyledTextField placeholder="Device Number" size="small" sx={{ width: 200 }} />
      <StyledTextField placeholder="APP Name" size="small" sx={{ width: 200 }} />
      <StyledTextField placeholder="Application package name" size="small" sx={{ width: 200 }} />
      <StyledTextField placeholder="Tag Notes" size="small" sx={{ width: 200 }} />
      
      <StyledButton variant="contained" size="small">
        search
      </StyledButton>
      
      <StyledButton variant="outlined" size="small">
        Reset
      </StyledButton>
    </Box>
  );
};

export default SearchBar;
