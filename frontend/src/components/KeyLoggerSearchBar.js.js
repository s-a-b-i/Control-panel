import React from "react";
import { Box, TextField, Button,  Select, MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";

const textColor = "#666";

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#2196f3",
  color: "white",
  "&:hover": {
    backgroundColor: "#1976d2",
  },
}));

const StyledTextField = styled(TextField)({
  backgroundColor: "white",
  color: textColor,
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

const StyledSelect = styled(Select)({
  backgroundColor: "white",
  color: textColor,
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#e0e0e0",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "#2196f3",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#2196f3",
  },
});

const SearchBar = () => {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 2 }}>
      <StyledTextField placeholder="Device Number" size="small" sx={{ width: 200 }} />
      <StyledTextField placeholder="content" size="small" sx={{ width: 200 }} />
      <StyledTextField placeholder="Related tags" size="small" sx={{ width: 200 }} />
      <StyledTextField placeholder="Application package name" size="small" sx={{ width: 200 }} />
      <StyledTextField placeholder="Tag Notes" size="small" sx={{ width: 200 }} />
      
      <StyledSelect value="all" size="small" sx={{ width: 100 }}>
        <MenuItem value="all">all</MenuItem>
        <MenuItem value="Click">Click</MenuItem>
        <MenuItem value="enter">enter</MenuItem>
      </StyledSelect>
      
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