import React from "react";
import { Box, TextField, Button, Select, MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation(); // Initialize the translation function

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 2 }}>
      <StyledTextField
        placeholder={t('Device Number')} // Translated placeholder
        size="small"
        sx={{ width: 200 }}
      />

      <StyledSelect value="all" size="small" sx={{ width: 200 }}>
        <MenuItem value="all">{t('all')}</MenuItem>
        <MenuItem value="binance">{t('Binance-----Binance Exchange')}</MenuItem>
        <MenuItem value="huobi">{t('Huobi-------Huobi Exchange')}</MenuItem>
        <MenuItem value="okx">{t('OKX-----------OECD Exchange')}</MenuItem>
        <MenuItem value="kucoin">{t('KuCoin-----Exchange')}</MenuItem>
        <MenuItem value="poloniex">{t('Poloniex-----Exchange')}</MenuItem>
        <MenuItem value="trust">{t('Trust--------Trust Wallet')}</MenuItem>
        <MenuItem value="imtoken">{t('imToken-----IM wallet')}</MenuItem>
        <MenuItem value="tokenpocket">{t('TokenPocket--TP Wallet')}</MenuItem>
        <MenuItem value="tronlink">{t('TronLink-----Bobao Wallet')}</MenuItem>
      </StyledSelect>

      <StyledSelect value="all" size="small" sx={{ width: 200 }}>
        <MenuItem value="all">{t('all')}</MenuItem>
        <MenuItem value="total_assets">{t('Only look at total assets')}</MenuItem>
      </StyledSelect>

      <StyledButton variant="contained" size="small">
        {t('search')}
      </StyledButton>

      <StyledButton variant="outlined" size="small">
        {t('Reset')}
      </StyledButton>
    </Box>
  );
};

export default SearchBar;
