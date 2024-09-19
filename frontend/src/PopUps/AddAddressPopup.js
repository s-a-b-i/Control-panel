import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialog-paper': {
    width: '600px', // Increased width
    maxWidth: '100%',
    height: '500px', // Increased height
    maxHeight: '100%',
    borderRadius: '16px', // Rounded corners
  },
}));

const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  borderTopLeftRadius: '16px', // Apply rounded corners to the top-left
  borderTopRightRadius: '16px', // Apply rounded corners to the top-right
}));

const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
  padding: theme.spacing(3), // Increased padding for a more spacious feel
}));

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  marginBottom: theme.spacing(3), // Increased spacing between form controls
  width: '100%',
}));

const AddAddressPopup = ({ open, handleClose, handleAdd, editAddress }) => {
  const { t } = useTranslation();
  const [address, setAddress] = useState({
    currency: '',
    addressCiphertext: '',
    addressTips: '',
    addressType: 'Company Provided',
    remark: 'First time offering'
  });

  useEffect(() => {
    if (editAddress) {
      setAddress(editAddress);
    } else {
      setAddress({
        currency: '',
        addressCiphertext: '',
        addressTips: '',
        addressType: 'Company Provided',
        remark: 'First time offering'
      });
    }
  }, [editAddress]);

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    handleAdd(address);
    handleClose();
  };

  const currencies = [
    { value: 'TRX', label: 'TRX - Tron' },
    { value: 'ETH', label: 'ETH - Ethereum' },
    { value: 'BTC', label: 'BTC - Bitcoin' },
    { value: 'BNB', label: 'BNB - BNB Chain' },
    { value: 'SOL', label: 'SOL - Solana' },
    { value: 'XRP', label: 'XRP - XRP' },
    { value: 'LTC', label: 'LTC - Litecoin' },
    { value: 'DOGE', label: 'DOGE - Dogecoin' },
    { value: 'DOT', label: 'DOT - Polkadot' },
    { value: 'HT', label: 'HT - Huobi' },
    { value: 'MATIC', label: 'MATIC - Polygon' },
    { value: 'EOS', label: 'EOS - EOS' },
    { value: 'ADA', label: 'ADA - Cardano' },
    { value: 'OP', label: 'OP - Optimism' },
    { value: 'CRO', label: 'CRO - Cronos Chain' },
    { value: 'BCH', label: 'BCH - Bitcoin Cash' },
    { value: 'ALGO', label: 'ALGO - Algorand' },
    { value: 'ETC', label: 'ETC - Ethereum Classic' },
    { value: 'VTHO', label: 'VTHO - VeThor' },
    { value: 'OKB', label: 'OKB - OKB' },
    { value: 'OKT', label: 'OKT - OKC Token' },
    { value: 'XDAI', label: 'XDAI - Gnosis' },
    { value: 'ZRX', label: 'ZRX - 0x' },
    { value: 'AUTO', label: 'AUTO - AUTOv2' },
    { value: 'ATOM', label: 'ATOM - Cosmos Hub' },
    { value: 'CKB', label: 'CKB - Nervos' },
    { value: 'KSM', label: 'KSM - Kusama' },
    { value: 'FIL', label: 'FIL - Filecoin' },
    { value: 'AVAX', label: 'AVAX - Avalanche' },
    { value: 'XTZ', label: 'XTZ - Tezos' },
  ];
  

  return (
    <StyledDialog open={open} onClose={handleClose}>
      <StyledDialogTitle>
        <Typography variant="h6">{editAddress ? t('Edit Address') : t('Add New Address')}</Typography>
      </StyledDialogTitle>
      <StyledDialogContent>
        <Box component="form" noValidate autoComplete="off">
          <StyledFormControl>
            <InputLabel id="currency-label">{t('Currency')}</InputLabel>
            <Select
              labelId="currency-label"
              name="currency"
              value={address.currency}
              onChange={handleChange}
              label={t('Currency')}
            >
              {currencies.map((currency) => (
                <MenuItem key={currency.value} value={currency.value}>
                  {currency.label}
                </MenuItem>
              ))}
            </Select>
          </StyledFormControl>

          <StyledFormControl>
            <TextField
              name="addressCiphertext"
              label={t('Address ciphertext')}
              value={address.addressCiphertext}
              onChange={handleChange}
              fullWidth
            />
          </StyledFormControl>

          <StyledFormControl>
            <TextField
              name="addressTips"
              label={t('Address Tips')}
              value={address.addressTips}
              onChange={handleChange}
              fullWidth
            />
          </StyledFormControl>

          <StyledFormControl>
            <InputLabel id="address-type-label">{t('Address Type')}</InputLabel>
            <Select
              labelId="address-type-label"
              name="addressType"
              value={address.addressType}
              onChange={handleChange}
              label={t('Address Type')}
            >
              <MenuItem value="Company Provided">{t('Company Provided')}</MenuItem>
              <MenuItem value="Platform Provided">{t('Platform Provided')}</MenuItem>
            </Select>
          </StyledFormControl>

          <StyledFormControl>
            <TextField
              name="remark"
              label={t('Remark')}
              value={address.remark}
              onChange={handleChange}
              fullWidth
              multiline
              rows={2}
            />
          </StyledFormControl>
        </Box>
      </StyledDialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          {t('Cancel')}
        </Button>
        <Button onClick={handleSubmit} color="primary" variant="contained">
          {editAddress ? t('Update') : t('Add')}
        </Button>
      </DialogActions>
    </StyledDialog>
  );
};

export default AddAddressPopup;
