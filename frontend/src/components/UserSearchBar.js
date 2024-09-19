import React, { useState } from "react";
import { 
  Box, 
  TextField, 
  Button, 
  Typography, 
  Select, 
  MenuItem, 
  Popover 
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTranslation } from 'react-i18next'; // Import the useTranslation hook
import Calendar from "./Calendar"; // Ensure the Calendar path is correct

const textColor = "#666";

// Styled components for buttons and inputs
const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#2196f3",
  color: "white",
  "&:hover": {
    backgroundColor: "#1976d2",
  },
}));

const StyledTextField = styled(TextField)({
  backgroundColor: "white", // Set background color to white
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
  backgroundColor: "white", // Set background color to white
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
  const { t } = useTranslation(); // Initialize the useTranslation hook
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [registrationTimeFrame, setRegistrationTimeFrame] = useState("");

  const handleCalendarOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCalendarClose = () => {
    setAnchorEl(null);
  };

  const handleDateSelect = (newDate) => {
    setSelectedDate(newDate);
    setRegistrationTimeFrame(`${newDate.toLocaleDateString()}`); // Format as needed
    setAnchorEl(null); // Close the popover after selection
  };

  const open = Boolean(anchorEl);
  const id = open ? "registration-timeframe-popover" : undefined;

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 2 }}>
      <StyledSelect value="" displayEmpty size="small" sx={{ width: 200 }}>
        <MenuItem value="" disabled>
          {t('Please select online status')}
        </MenuItem>
        <MenuItem value="online">{t('Online')}</MenuItem>
        <MenuItem value="offline">{t('Offline')}</MenuItem>
      </StyledSelect>
      
      <StyledTextField placeholder={t('Enter user ID/nickname/account')} size="small" sx={{ width: 200 }} />
      <StyledTextField placeholder={t('Parent user ID (inviter)')} size="small" sx={{ width: 200 }} />
      <StyledTextField placeholder={t('Proxy User Id')} size="small" sx={{ width: 250 }} />
      
      {/* New Registration time frame input with Calendar */}
      <Typography sx={{ color: textColor, alignSelf: 'center' }}>
        {t('Registration time frame')}:
      </Typography>
      <StyledTextField
        placeholder={t('Select a time range')}
        size="small"
        value={registrationTimeFrame}
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
          dueDate={new Date()} // You can customize the max selectable date
          onDateSelect={handleDateSelect}
          selectedDate={selectedDate}
        />
      </Popover>

      <StyledButton variant="contained" size="small">
        {t('Search')}
      </StyledButton>
      <StyledButton variant="contained" size="small">
        {t('Add')}
      </StyledButton>
    </Box>
  );
};

export default SearchBar;
