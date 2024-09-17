import React from "react";
import { Box, TextField, Button, MenuItem, Select } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 2 }}>
      <StyledTextField placeholder={t('Device Number')} size="small" sx={{ width: 150 }} />
      <StyledTextField placeholder={t('Customer Tags')} size="small" sx={{ width: 150 }} />
      <StyledTextField placeholder={t('Phone brand')} size="small" sx={{ width: 150 }} />
      <StyledTextField placeholder={t('Model')} size="small" sx={{ width: 150 }} />
      <StyledTextField placeholder={t('User ID')} size="small" sx={{ width: 150 }} />
      <StyledTextField placeholder={t('Account Username')} size="small" sx={{ width: 150 }} />
      <StyledTextField placeholder={t('Nick name')} size="small" sx={{ width: 150 }} />
      <StyledTextField placeholder={t('Proxy Account')} size="small" sx={{ width: 150 }} />
      
      <StyledSelect value="all" size="small" sx={{ width: 150 }}>
        <MenuItem value="all">{t('APP version: all')}</MenuItem>
        <MenuItem value="Greater than or equal to ">{t('Greater than or equal to ')}</MenuItem>
        <MenuItem value="equal">{t('equal')}</MenuItem>
        <MenuItem value="Less than or equal to">{t('Less than or equal to')}</MenuItem>
      </StyledSelect>
      
      <StyledTextField placeholder={t('Example Region')} size="small" sx={{ width: 150 }} />
      <StyledTextField placeholder={t('IP address')} size="small" sx={{ width: 150 }} />
      
      <StyledSelect value="all" size="small" sx={{ width: 150 }}>
        <MenuItem value="all">{t('Icon: all')}</MenuItem>
        <MenuItem value="hide">{t('hide')}</MenuItem>
        <MenuItem value="show">{t('show')}</MenuItem>
      </StyledSelect>
      
      <StyledSelect value="all" size="small" sx={{ width: 150 }}>
        <MenuItem value="all">{t('State: all')}</MenuItem>
        <MenuItem value="Waiting to wake up">{t('Waiting to wake up')}</MenuItem>
      </StyledSelect>
      
      <StyledSelect value="all" size="small" sx={{ width: 150 }}>
        <MenuItem value="all">{t('Google push: all')}</MenuItem>
        <MenuItem value="support">{t('support')}</MenuItem>
        <MenuItem value="not supported">{t('not supported')}</MenuItem>
      </StyledSelect>
      
      <StyledSelect value="all" size="small" sx={{ width: 150 }}>
        <MenuItem value="all">{t('Battery strategy: all')}</MenuItem>
        <MenuItem value="Allowed">{t('Allowed')}</MenuItem>
        <MenuItem value="Denied">{t('Denied')}</MenuItem>
      </StyledSelect>
      
      <StyledSelect value="all" size="small" sx={{ width: 150 }}>
        <MenuItem value="all">{t('Smart Assistant: all')}</MenuItem>
        <MenuItem value="Allowed">{t('Allowed')}</MenuItem>
        <MenuItem value="Denied">{t('Denied')}</MenuItem>
      </StyledSelect>
      
      <StyledSelect value="all" size="small" sx={{ width: 150 }}>
        <MenuItem value="all">{t('Self-start: all')}</MenuItem>
        <MenuItem value="Already set">{t('Already set')}</MenuItem>
        <MenuItem value="Unknown/Not set">{t('Unknown/Not set')}</MenuItem>
      </StyledSelect>
      
      <StyledSelect value="all" size="small" sx={{ width: 150 }}>
        <MenuItem value="all">{t('Finally open: all')}</MenuItem>
        <MenuItem value="Self-start">{t('Self-start')}</MenuItem>
        <MenuItem value="Manual">{t('Manual')}</MenuItem>
      </StyledSelect>
      
      <StyledSelect value="By update time" size="small" sx={{ width: 150 }}>
        <MenuItem value="By update time">{t('Sort by: By update time')}</MenuItem>
        <MenuItem value="By Creation Time ">{t('By Creation Time')}</MenuItem>
      </StyledSelect>
      
      <StyledSelect value="" displayEmpty size="small" sx={{ width: 200 }}>
        <MenuItem value="" disabled>
          {t('Last updated: Please select a time range')}
        </MenuItem>
      </StyledSelect>
      
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
