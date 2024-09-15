import React from "react";
import { Box, TextField, Button, Select, MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";

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
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 2, alignItems: "center" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box component="span" sx={{ mr: 1 }}>Currency:</Box>
        <StyledSelect value="all" size="small" sx={{ width: 200 }}>
          <MenuItem value="all">all</MenuItem>
          <MenuItem value="all">all</MenuItem>
          <MenuItem value="TRX">TRX-------Tron</MenuItem>
          <MenuItem value="ETH">ETH-------Ethereum</MenuItem>
          <MenuItem value="BTC">BTC---Bitcoin</MenuItem>
          <MenuItem value="BNB">BNB-------BNB Chain</MenuItem>
          <MenuItem value="SOL">SOL-------Solana</MenuItem>
          <MenuItem value="XRP">XRP -------XRP</MenuItem>
          <MenuItem value="LTC">LTC--------Litecoin</MenuItem>
          <MenuItem value="DOGE">DOGE-----Dogocoin</MenuItem>
          <MenuItem value="DOT">DOT-------Polkadot</MenuItem>
          <MenuItem value="HT">HT---------Huobi</MenuItem>
          <MenuItem value="MATIC">MATIC-----Polygon</MenuItem>
          <MenuItem value="EOS">EOS-------EOS</MenuItem>
          <MenuItem value="ADA">ADA - Cardano</MenuItem>
          <MenuItem value="OP">OP---------Optimism</MenuItem>
          <MenuItem value="CRO">CRO-------Cronos Chain</MenuItem>
          <MenuItem value="BCH">BCH - Bitcoin Cash</MenuItem>
          <MenuItem value="ALGO">ALGO-----Algorand</MenuItem>
          <MenuItem value="ETC">ETC-------Ethereum Classic</MenuItem>
          <MenuItem value="VTHO">VTHO-----VeThor</MenuItem>
          <MenuItem value="OKB">OKB-------OKB</MenuItem>
          <MenuItem value="OKT">OKT---OKC Token</MenuItem>
          <MenuItem value="XDAI">XDAI-----Gnosis</MenuItem>
          <MenuItem value="ZRX">ZRX-------0x</MenuItem>
          <MenuItem value="AUTO">AUTO-----AUTOv2</MenuItem>
          <MenuItem value="ATOM">ATOM - Cosmos Hub</MenuItem>
          <MenuItem value="CKB">CKB-------Nervos</MenuItem>
          <MenuItem value="KSM">KSM-------Kusama</MenuItem>
          <MenuItem value="FIL">FIL---------Filecoin</MenuItem>
          <MenuItem value="AVAX">AVAX - Avalanche</MenuItem>
          <MenuItem value="XTZ">XTZ--------Tezos</MenuItem>
          {/* Add other currency options here */}
        </StyledSelect>
      </Box>
      
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box component="span" sx={{ mr: 1 }}>Address Type:</Box>
        <StyledSelect value="all" size="small" sx={{ width: 200 }}>
          <MenuItem value="all">all</MenuItem>
          <MenuItem value="Company Provided">Company Provided</MenuItem>
          <MenuItem value="Platform Provided">Platform Provided</MenuItem>
          {/* Add other address type options here */}
        </StyledSelect>
      </Box>
      
      <StyledTextField placeholder="Remark" size="small" sx={{ width: 200 }} />
      
      <StyledButton variant="contained" size="medium">
        search
      </StyledButton>
      
      <Button variant="outlined" size="medium">
        Reset
      </Button>
    </Box>
  );
};

export default SearchBar;