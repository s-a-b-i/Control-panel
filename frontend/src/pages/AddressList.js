import React, { useState, useEffect } from "react";
import { Button, Box, Typography } from "@mui/material";
import SearchBar from "../components/AddressListSearchBar";
import AddressListTable from "../components/AddressListTable";
import AddAddressPopup from "../PopUps/AddAddressPopup";
import { useTranslation } from 'react-i18next';
import { fetchAddresses, addAddress, deleteAddress, updateAddress } from '../utils/APIservice';

const AddressListPage = () => {
  const { t } = useTranslation();
  const [addresses, setAddresses] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [openPopup, setOpenPopup] = useState(false);
  const [searchParams, setSearchParams] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [editAddress, setEditAddress] = useState(null);

  useEffect(() => {
    fetchAddressList();
  }, [searchParams]);

  const fetchAddressList = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await fetchAddresses(searchParams);
      setAddresses(result.addresses);
      setTotalItems(result.totalItems);
    } catch (error) {
      console.error("Error fetching addresses:", error);
      setError("Failed to fetch addresses. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (params) => {
    setSearchParams(params);
  };

  const handleAddAddress = async (newAddress) => {
    try {
      await addAddress(newAddress);
      fetchAddressList();
    } catch (error) {
      console.error("Error adding address:", error);
      setError("Failed to add address. Please try again.");
    }
  };

  const handleDeleteAddress = async (id) => {
    try {
      await deleteAddress(id);
      fetchAddressList();
    } catch (error) {
      console.error("Error deleting address:", error);
      setError("Failed to delete address. Please try again.");
    }
  };

  const handleEditAddress = (address) => {
    setEditAddress(address);
    setOpenPopup(true);
  };

  const handleUpdateAddress = async (updatedAddress) => {
    try {
      await updateAddress(updatedAddress._id, updatedAddress);
      fetchAddressList();
      setEditAddress(null);
    } catch (error) {
      console.error("Error updating address:", error);
      setError("Failed to update address. Please try again.");
    }
  };

  const handleOpenPopup = () => {
    setEditAddress(null);
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
    setEditAddress(null);
  };

  const handleResetSearch = () => {
    setSearchParams({});
  };

  return (
    <Box sx={{   mainWidth: 650 , margin: '10px 60px'}}>
      <Box mb={5}>
        <SearchBar onSearch={handleSearch} onReset={handleResetSearch} />
      </Box>
      <Box mb={2}>
        <Button variant="contained" color="primary" onClick={handleOpenPopup}>
          {t('ADD')}
        </Button>
      </Box>

      {isLoading ? (
        <Typography>{t('Loading...')}</Typography>
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : (
        <AddressListTable
          rows={addresses}
          onDelete={handleDeleteAddress}
          onEdit={handleEditAddress}
        />
      )}

      <AddAddressPopup
        open={openPopup}
        handleClose={handleClosePopup}
        handleAdd={editAddress ? handleUpdateAddress : handleAddAddress}
        editAddress={editAddress}
      />
    </Box>
  );
};

export default AddressListPage;