import React from "react";
import { Box, TextField, Button, Select, MenuItem } from "@mui/material";
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

const StyledSelect = styled(Select)({
  backgroundColor: "white",
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
      
      <StyledSelect value="all" size="small" sx={{ width: 200 }}>
        <MenuItem value="all">all</MenuItem>
        <MenuItem value="binance">Binance-----Binance Exchange</MenuItem>
        <MenuItem value="huobi">Huobi-------Huobi Exchange</MenuItem>
        <MenuItem value="okx">OKX-----------OECD Exchange</MenuItem>
        <MenuItem value="kucoin">KuCoin-----Exchange</MenuItem>
        <MenuItem value="poloniex">Poloniex-----Exchange</MenuItem>
        <MenuItem value="trust">Trust--------Trust Wallet</MenuItem>
        <MenuItem value="imtoken">imToken-----IM wallet</MenuItem>
        <MenuItem value="tokenpocket">TokenPocket--TP Wallet</MenuItem>
        <MenuItem value="tronlink">TronLink-----Bobao Wallet</MenuItem>
      </StyledSelect>
      
      <StyledSelect value="all" size="small" sx={{ width: 200 }}>
        <MenuItem value="all">all</MenuItem>
        <MenuItem value="total_assets">Only look at total assets</MenuItem>
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