import { Button } from '@mui/material';
import { styled } from '@mui/system';

const CustomActionButton = styled(Button)(({ theme, color }) => {
  let backgroundColor;
  let hoverBackgroundColor;
  let textColor;
  let borderColor;

  switch (color) {
    case 'primary':
      backgroundColor = "#1976d2";
      hoverBackgroundColor = "#1565c0";
      textColor = "white";
      break;
    case 'secondary':
      backgroundColor = "#ffffff";
      hoverBackgroundColor = "#e0e0e0";
      textColor = "#333";
      borderColor = "#b0b0b0";
      break;
    case 'tertiary':
      backgroundColor = "#f44336";
      hoverBackgroundColor = "#d32f2f";
      textColor = "white";
      break;
    default:
      backgroundColor = "#ffffff";
      hoverBackgroundColor = "#e0e0e0";
      textColor = "#666";
      break;
  }

  return {
    backgroundColor,
    color: textColor,
    fontSize: "13px",
    margin: "0 2px",
    padding: "1px 6px",
    textTransform: "none",
    minWidth: "unset",
    border: color === 'secondary' ? `1px solid ${borderColor}` : "none",
    "&:hover": {
      backgroundColor: hoverBackgroundColor,
      borderColor: color === 'secondary' ? borderColor : "none",
    },
    ...(color === 'tertiary' && {
      color: "white !important", // Force white text color for tertiary
    }),
  };
});

export default CustomActionButton;