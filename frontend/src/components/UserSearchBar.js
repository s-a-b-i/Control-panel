import React from "react";
import { Box, TextField, Button, Typography, Select, MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";

const textColor = "#666";

// Styled components for buttons and inputs
const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#2196f3",
  color: "white",
  "&:hover": {
    backgroundColor: "#1976d2",
  },
}));

const StyledTextField = styled(TextField)({
  backgroundColor: "white", // Set background color to white
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
  backgroundColor: "white", // Set background color to white
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

// Main SearchBar component
const SearchBar = () => {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 2 }}>
      <StyledSelect value="" displayEmpty size="small" sx={{ width: 200 }}>
        <MenuItem value="" disabled>
          Please select online status
        </MenuItem>
        <MenuItem value="online">Online</MenuItem>
        <MenuItem value="offline">Offline</MenuItem>
      </StyledSelect>
      
      <StyledTextField placeholder="Enter user ID/nickname/account" size="small" sx={{ width: 200 }} />
      <StyledTextField placeholder="Parent user ID (inviter)" size="small" sx={{ width: 200 }} />
      <StyledTextField placeholder="Proxy User Id" size="small" sx={{ width: 200 }} />
      
      {/* New Registration time frame input */}
      <StyledButton variant="contained" size="small">
        search
      </StyledButton>
      <StyledButton variant="contained" size="small">
        Added
      </StyledButton>
      <Typography sx={{ color: textColor, alignSelf: 'center' }}>
        Registration time frame:
      </Typography>
      <StyledSelect value="" displayEmpty size="small" sx={{ width: 200 }}>
        <MenuItem value="" disabled>
          Please select a time range
        </MenuItem>
        <MenuItem value="today">Today</MenuItem>
        <MenuItem value="last_7_days">Last 7 Days</MenuItem>
        <MenuItem value="last_30_days">Last 30 Days</MenuItem>
        <MenuItem value="custom">Custom Range</MenuItem>
      </StyledSelect>
    </Box>
  );
};

export default SearchBar;