import React, { useState } from "react";
import { 
  Box, 
  TextField, 
  Button, 
  Typography, 
  Select, 
  MenuItem, 
  InputAdornment, 
  Popover 
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useTranslation } from 'react-i18next'; // Import translation hook
import Calendar from "./Calendar"; // Ensure the Calendar path is correct

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
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [controlTime, setControlTime] = useState("");
  const { t } = useTranslation();

  const handleIncrement = () => {
    setControlEnd(prevValue => prevValue + 1);
  };

  const handleDecrement = () => {
    setControlEnd(prevValue => prevValue > 1 ? prevValue - 1 : 1);
  };

  const handleCalendarOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCalendarClose = () => {
    setAnchorEl(null);
  };

  const handleDateSelect = (newDate) => {
    setSelectedDate(newDate);
    setControlTime(`${newDate.toLocaleDateString()}`);
    setAnchorEl(null); // Close the popover after selection
  };

  const open = Boolean(anchorEl);
  const id = open ? "control-time-popover" : undefined;

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 2, alignItems: "center" }}>
    <Typography sx={{ color: "#666" }}>
      {t("Control end, such as:")}
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
      {t("Review status:")}
    </Typography>
    <StyledSelect defaultValue="all" size="small" sx={{ width: 200 }}>
      <MenuItem value="all">{t("all")}</MenuItem>
      <MenuItem value="unreviewed">{t("unreviewed")}</MenuItem>
      <MenuItem value="tagged">{t("tagged")}</MenuItem>
      <MenuItem value="ignore">{t("ignore")}</MenuItem>
    </StyledSelect>

    <Typography sx={{ color: "#666" }}>
      {t("Control time:")}
    </Typography>
    <StyledTextField
      placeholder={t("Select a time range")}
      size="small"
      value={controlTime}
      onClick={handleCalendarOpen}
      sx={{ width: 200 }}
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
        dueDate={new Date()}
        onDateSelect={handleDateSelect}
        selectedDate={selectedDate}
      />
    </Popover>
    
    <StyledButton variant="contained" size="small" sx={{ bgcolor: "#2196f3" }}>
      {t("Search")}
    </StyledButton>
    <StyledButton variant="contained" size="small" sx={{ bgcolor: "#fff", color: "#666", border: "1px solid #e0e0e0" }}>
      {t("Reset")}
    </StyledButton>
  </Box>
);
};

export default SearchBar;