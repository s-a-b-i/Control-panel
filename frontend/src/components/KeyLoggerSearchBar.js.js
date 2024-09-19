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

const KeyLoggerSearchBar = ({ onSearch, onReset }) => {
  const { t } = useTranslation();
  const [deviceNumber, setDeviceNumber] = useState("");
  const [content, setContent] = useState("");
  const [relatedTags, setRelatedTags] = useState("");
  const [packageName, setPackageName] = useState("");
  const [tagNotes, setTagNotes] = useState("");
  const [entryType, setEntryType] = useState("all");

  const handleSearch = () => {
    onSearch({
      deviceNumber,
      content,
      relatedTags,
      packageName,
      tagNotes,
      entryType
    });
  };

  const handleReset = () => {
    setDeviceNumber("");
    setContent("");
    setRelatedTags("");
    setPackageName("");
    setTagNotes("");
    setEntryType("all");
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
      <StyledTextField
        placeholder={t("Content")}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        size="small"
        sx={{ width: 200 }}
      />
      <StyledTextField
        placeholder={t("Related tags")}
        value={relatedTags}
        onChange={(e) => setRelatedTags(e.target.value)}
        size="small"
        sx={{ width: 200 }}
      />
      <StyledTextField
        placeholder={t("Application package name")}
        value={packageName}
        onChange={(e) => setPackageName(e.target.value)}
        size="small"
        sx={{ width: 200 }}
      />
      <StyledTextField
        placeholder={t("Tag Notes")}
        value={tagNotes}
        onChange={(e) => setTagNotes(e.target.value)}
        size="small"
        sx={{ width: 200 }}
      />
      <StyledSelect
        value={entryType}
        onChange={(e) => setEntryType(e.target.value)}
        size="small"
        sx={{ width: 120 }}
      >
        <MenuItem value="all">{t("All")}</MenuItem>
        <MenuItem value="click">{t("Click")}</MenuItem>
        <MenuItem value="enter">{t("Enter")}</MenuItem>
      </StyledSelect>
      <StyledButton variant="contained" size="medium" onClick={handleSearch}>
        {t("Search")}
      </StyledButton>
      <Button variant="outlined" size="medium" onClick={handleReset}>
        {t("Reset")}
      </Button>
    </Box>
  );
};

export default KeyLoggerSearchBar;