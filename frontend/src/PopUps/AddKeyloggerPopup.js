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

const AddKeyloggerPopup = ({ open, handleClose, handleAdd, editEntry }) => {
  const { t } = useTranslation();
  const [entry, setEntry] = useState({
    deviceNumber: '',
    brand: '',
    model: '',
    userId: '',
    account: '',
    nickname: '',
    content: '',
    packageName: '',
    relatedTags: '',
    tagNotes: ''
  });

  useEffect(() => {
    if (editEntry) {
      setEntry(editEntry);
    } else {
      setEntry({
        deviceNumber: '',
        brand: '',
        model: '',
        userId: '',
        account: '',
        nickname: '',
        content: '',
        packageName: '',
        relatedTags: '',
        tagNotes: ''
      });
    }
  }, [editEntry]);

  const handleChange = (e) => {
    setEntry({ ...entry, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const newEntry = {
      ...entry,
      recordingTime: new Date().toISOString() // Add current time
    };
    handleAdd(newEntry);
    handleClose();
  };

  return (
    <StyledDialog open={open} onClose={handleClose}>
      <StyledDialogTitle>
        <Typography variant="h6">{editEntry ? t('Edit Keylogger Entry') : t('Add New Keylogger Entry')}</Typography>
      </StyledDialogTitle>
      <StyledDialogContent>
        <Box component="form" noValidate autoComplete="off">
          <StyledTextField
            name="deviceNumber"
            label={t('Device Number')}
            value={entry.deviceNumber}
            onChange={handleChange}
            fullWidth
          />
          <StyledTextField
            name="brand"
            label={t('Brand')}
            value={entry.brand}
            onChange={handleChange}
            fullWidth
          />
          <StyledTextField
            name="model"
            label={t('Model')}
            value={entry.model}
            onChange={handleChange}
            fullWidth
          />
          <StyledTextField
            name="userId"
            label={t('User ID')}
            value={entry.userId}
            onChange={handleChange}
            fullWidth
          />
          <StyledTextField
            name="account"
            label={t('Account')}
            value={entry.account}
            onChange={handleChange}
            fullWidth
          />
          <StyledTextField
            name="nickname"
            label={t('Nickname')}
            value={entry.nickname}
            onChange={handleChange}
            fullWidth
          />
          <StyledTextField
            name="content"
            label={t('Content')}
            value={entry.content}
            onChange={handleChange}
            fullWidth
            multiline
            rows={3}
          />
          <StyledTextField
            name="packageName"
            label={t('Package Name')}
            value={entry.packageName}
            onChange={handleChange}
            fullWidth
          />
          <StyledTextField
            name="relatedTags"
            label={t('Related Tags')}
            value={entry.relatedTags}
            onChange={handleChange}
            fullWidth
          />
          <StyledTextField
            name="tagNotes"
            label={t('Tag Notes')}
            value={entry.tagNotes}
            onChange={handleChange}
            fullWidth
          />
        </Box>
      </StyledDialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          {t('Cancel')}
        </Button>
        <Button onClick={handleSubmit} color="primary" variant="contained">
          {editEntry ? t('Update') : t('Add')}
        </Button>
      </DialogActions>
    </StyledDialog>
  );
};

export default AddKeyloggerPopup;