import React from "react";
import { Box, TextField, Button, Select, MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
  
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 2, alignItems: "center" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box component="span" sx={{ mr: 1 }}>{t("Currency")}:</Box>
        <StyledSelect value="all" size="small" sx={{ width: 200 }}>
        <MenuItem value="all">{t("All")}</MenuItem>
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
        <Box component="span" sx={{ mr: 1 }}>{t("Address Type")}:</Box>
        <StyledSelect value="all" size="small" sx={{ width: 200 }}>
          <MenuItem value="all">{t("All")}</MenuItem>
          <MenuItem value="Company Provided">{t("Company Provided")}</MenuItem>
          <MenuItem value="Platform Provided">{t("Platform Provided")}</MenuItem>
        </StyledSelect>
      </Box>
      
      <StyledTextField placeholder={t("Remark")} size="small" sx={{ width: 200 }} />
      <StyledButton variant="contained" size="medium">
        {t("Search")}
      </StyledButton>
      
      <Button variant="outlined" size="medium">
        {t("Reset")}
      </Button>
    </Box>
  );
};

export default SearchBar;