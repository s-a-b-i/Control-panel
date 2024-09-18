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
    height: '500px',
    maxHeight: '100%',
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

const AddApplicationPopup = ({ open, handleClose, handleAdd, editApplication }) => {
  const { t } = useTranslation();
  const [application, setApplication] = useState({
    deviceNo: '',
    brand: '',
    model: '',
    userId: '',
    account: '',
    nickname: '',
    appName: '',
    packageName: '',
    tagNotes: ''
  });

  useEffect(() => {
    if (editApplication) {
      setApplication(editApplication);
    } else {
      setApplication({
        deviceNo: '',
        brand: '',
        model: '',
        userId: '',
        account: '',
        nickname: '',
        appName: '',
        packageName: '',
        tagNotes: ''
      });
    }
  }, [editApplication]);

  const handleChange = (e) => {
    setApplication({ ...application, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    handleAdd(application);
    handleClose();
  };

  return (
    <StyledDialog open={open} onClose={handleClose}>
      <StyledDialogTitle>
        <Typography variant="h6">{editApplication ? t('Edit Application') : t('Add New Application')}</Typography>
      </StyledDialogTitle>
      <StyledDialogContent>
        <Box component="form" noValidate autoComplete="off">
          <StyledTextField
            name="deviceNo"
            label={t('Device No.')}
            value={application.deviceNo}
            onChange={handleChange}
          />
          <StyledTextField
            name="brand"
            label={t('Brand')}
            value={application.brand}
            onChange={handleChange}
          />
          <StyledTextField
            name="model"
            label={t('Model')}
            value={application.model}
            onChange={handleChange}
          />
          <StyledTextField
            name="userId"
            label={t('User ID')}
            value={application.userId}
            onChange={handleChange}
          />
          <StyledTextField
            name="account"
            label={t('Account')}
            value={application.account}
            onChange={handleChange}
          />
          <StyledTextField
            name="nickname"
            label={t('Nickname')}
            value={application.nickname}
            onChange={handleChange}
          />
          <StyledTextField
            name="appName"
            label={t('App Name')}
            value={application.appName}
            onChange={handleChange}
          />
          <StyledTextField
            name="packageName"
            label={t('Package Name')}
            value={application.packageName}
            onChange={handleChange}
          />
          <StyledTextField
            name="tagNotes"
            label={t('Tag Notes')}
            value={application.tagNotes}
            onChange={handleChange}
            multiline
            rows={2}
          />
        </Box>
      </StyledDialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          {t('Cancel')}
        </Button>
        <Button onClick={handleSubmit} color="primary" variant="contained">
          {editApplication ? t('Update') : t('Add')}
        </Button>
      </DialogActions>
    </StyledDialog>
  );
};

export default AddApplicationPopup;