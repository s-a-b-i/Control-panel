import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
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
    <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
      <StyledTextField 
        placeholder="Device Number" 
        size="small" 
        sx={{ width: 200 }} 
      />
      <StyledButton variant="contained" size="small">
        search
      </StyledButton>
      <StyledButton variant="contained" size="small">
        View Default
      </StyledButton>
      <Typography sx={{ marginLeft: 2 }}>
        {'-->>Cryptocurrency Calculator'}
      </Typography>
    </Box>
  );
};

export default SearchBar;