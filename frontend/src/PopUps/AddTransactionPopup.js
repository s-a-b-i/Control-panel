// AddTransactionPopup.js
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
  InputLabel
} from '@mui/material';
import { useTranslation } from 'react-i18next';

const AddTransactionPopup = ({ open, handleClose, handleAdd, editTransaction }) => {
  const { t } = useTranslation();
  const [transaction, setTransaction] = useState({
    deviceNo: '',
    brand: '',
    model: '',
    userId: '',
    account: '',
    nickname: '',
    wallet: '',
    currency: '',
    amount: '',
    unit: '',
    balance: '',
    paymentAddress1: '',
    companyResult: '',
    paymentAddress2: '',
    internalSettlement: '',
    settlementWith: '',
    merchantSettlement: ''
  });

  useEffect(() => {
    if (editTransaction) {
      setTransaction(editTransaction);
    } else {
      setTransaction({
        deviceNo: '',
        brand: '',
        model: '',
        userId: '',
        account: '',
        nickname: '',
        wallet: '',
        currency: '',
        amount: '',
        unit: '',
        balance: '',
        paymentAddress1: '',
        companyResult: '',
        paymentAddress2: '',
        internalSettlement: '',
        settlementWith: '',
        merchantSettlement: ''
      });
    }
  }, [editTransaction]);

  const handleChange = (e) => {
    setTransaction({ ...transaction, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    handleAdd(transaction);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{editTransaction ? t('Edit Transaction') : t('Add New Transaction')}</DialogTitle>
      <DialogContent>
        <TextField name="deviceNo" label={t('Device No.')} value={transaction.deviceNo} onChange={handleChange} fullWidth margin="normal" />
        <TextField name="brand" label={t('Brand')} value={transaction.brand} onChange={handleChange} fullWidth margin="normal" />
        <TextField name="model" label={t('Model')} value={transaction.model} onChange={handleChange} fullWidth margin="normal" />
        <TextField name="userId" label={t('User ID')} value={transaction.userId} onChange={handleChange} fullWidth margin="normal" />
        <TextField name="account" label={t('Account')} value={transaction.account} onChange={handleChange} fullWidth margin="normal" />
        <TextField name="nickname" label={t('Nickname')} value={transaction.nickname} onChange={handleChange} fullWidth margin="normal" />
        
        <FormControl fullWidth margin="normal">
          <InputLabel>{t('Wallet')}</InputLabel>
          <Select name="wallet" value={transaction.wallet} onChange={handleChange}>
          <MenuItem value="binance">Binance</MenuItem>
<MenuItem value="huobi">Huobi</MenuItem>
<MenuItem value="okx">OKX</MenuItem>
<MenuItem value="kucoin">KuCoin</MenuItem>
<MenuItem value="poloniex">Poloniex</MenuItem>
<MenuItem value="trust">Trust Wallet</MenuItem>
<MenuItem value="imtoken">imToken</MenuItem>
<MenuItem value="tokenpocket">TokenPocket</MenuItem>
<MenuItem value="tronlink">TronLink</MenuItem>

            
            {/* Add more wallet options */}
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel>{t('Currency')}</InputLabel>
          <Select name="currency" value={transaction.currency} onChange={handleChange}>
          <MenuItem value="TRX">TRX - Tron</MenuItem>
<MenuItem value="ETH">ETH - Ethereum</MenuItem>
<MenuItem value="BTC">BTC - Bitcoin</MenuItem>
<MenuItem value="BNB">BNB - BNB Chain</MenuItem>
<MenuItem value="SOL">SOL - Solana</MenuItem>
<MenuItem value="XRP">XRP - XRP</MenuItem>
<MenuItem value="LTC">LTC - Litecoin</MenuItem>
<MenuItem value="DOGE">DOGE - Dogecoin</MenuItem>
<MenuItem value="DOT">DOT - Polkadot</MenuItem>
<MenuItem value="HT">HT - Huobi</MenuItem>
<MenuItem value="MATIC">MATIC - Polygon</MenuItem>
<MenuItem value="EOS">EOS - EOS</MenuItem>
<MenuItem value="ADA">ADA - Cardano</MenuItem>
<MenuItem value="OP">OP - Optimism</MenuItem>
<MenuItem value="CRO">CRO - Cronos Chain</MenuItem>
<MenuItem value="BCH">BCH - Bitcoin Cash</MenuItem>
<MenuItem value="ALGO">ALGO - Algorand</MenuItem>
<MenuItem value="ETC">ETC - Ethereum Classic</MenuItem>
<MenuItem value="VTHO">VTHO - VeThor</MenuItem>
<MenuItem value="OKB">OKB - OKB</MenuItem>
<MenuItem value="OKT">OKT - OKC Token</MenuItem>
<MenuItem value="XDAI">XDAI - Gnosis</MenuItem>
<MenuItem value="ZRX">ZRX - 0x</MenuItem>
<MenuItem value="AUTO">AUTO - AUTOv2</MenuItem>
<MenuItem value="ATOM">ATOM - Cosmos Hub</MenuItem>
<MenuItem value="CKB">CKB - Nervos</MenuItem>
<MenuItem value="KSM">KSM - Kusama</MenuItem>
<MenuItem value="FIL">FIL - Filecoin</MenuItem>
<MenuItem value="AVAX">AVAX - Avalanche</MenuItem>
<MenuItem value="XTZ">XTZ - Tezos</MenuItem>

            {/* Add more currency options */}
          </Select>
        </FormControl>

        <TextField name="amount" label={t('Amount')} value={transaction.amount} onChange={handleChange} fullWidth margin="normal" type="number" />
        <TextField name="unit" label={t('Unit')} value={transaction.unit} onChange={handleChange} fullWidth margin="normal" />
        <TextField name="balance" label={t('Balance')} value={transaction.balance} onChange={handleChange} fullWidth margin="normal" />
        <TextField name="paymentAddress1" label={t('Payment Address 1')} value={transaction.paymentAddress1} onChange={handleChange} fullWidth margin="normal" />
        <TextField name="companyResult" label={t('Company Result')} value={transaction.companyResult} onChange={handleChange} fullWidth margin="normal" />
        <TextField name="paymentAddress2" label={t('Payment Address 2')} value={transaction.paymentAddress2} onChange={handleChange} fullWidth margin="normal" />
        
        <FormControl fullWidth margin="normal">
          <InputLabel>{t('Internal Settlement')}</InputLabel>
          <Select name="internalSettlement" value={transaction.internalSettlement} onChange={handleChange}>
            <MenuItem value="Settled">{t('Settled')}</MenuItem>
            <MenuItem value="Unsettled">{t('Unsettled')}</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel>{t('Settlement With')}</InputLabel>
          <Select name="settlementWith" value={transaction.settlementWith} onChange={handleChange}>
            <MenuItem value="Settled">{t('Settled')}</MenuItem>
            <MenuItem value="Unsettled">{t('Unsettled')}</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel>{t('Merchant Settlement')}</InputLabel>
          <Select name="merchantSettlement" value={transaction.merchantSettlement} onChange={handleChange}>
            <MenuItem value="Settled">{t('Settled')}</MenuItem>
            <MenuItem value="Unsettled">{t('Unsettled')}</MenuItem>
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{t('Cancel')}</Button>
        <Button onClick={handleSubmit} color="primary">{editTransaction ? t('Update') : t('Add')}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddTransactionPopup;