
// import React, { useState } from "react";
// import { Box, TextField, Button, Select, MenuItem, FormControl, InputLabel, Popover } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import { useTranslation } from 'react-i18next';
// import Calendar from "./transactionCalender";

// const StyledButton = styled(Button)(({ theme }) => ({
//   backgroundColor: theme.palette.primary.main,
//   color: "white",
//   "&:hover": {
//     backgroundColor: theme.palette.primary.dark,
//   },
// }));

// const StyledTextField = styled(TextField)({
//   backgroundColor: "white",
//   "& .MuiOutlinedInput-root": {
//     "& fieldset": {
//       borderColor: "#e0e0e0",
//     },
//     "&:hover fieldset": {
//       borderColor: "#2196f3",
//     },
//     "&.Mui-focused fieldset": {
//       borderColor: "#2196f3",
//     },
//   },
// });

// const StyledSelect = styled(Select)({
//   backgroundColor: "white",
//   "& .MuiOutlinedInput-notchedOutline": {
//     borderColor: "#e0e0e0",
//   },
//   "&:hover .MuiOutlinedInput-notchedOutline": {
//     borderColor: "#2196f3",
//   },
//   "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
//     borderColor: "#2196f3",
//   },
// });

// const TransactionRecordsSearchBar = ({ onSearch, onReset }) => {
//   const { t } = useTranslation();
//   const [deviceNumber, setDeviceNumber] = useState("");
//   const [wallet, setWallet] = useState("");
//   const [currency, setCurrency] = useState("");
//   const [internalSettlement, setInternalSettlement] = useState("");
//   const [merchantSettlement, setMerchantSettlement] = useState("");
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);
//   const [anchorEl, setAnchorEl] = useState(null);

//   const handleSearch = () => {
//     onSearch({
//       deviceNumber,
//       wallet,
//       currency,
//       internalSettlement,
//       merchantSettlement,
//       startDate,
//       endDate
//     });
//   };

//   const handleReset = () => {
//     setDeviceNumber("");
//     setWallet("");
//     setCurrency("");
//     setInternalSettlement("");
//     setMerchantSettlement("");
//     setStartDate(null);
//     setEndDate(null);
//     onReset();
//   };

//   const handleCalendarOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleCalendarClose = () => {
//     setAnchorEl(null);
//   };

//   const handleDateSelect = (date) => {
//     if (!startDate) {
//       setStartDate(date);
//     } else if (!endDate && date > startDate) {
//       setEndDate(date);
//       handleCalendarClose();
//     } else {
//       setStartDate(date);
//       setEndDate(null);
//     }
//   };

//   const handleDateConfirm = () => {
//     handleCalendarClose();
//   };

//   const open = Boolean(anchorEl);
//   const id = open ? "date-range-popover" : undefined;

//   return (
//     <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 2, alignItems: "center" }}>
//       <StyledTextField
//         placeholder={t("Device Number")}
//         value={deviceNumber}
//         onChange={(e) => setDeviceNumber(e.target.value)}
//         size="small"
//         sx={{ width: 200 }}
//       />
//       <FormControl sx={{ width: 200 }}>
//         <InputLabel>{t("Wallet App")} :</InputLabel>
//         <StyledSelect
//           value={wallet}
//           onChange={(e) => setWallet(e.target.value)}
//           size="small"
//         >
//           <MenuItem value="">{t("All")}</MenuItem>
//           <MenuItem value="binance">Binance</MenuItem>
// <MenuItem value="huobi">Huobi</MenuItem>
// <MenuItem value="okx">OKX</MenuItem>
// <MenuItem value="kucoin">KuCoin</MenuItem>
// <MenuItem value="poloniex">Poloniex</MenuItem>
// <MenuItem value="trust">Trust Wallet</MenuItem>
// <MenuItem value="imtoken">imToken</MenuItem>
// <MenuItem value="tokenpocket">TokenPocket</MenuItem>
// <MenuItem value="tronlink">TronLink</MenuItem>
//           {/* Add more wallet options */}
//         </StyledSelect>
//       </FormControl>
//       <FormControl sx={{ width: 200 }}>
//         <InputLabel>{t("Trading currency")}</InputLabel>
//         <StyledSelect
//           value={currency}
//           onChange={(e) => setCurrency(e.target.value)}
//           size="small"
//         >
//           <MenuItem value="">{t("All")}</MenuItem>
//           <MenuItem value="">{t("All")}</MenuItem>
//            <MenuItem value="TRX">TRX - Tron</MenuItem>
//  <MenuItem value="ETH">ETH - Ethereum</MenuItem>
//  <MenuItem value="BTC">BTC - Bitcoin</MenuItem>
//  <MenuItem value="BNB">BNB - BNB Chain</MenuItem>
//  <MenuItem value="SOL">SOL - Solana</MenuItem>
//  <MenuItem value="XRP">XRP - XRP</MenuItem>
//  <MenuItem value="LTC">LTC - Litecoin</MenuItem>
//  <MenuItem value="DOGE">DOGE - Dogecoin</MenuItem>
//  <MenuItem value="DOT">DOT - Polkadot</MenuItem>
//  <MenuItem value="HT">HT - Huobi</MenuItem>
//  <MenuItem value="MATIC">MATIC - Polygon</MenuItem>
//  <MenuItem value="EOS">EOS - EOS</MenuItem>
//  <MenuItem value="ADA">ADA - Cardano</MenuItem>
//  <MenuItem value="OP">OP - Optimism</MenuItem>
//  <MenuItem value="CRO">CRO - Cronos Chain</MenuItem>
//  <MenuItem value="BCH">BCH - Bitcoin Cash</MenuItem>
//  <MenuItem value="ALGO">ALGO - Algorand</MenuItem>
//  <MenuItem value="ETC">ETC - Ethereum Classic</MenuItem>
//  <MenuItem value="VTHO">VTHO - VeThor</MenuItem>
//  <MenuItem value="OKB">OKB - OKB</MenuItem>
//  <MenuItem value="OKT">OKT - OKC Token</MenuItem>
//  <MenuItem value="XDAI">XDAI - Gnosis</MenuItem>
//  <MenuItem value="ZRX">ZRX - 0x</MenuItem>
//  <MenuItem value="AUTO">AUTO - AUTOv2</MenuItem>
//  <MenuItem value="ATOM">ATOM - Cosmos Hub</MenuItem>
//  <MenuItem value="CKB">CKB - Nervos</MenuItem>
//  <MenuItem value="KSM">KSM - Kusama</MenuItem>
//  <MenuItem value="FIL">FIL - Filecoin</MenuItem>
//  <MenuItem value="AVAX">AVAX - Avalanche</MenuItem>
//  <MenuItem value="XTZ">XTZ - Tezos</MenuItem>
//           {/* Add more currency options */}
//         </StyledSelect>
//       </FormControl>
//       <FormControl sx={{ width: 200 }}>
//         <InputLabel>{t("Internal settlement")}</InputLabel>
//         <StyledSelect
//           value={internalSettlement}
//           onChange={(e) => setInternalSettlement(e.target.value)}
//           size="small"
//         >
//           <MenuItem value="">{t("All")}</MenuItem>
//           <MenuItem value="Settled">{t("Settled")}</MenuItem>
//           <MenuItem value="Unsettled">{t("Unsettled")}</MenuItem>
//         </StyledSelect>
//       </FormControl>
//       <FormControl sx={{ width: 200 }}>
//         <InputLabel>{t("Settlement with merchant")}</InputLabel>
//         <StyledSelect
//           value={merchantSettlement}
//           onChange={(e) => setMerchantSettlement(e.target.value)}
//           size="small"
//         >
//           <MenuItem value="">{t("All")}</MenuItem>
//           <MenuItem value="Settled">{t("Settled")}</MenuItem>
//           <MenuItem value="Unsettled">{t("Unsettled")}</MenuItem>
//         </StyledSelect>
//       </FormControl>
//       <StyledTextField
//         placeholder={t("Select Date Range")}
//         value={startDate && endDate ? `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}` : ''}
//         onClick={handleCalendarOpen}
//         size="small"
//         sx={{ width: 200 }}
//         InputProps={{
//           readOnly: true,
//         }}
//       />
//       <Popover
//         id={id}
//         open={open}
//         anchorEl={anchorEl}
//         onClose={handleCalendarClose}
//         anchorOrigin={{
//           vertical: 'bottom',
//           horizontal: 'left',
//         }}
//       >
//         <Calendar
//           dueDate={new Date()} // Set this to your maximum allowed date
//           onDateSelect={handleDateSelect}
//           selectedDate={startDate || endDate}
//           onConfirm={handleDateConfirm}
//         />
//       </Popover>
//       <StyledButton variant="contained" size="medium" onClick={handleSearch}>
//         {t("Search")}
//       </StyledButton>
//       <Button variant="outlined" size="medium" onClick={handleReset}>
//         {t("Reset")}
//       </Button>
//     </Box>
//   );
// };

