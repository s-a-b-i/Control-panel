import React from "react";
import { Box, TextField, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTranslation } from "react-i18next";  // Import useTranslation

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

const SearchBar = () => {
  const { t } = useTranslation();  // Initialize translation hook

  return (
    <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
      <StyledTextField 
        placeholder={t("Device Number")}  // Translated placeholder
        size="small" 
        sx={{ width: 200 }} 
      />
      <StyledTextField 
        placeholder={t("APP Name")}  // Translated placeholder
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
