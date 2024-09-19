import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  Typography,
  Select,
  MenuItem
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

const StyledSelect = styled(Select)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  width: '100%',
}));

const initialAssetState = {
  deviceInfo: { deviceNo: '', brand: '', model: '' },
  userInfo: { userId: '', account: '', nickname: '' },
  wallet: '',
  currency: '',
  amount: '',
  amountUSD: ''
};

const AddAssetPopup = ({ open, handleClose, handleAdd, editAsset }) => {
  const { t } = useTranslation();
  const [asset, setAsset] = useState(initialAssetState);

  useEffect(() => {
    if (open) {
      if (editAsset) {
        setAsset(editAsset);
      } else {
        setAsset(initialAssetState);
      }
    }
  }, [open, editAsset]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setAsset(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setAsset(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = () => {
    handleAdd(asset);
    setAsset(initialAssetState);
    handleClose();
  };

  const walletOptions = [
    { value: 'binance', label: 'Binance' },
    { value: 'huobi', label: 'Huobi' },
    { value: 'okx', label: 'OKX' },
    { value: 'kucoin', label: 'KuCoin' },
    { value: 'poloniex', label: 'Poloniex' },
    { value: 'trust', label: 'Trust Wallet' },
    { value: 'imtoken', label: 'imToken' },
    { value: 'tokenpocket', label: 'TokenPocket' },
    { value: 'tronlink', label: 'TronLink' },
  ];

  return (
    <StyledDialog open={open} onClose={handleClose}>
      <StyledDialogTitle>
        <Typography variant="h6">{editAsset ? t('Edit Asset') : t('Add New Asset')}</Typography>
      </StyledDialogTitle>
      <StyledDialogContent>
        <Box component="form" noValidate autoComplete="off">
          <StyledTextField
            name="deviceInfo.deviceNo"
            label={t('Device Number')}
            value={asset.deviceInfo.deviceNo}
            onChange={handleChange}
          />
          <StyledTextField
            name="deviceInfo.brand"
            label={t('Brand')}
            value={asset.deviceInfo.brand}
            onChange={handleChange}
          />
          <StyledTextField
            name="deviceInfo.model"
            label={t('Model')}
            value={asset.deviceInfo.model}
            onChange={handleChange}
          />
          <StyledTextField
            name="userInfo.userId"
            label={t('User ID')}
            value={asset.userInfo.userId}
            onChange={handleChange}
          />
          <StyledTextField
            name="userInfo.account"
            label={t('Account')}
            value={asset.userInfo.account}
            onChange={handleChange}
          />
          <StyledTextField
            name="userInfo.nickname"
            label={t('Nickname')}
            value={asset.userInfo.nickname}
            onChange={handleChange}
          />
          <StyledSelect
            name="wallet"
            value={asset.wallet}
            onChange={handleChange}
            displayEmpty
            renderValue={(value) => value || t('Select Wallet')}
          >
            {walletOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {t(option.label)}
              </MenuItem>
            ))}
          </StyledSelect>
          <StyledTextField
            name="currency"
            label={t('Currency')}
            value={asset.currency}
            onChange={handleChange}
          />
          <StyledTextField
            name="amount"
            label={t('Amount')}
            value={asset.amount}
            onChange={handleChange}
            type="number"
          />
          <StyledTextField
            name="amountUSD"
            label={t('Amount in USD')}
            value={asset.amountUSD}
            onChange={handleChange}
            type="number"
          />
        </Box>
      </StyledDialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          {t('Cancel')}
        </Button>
        <Button onClick={handleSubmit} color="primary" variant="contained">
          {editAsset ? t('Update') : t('Add')}
        </Button>
      </DialogActions>
    </StyledDialog>
  );
};

export default AddAssetPopup;