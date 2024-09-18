import axios from 'axios';

const API_URL = 'http://localhost:8000/api/v1'; // Replace with your actual API URL

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