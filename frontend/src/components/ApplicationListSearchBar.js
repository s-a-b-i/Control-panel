import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
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

const SearchBar = ({ onSearch }) => {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useState({
    deviceNo: '',
    appName: '',
    packageName: '',
    tagNotes: ''
  });

  const handleChange = (e) => {
    setSearchParams({ ...searchParams, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    onSearch(searchParams);
  };

  const handleReset = () => {
    setSearchParams({
      deviceNo: '',
      appName: '',
      packageName: '',
      tagNotes: ''
    });
    onSearch({});
  };

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 2 }}>
      <StyledTextField 
        name="deviceNo"
        placeholder={t("Device Number")}
        size="small" 
        sx={{ width: 200 }} 
        value={searchParams.deviceNo}
        onChange={handleChange}
      />
      <StyledTextField 
        name="appName"
        placeholder={t("APP Name")}
        size="small" 
        sx={{ width: 200 }} 
        value={searchParams.appName}
        onChange={handleChange}
      />
      <StyledTextField 
        name="packageName"
        placeholder={t("Application package name")}
        size="small" 
        sx={{ width: 200 }} 
        value={searchParams.packageName}
        onChange={handleChange}
      />
      <StyledTextField 
        name="tagNotes"
        placeholder={t("Tag Notes")}
        size="small" 
        sx={{ width: 200 }} 
        value={searchParams.tagNotes}
        onChange={handleChange}
      />
      
      <StyledButton variant="contained" size="small" onClick={handleSearch}>
        {t("Search")}
      </StyledButton>
      
      <StyledButton variant="outlined" size="small" onClick={handleReset}>
        {t("Reset")}
      </StyledButton>
    </Box>
  );
};

export default SearchBar;