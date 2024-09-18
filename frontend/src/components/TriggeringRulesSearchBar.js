import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
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

const TriggeringRulesSearchBar = ({ onSearch, onReset }) => {
  const { t } = useTranslation();
  const [deviceNumber, setDeviceNumber] = useState("");

  const handleSearch = () => {
    onSearch({ deviceNumber });
  };

  const handleReset = () => {
    setDeviceNumber("");
    onReset();
  };

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 2, alignItems: "center" }}>
      <StyledTextField
        placeholder={t("Device Number")}
        value={deviceNumber}
        onChange={(e) => setDeviceNumber(e.target.value)}
        size="small"
        sx={{ width: 200 }}
      />
      <StyledButton variant="contained" size="medium" onClick={handleSearch}>
        {t("Search")}
      </StyledButton>
      <Button variant="outlined" size="medium" onClick={handleReset}>
        {t("Reset")}
      </Button>
    </Box>
  );
};

export default TriggeringRulesSearchBar;