// export default TransactionRecordsSearchBar;



import React, { useState , useEffect } from "react";
import { Box, TextField, Button, Select, MenuItem, FormControl, InputLabel, Popover, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTranslation } from 'react-i18next';
import Calendar from "./transactionCalender";

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

const TransactionRecordsSearchBar = ({ onSearch, onReset }) => {
  const { t } = useTranslation();
  const [deviceNumber, setDeviceNumber] = useState("");
  const [wallet, setWallet] = useState("all");
  const [currency, setCurrency] = useState("all");
  const [internalSettlement, setInternalSettlement] = useState("all");
  const [merchantSettlement, setMerchantSettlement] = useState("all");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  


  const handleSearch = () => {
    onSearch({
      deviceNumber,
      wallet,
      currency,
      internalSettlement,
      merchantSettlement,
      startDate,
      endDate
    });
  };


  const handleReset = () => {
    setDeviceNumber("");
    setWallet("all");
    setCurrency("all");
    setInternalSettlement("all");
    setMerchantSettlement("all");
    setStartDate(null);
    setEndDate(null);
    onReset();
  };


  const handleCalendarOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCalendarClose = () => {
    setAnchorEl(null);
  };

  const handleDateSelect = (date) => {
    if (!startDate) {
      setStartDate(date);
    } else if (!endDate && date > startDate) {
      setEndDate(date);
      handleCalendarClose();
    } else {
      setStartDate(date);
      setEndDate(null);
    }
  };

  const handleDateConfirm = () => {
    handleCalendarClose();
  };

  const open = Boolean(anchorEl);
  const id = open ? "date-range-popover" : undefined;

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 2, alignItems: "center" }}>
      <Typography>{t("Device Number")}</Typography>
      <StyledTextField
        placeholder={t("Enter Device Number")}
        value={deviceNumber}
        onChange={(e) => setDeviceNumber(e.target.value)}
        size="small"
        sx={{ width: 200 }}
      />
      
      <Typography>{t("Wallet App")}</Typography>
      <FormControl sx={{ width: 200 }}>
        {/* <InputLabel>{t("Wallet App")}</InputLabel> */}
        <StyledSelect
          value={wallet}
          onChange={(e) => setWallet(e.target.value)}
          size="small"
        >
          <MenuItem value="all">{t("All")}</MenuItem>
          <MenuItem value="binance">Binance</MenuItem>
 <MenuItem value="huobi">Huobi</MenuItem>
 <MenuItem value="okx">OKX</MenuItem>
 <MenuItem value="kucoin">KuCoin</MenuItem>
 <MenuItem value="poloniex">Poloniex</MenuItem>
 <MenuItem value="trust">Trust Wallet</MenuItem>
 <MenuItem value="imtoken">imToken</MenuItem>
 <MenuItem value="tokenpocket">TokenPocket</MenuItem>
 <MenuItem value="tronlink">TronLink</MenuItem>
          {/* Add more wallet options here */}
        </StyledSelect>
      </FormControl>
      
      <Typography>{t("Trading Currency")}</Typography>
      <FormControl sx={{ width: 200 }}>
        {/* <InputLabel>{t("Trading Currency")}</InputLabel> */}
        <StyledSelect
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
          size="small"
        >
          <MenuItem value="all">{t("All")}</MenuItem>
          <MenuItem value="TRX">TRX - Tron</MenuItem>
 <MenuItem value="ETH">ETH - Ethereum</MenuItem>
 <MenuItem value="BTC">BTC - Bitcoin</MenuItem>
 <MenuItem value="BNB">BNB - BNB Chain</MenuItem>
 <MenuItem value="SOL">SOL - Solana</MenuItem>
 <MenuItem value="XRP">XRP - XRP</MenuItem>
 <MenuItem value="LTC">LTC - Litecoin</MenuItem>
 <MenuItem value="DOGE">DOGE - Dogecoin</MenuItem>
 <MenuItem value="DOT">DOT - Polkadot</MenuItem>
 <MenuItem value="HT">HT - Huobi</MenuItem>
 <MenuItem value="MATIC">MATIC - Polygon</MenuItem>
 <MenuItem value="EOS">EOS - EOS</MenuItem>
 <MenuItem value="ADA">ADA - Cardano</MenuItem>
 <MenuItem value="OP">OP - Optimism</MenuItem>
 <MenuItem value="CRO">CRO - Cronos Chain</MenuItem>
 <MenuItem value="BCH">BCH - Bitcoin Cash</MenuItem>
 <MenuItem value="ALGO">ALGO - Algorand</MenuItem>
 <MenuItem value="ETC">ETC - Ethereum Classic</MenuItem>
 <MenuItem value="VTHO">VTHO - VeThor</MenuItem>
 <MenuItem value="OKB">OKB - OKB</MenuItem>
 <MenuItem value="OKT">OKT - OKC Token</MenuItem>
 <MenuItem value="XDAI">XDAI - Gnosis</MenuItem>
 <MenuItem value="ZRX">ZRX - 0x</MenuItem>
 <MenuItem value="AUTO">AUTO - AUTOv2</MenuItem>
 <MenuItem value="ATOM">ATOM - Cosmos Hub</MenuItem>
 <MenuItem value="CKB">CKB - Nervos</MenuItem>
 <MenuItem value="KSM">KSM - Kusama</MenuItem>
 <MenuItem value="FIL">FIL - Filecoin</MenuItem>
 <MenuItem value="AVAX">AVAX - Avalanche</MenuItem>
 <MenuItem value="XTZ">XTZ - Tezos</MenuItem>
          {/* Add more currency options here */}
        </StyledSelect>
      </FormControl>

      <Typography>{t("Internal Settlement")}</Typography>
      <FormControl sx={{ width: 200 }}>
        {/* <InputLabel>{t("Internal Settlement")}</InputLabel> */}
        <StyledSelect
          value={internalSettlement}
          onChange={(e) => setInternalSettlement(e.target.value)}
          size="small"
        >
          <MenuItem value="all">{t("All")}</MenuItem>
          <MenuItem value="Settled">{t("Settled")}</MenuItem>
          <MenuItem value="Unsettled">{t("Unsettled")}</MenuItem>
        </StyledSelect>
      </FormControl>
      
      <Typography>{t("Settlement with Merchant")}</Typography>
      <FormControl sx={{ width: 200 }}>
        {/* <InputLabel>{t("Settlement with Merchant")}</InputLabel> */}
        <StyledSelect
          value={merchantSettlement}
          onChange={(e) => setMerchantSettlement(e.target.value)}
          size="small"
        >
          <MenuItem value="all">{t("All")}</MenuItem>
          <MenuItem value="Settled">{t("Settled")}</MenuItem>
          <MenuItem value="Unsettled">{t("Unsettled")}</MenuItem>
        </StyledSelect>
      </FormControl>
      
      <Typography>{t("Trading Hours")}</Typography>
      <StyledTextField
        placeholder={t("Select Date Range")}
        value={startDate && endDate ? `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}` : ''}
        onClick={handleCalendarOpen}
        size="small"
        sx={{ width: 200 }}
        InputProps={{
          readOnly: true,
        }}
      />
      
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleCalendarClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Calendar
          dueDate={new Date()} 
          onDateSelect={handleDateSelect}
          selectedDate={startDate || endDate}
          onConfirm={handleDateConfirm}
        />
      </Popover>

      <StyledButton variant="contained" size="medium" onClick={handleSearch}>
        {t("Search")}
      </StyledButton>
      
      <Button variant="outlined" size="medium" onClick={handleReset}>
        {t("Reset")}
      </Button>
    </Box>
  );
};

export default TransactionRecordsSearchBar;
