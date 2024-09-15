import React from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";
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
      <StyledTextField
        placeholder="Device Number"
        size="small"
        sx={{ width: 200 }}
      />
      <StyledTextField
        placeholder="Payment address"
        size="small"
        sx={{ width: 400 }}
      />

      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Typography>Address Type:</Typography>
        <StyledSelect
          value="Company + Platform"
          size="small"
          sx={{ width: 200 }}
        >
          <MenuItem value="Company + Platform">Company + Platform</MenuItem>
          <MenuItem value="company">company</MenuItem>
          <MenuItem value="platform">platform</MenuItem>
          <MenuItem value="Personal">Personal</MenuItem>
        </StyledSelect>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Typography>Wallet APP:</Typography>
        <StyledSelect defaultValue="all" size="small" sx={{ width: 300 }}>
          <MenuItem value="all">all</MenuItem>
          <MenuItem value="Binance">Binance------Binance Exchange</MenuItem>
          <MenuItem value="Huobi">Huobi-------Huobi Exchange</MenuItem>
          <MenuItem value="OKX">OKX-----------OECD Exchange</MenuItem>
          <MenuItem value="KuCoin">KuCoin-------Exchange</MenuItem>
          <MenuItem value="Trust">Trust--------Trust Wallet</MenuItem>
          <MenuItem value="imToken">imToken------IM wallet</MenuItem>
          <MenuItem value="TokenPocket">TokenPocket--TP Wallet</MenuItem>
          <MenuItem value="TronLink">TronLink-----Bobao Wallet</MenuItem>
        </StyledSelect>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Typography>Trading Currency:</Typography>
        <StyledSelect defaultValue="all" size="small" sx={{ width: 200 }}>
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
        </StyledSelect>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Typography>Internal settlement of the company:</Typography>
        <StyledSelect defaultValue="all" size="small" sx={{ width: 150 }}>
          <MenuItem value="all">all</MenuItem>
          <MenuItem value="unsettled">unsettled</MenuItem>
          <MenuItem value="settled">settled</MenuItem>
        </StyledSelect>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Typography>Settlement with the platform:</Typography>
        <StyledSelect defaultValue="all" size="small" sx={{ width: 150 }}>
          <MenuItem value="all">all</MenuItem>
          <MenuItem value="unsettled">unsettled</MenuItem>
          <MenuItem value="settled">settled</MenuItem>
        </StyledSelect>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Typography>Trading hours:</Typography>
        <StyledSelect
          defaultValue=""
          displayEmpty
          size="small"
          sx={{ width: 250 }}
        >
          <MenuItem value="" disabled>
            Please select a time range
          </MenuItem>
        </StyledSelect>
      </Box>

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
