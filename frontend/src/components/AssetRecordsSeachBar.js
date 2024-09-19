import React, { useState } from "react";
import { Box, TextField, Button, Select, MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

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

const AssetSearchBar = ({ onSearch, onReset }) => {
  const { t } = useTranslation();
  const [deviceNo, setDeviceNo] = useState("");
  const [wallet, setWallet] = useState("all");
  const [assetView, setAssetView] = useState("all");

  const handleSearch = () => {
    onSearch({ deviceNo, wallet: wallet !== "all" ? wallet : "", assetView });
  };

  const handleReset = () => {
    setDeviceNo("");
    setWallet("all");
    setAssetView("all");
    onReset();
  };

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 2, alignItems: "center" }}>
      <StyledTextField
        placeholder={t('Device Number')}
        value={deviceNo}
        onChange={(e) => setDeviceNo(e.target.value)}
        size="small"
        sx={{ width: 200 }}
      />

      <StyledSelect
        value={wallet}
        onChange={(e) => setWallet(e.target.value)}
        size="small"
        sx={{ width: 200 }}
      >
        <MenuItem value="all">{t('All Wallets')}</MenuItem>
        <MenuItem value="binance">{t('Binance')}</MenuItem>
        <MenuItem value="huobi">{t('Huobi')}</MenuItem>
        <MenuItem value="okx">{t('OKX')}</MenuItem>
        <MenuItem value="kucoin">{t('KuCoin')}</MenuItem>
        <MenuItem value="poloniex">{t('Poloniex')}</MenuItem>
        <MenuItem value="trust">{t('Trust Wallet')}</MenuItem>
        <MenuItem value="imtoken">{t('imToken')}</MenuItem>
        <MenuItem value="tokenpocket">{t('TokenPocket')}</MenuItem>
        <MenuItem value="tronlink">{t('TronLink')}</MenuItem>
      </StyledSelect>

      <StyledSelect
        value={assetView}
        onChange={(e) => setAssetView(e.target.value)}
        size="small"
        sx={{ width: 200 }}
      >
        <MenuItem value="all">{t('All Assets')}</MenuItem>
        <MenuItem value="total_assets">{t('Only Total Assets')}</MenuItem>
      </StyledSelect>

      <StyledButton variant="contained" size="medium" onClick={handleSearch}>
        {t('Search')}
      </StyledButton>

      <Button variant="outlined" size="medium" onClick={handleReset}>
        {t('Reset')}
      </Button>
    </Box>
  );
};

export default AssetSearchBar;