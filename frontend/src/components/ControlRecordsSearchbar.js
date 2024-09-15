import React, { useState } from "react";
import { Box, TextField, Button, Typography, Select, MenuItem, IconButton, InputAdornment } from "@mui/material";
import { styled } from "@mui/material/styles";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "white",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
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
  "& .MuiInputBase-input": {
    padding: "8px 14px",
    paddingRight: "24px", // Make room for the arrows
  },
});

const StyledSelect = styled(Select)({
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
  const [controlEnd, setControlEnd] = useState(1);

  const handleIncrement = () => {
    setControlEnd(prevValue => prevValue + 1);
  };

  const handleDecrement = () => {
    setControlEnd(prevValue => prevValue > 1 ? prevValue - 1 : 1);
  };

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 2, alignItems: "center" }}>
      <Typography sx={{ color: "#666" }}>
        Control end, such as:
      </Typography>
      <StyledTextField
        value={controlEnd}
        onChange={(e) => setControlEnd(parseInt(e.target.value) || 1)}
        size="small"
        sx={{ width: 200 }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" sx={{ marginRight: "-8px" }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: '-8px' }}>
                <ArrowDropUpIcon 
                  sx={{ cursor: 'pointer', fontSize: 18 }} 
                  onClick={handleIncrement}
                />
                <ArrowDropDownIcon 
                  sx={{ cursor: 'pointer', fontSize: 18, marginTop: '-8px' }} 
                  onClick={handleDecrement}
                />
              </Box>
            </InputAdornment>
          )
        }}
      />
      <Typography sx={{ color: "#666" }}>
        Review status:
      </Typography>
      <StyledSelect defaultValue="all" size="small" sx={{ width: 200 }}>
        <MenuItem value="all">all</MenuItem>
        <MenuItem value="unreviewed">unreviewed</MenuItem>
        <MenuItem value="tagged">tagged</MenuItem>
        <MenuItem value="ignore">ignore</MenuItem>
      </StyledSelect>
      
      <Typography sx={{ color: "#666" }}>
        Control time:
      </Typography>
      <StyledSelect defaultValue="" displayEmpty size="small" sx={{ width: 200 }}>
        <MenuItem value="" disabled>
          Please select a time range
        </MenuItem>
        <MenuItem value="today">Today</MenuItem>
        <MenuItem value="last_7_days">Last 7 Days</MenuItem>
        <MenuItem value="last_30_days">Last 30 Days</MenuItem>
        <MenuItem value="custom">Custom Range</MenuItem>
      </StyledSelect>
      
      <StyledButton variant="contained" size="small" sx={{ bgcolor: "#2196f3" }}>
        Search
      </StyledButton>
      <StyledButton variant="contained" size="small" sx={{ bgcolor: "#fff", color: "#666", border: "1px solid #e0e0e0" }}>
        Reset
      </StyledButton>
    </Box>
  );
};

export default SearchBar;
