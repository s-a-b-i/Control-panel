import React from "react";
import { Box, TextField, Button, Select, MenuItem } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTranslation } from "react-i18next";  // Import useTranslation

const textColor = "#666";

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#2196f3",
  color: "white",
  "&:hover": {
    backgroundColor: "#1976d2",
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
  const { t } = useTranslation();  // Initialize translation

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 2 }}>
      <StyledTextField 
        placeholder={t("Device Number")}  // Translated placeholder
        size="small" 
        sx={{ width: 200 }} 
      />
      <StyledTextField 
        placeholder={t("Content")}  // Translated placeholder
        size="small" 
        sx={{ width: 200 }} 
      />
      <StyledTextField 
        placeholder={t("Related tags")}  // Translated placeholder
        size="small" 
        sx={{ width: 200 }} 
      />
      <StyledTextField 
        placeholder={t("Application package name")}  // Translated placeholder
        size="small" 
        sx={{ width: 200 }} 
      />
      <StyledTextField 
        placeholder={t("Tag Notes")}  // Translated placeholder
        size="small" 
        sx={{ width: 200 }} 
      />

      <StyledSelect value="all" size="small" sx={{ width: 100 }}>
        <MenuItem value="all">{t("All")}</MenuItem>  {/* Translated option */}
        <MenuItem value="Click">{t("Click")}</MenuItem>  {/* Translated option */}
        <MenuItem value="enter">{t("Enter")}</MenuItem>  {/* Translated option */}
      </StyledSelect>
      
      <StyledButton variant="contained" size="small">
        {t("Search")}  {/* Translated button */}
      </StyledButton>
      <StyledButton variant="outlined" size="small">
        {t("Reset")}  {/* Translated button */}
      </StyledButton>
    </Box>
  );
};

export default SearchBar;
