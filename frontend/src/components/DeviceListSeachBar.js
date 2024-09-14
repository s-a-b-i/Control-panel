import React from "react";
import { Box, TextField, Button, Typography, Select, MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";

const textColor = "#666";

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "white",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
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
      <StyledTextField placeholder="Device Number" size="small" sx={{ width: 150 }} />
      <StyledTextField placeholder="Customer Tags" size="small" sx={{ width: 150 }} />
      <StyledTextField placeholder="Phone brand" size="small" sx={{ width: 150 }} />
      <StyledTextField placeholder="model" size="small" sx={{ width: 150 }} />
      <StyledTextField placeholder="User ID" size="small" sx={{ width: 150 }} />
      <StyledTextField placeholder="Account Username" size="small" sx={{ width: 150 }} />
      <StyledTextField placeholder="Nick name" size="small" sx={{ width: 150 }} />
      <StyledTextField placeholder="Proxy Account" size="small" sx={{ width: 150 }} />
      
      <StyledSelect value="all" size="small" sx={{ width: 150 }}>
        <MenuItem value="all">APP version: all</MenuItem>
      </StyledSelect>
      
      <StyledTextField placeholder="Example Region" size="small" sx={{ width: 150 }} />
      <StyledTextField placeholder="IP address" size="small" sx={{ width: 150 }} />
      
      <StyledSelect value="all" size="small" sx={{ width: 150 }}>
        <MenuItem value="all">icon: all</MenuItem>
      </StyledSelect>
      
      <StyledSelect value="all" size="small" sx={{ width: 150 }}>
        <MenuItem value="all">state: all</MenuItem>
      </StyledSelect>
      
      <StyledSelect value="all" size="small" sx={{ width: 150 }}>
        <MenuItem value="all">Google push: all</MenuItem>
      </StyledSelect>
      
      <StyledSelect value="all" size="small" sx={{ width: 150 }}>
        <MenuItem value="all">Battery strategy: all</MenuItem>
      </StyledSelect>
      
      <StyledSelect value="all" size="small" sx={{ width: 150 }}>
        <MenuItem value="all">Smart Assistant: all</MenuItem>
      </StyledSelect>
      
      <StyledSelect value="all" size="small" sx={{ width: 150 }}>
        <MenuItem value="all">Self-start: all</MenuItem>
      </StyledSelect>
      
      <StyledSelect value="all" size="small" sx={{ width: 150 }}>
        <MenuItem value="all">Finally open: all</MenuItem>
      </StyledSelect>
      
      <StyledSelect value="By update time" size="small" sx={{ width: 150 }}>
        <MenuItem value="By update time">sort by: By update time</MenuItem>
      </StyledSelect>
      
      <StyledSelect value="" displayEmpty size="small" sx={{ width: 200 }}>
        <MenuItem value="" disabled>
          Last updated: Please select a time range
        </MenuItem>
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