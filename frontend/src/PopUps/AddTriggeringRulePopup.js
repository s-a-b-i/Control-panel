import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    width: '600px',
    maxWidth: '100%',
    borderRadius: '16px',
  },
}));

const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  borderTopLeftRadius: '16px',
  borderTopRightRadius: '16px',
}));

const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
  padding: theme.spacing(3),
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  width: '100%',
}));


const AddTriggeringRulePopup = ({ open, handleClose, handleAdd, editRule }) => {
    const { t } = useTranslation();
    const [rule, setRule] = useState({
      deviceNumber: '',
      unitsOfMeasure: '',
      triggerAmount: ''
    });
  
    useEffect(() => {
      if (editRule) {
        setRule(editRule);
      } else {
        setRule({
          deviceNumber: '',
          unitsOfMeasure: '',
          triggerAmount: ''
        });
      }
    }, [editRule]);
  
    const handleChange = (e) => {
      setRule({ ...rule, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = () => {
      handleAdd(rule);
      handleClose();
    };
  
    return (
      <StyledDialog open={open} onClose={handleClose}>
        <StyledDialogTitle>
          <Typography variant="h6">{editRule ? t('Edit Triggering Rule') : t('Add New Triggering Rule')}</Typography>
        </StyledDialogTitle>
        <StyledDialogContent>
          <Box component="form" noValidate autoComplete="off">
            <StyledTextField
              name="deviceNumber"
              label={t('Device Number')}
              value={rule.deviceNumber}
              onChange={handleChange}
              fullWidth
            />
            <StyledTextField
              name="unitsOfMeasure"
              label={t('Units of Measure')}
              value={rule.unitsOfMeasure}
              onChange={handleChange}
              fullWidth
            />
            <StyledTextField
              name="triggerAmount"
              label={t('Trigger Amount')}
              value={rule.triggerAmount}
              onChange={handleChange}
              fullWidth
              type="number"
            />
          </Box>
        </StyledDialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            {t('Cancel')}
          </Button>
          <Button onClick={handleSubmit} color="primary" variant="contained">
            {editRule ? t('Update') : t('Add')}
          </Button>
        </DialogActions>
      </StyledDialog>
    );
  };
  
  export default AddTriggeringRulePopup;