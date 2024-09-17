import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Select,
  MenuItem,
  Popover,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTranslation } from 'react-i18next'; // Import translation hook
import Calendar from "./Calendar"; // Ensure the Calendar path is correct

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
  const { t } = useTranslation(); // Hook for translations
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [tradingHours, setTradingHours] = useState("");

  const handleCalendarOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCalendarClose = () => {
    setAnchorEl(null);
  };

  const handleDateSelect = (newDate) => {
    setSelectedDate(newDate);
    setTradingHours(`${newDate.toLocaleDateString()}`); // Format as needed
    setAnchorEl(null); // Close the popover after selection
  };

  const open = Boolean(anchorEl);
  const id = open ? "trading-hours-popover" : undefined;

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 2 }}>
      <StyledTextField
        placeholder={t('Device Number')}
        size="small"
        sx={{ width: 200 }}
      />
      <StyledTextField
        placeholder={t('Payment address')}
        size="small"
        sx={{ width: 400 }}
      />

      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Typography>{t('Address Type')}:</Typography>
        <StyledSelect
          value="Company + Platform"
          size="small"
          sx={{ width: 200 }}
        >
          <MenuItem value="Company + Platform">{t('Company + Platform')}</MenuItem>
          <MenuItem value="company">{t('Company')}</MenuItem>
          <MenuItem value="platform">{t('Platform')}</MenuItem>
          <MenuItem value="Personal">{t('Personal')}</MenuItem>
        </StyledSelect>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Typography>{t('Trading hours')}:</Typography>
        <StyledTextField
          placeholder={t('Select a time range')}
          size="small"
          value={tradingHours}
          onClick={handleCalendarOpen}
          sx={{ width: 250 }}
          readOnly
        />
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleCalendarClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Calendar
            dueDate={new Date()} // You can customize the max selectable date
            onDateSelect={handleDateSelect}
            selectedDate={selectedDate}
          />
        </Popover>
      </Box>

      <StyledButton variant="contained" size="small">
        {t('Search')}
      </StyledButton>

      <StyledButton variant="outlined" size="small">
        {t('Reset')}
      </StyledButton>
    </Box>
  );
};

export default SearchBar;
