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