import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import SearchBar from "../components/AssetRecordsSeachBar";
import AssetTable from "../components/AssetRecordsTable";
import AddAssetPopup from "../PopUps/AddAssetPopup";
import { useTranslation } from 'react-i18next';
import { fetchAssets, addAsset, deleteAsset, updateAsset } from '../utils/APIservice';

const AssetPage = () => {
  const { t } = useTranslation();
  const [assets, setAssets] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [openPopup, setOpenPopup] = useState(false);
  const [searchParams, setSearchParams] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [editAsset, setEditAsset] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    fetchAssetList();
  }, [searchParams, page, rowsPerPage]);

  const fetchAssetList = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await fetchAssets({
        ...searchParams,
        page: page + 1,
        limit: rowsPerPage
      });
      setAssets(result.assets);
      setTotalItems(result.totalItems);
    } catch (error) {
      console.error("Error fetching assets:", error);
      setError("Failed to fetch assets. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (params) => {
    setSearchParams(params);
    setPage(0);
  };

  const handleReset = () => {
    setSearchParams({});
    setPage(0);
  };

  const handleAddAsset = async (newAsset) => {
    try {
      await addAsset(newAsset);
      fetchAssetList();
      setOpenPopup(false);
    } catch (error) {
      console.error("Error adding asset:", error);
      setError("Failed to add asset. Please try again.");
    }
  };

  const handleDeleteAsset = async (id) => {
    try {
      await deleteAsset(id);
      fetchAssetList();
    } catch (error) {
      console.error("Error deleting asset:", error);
      setError("Failed to delete asset. Please try again.");
    }
  };

  const handleEditAsset = (asset) => {
    setEditAsset(asset);
    setOpenPopup(true);
  };

  const handleUpdateAsset = async (updatedAsset) => {
    try {
      await updateAsset(updatedAsset._id, updatedAsset);
      fetchAssetList();
      setEditAsset(null);
      setOpenPopup(false);
    } catch (error) {
      console.error("Error updating asset:", error);
      setError("Failed to update asset. Please try again.");
    }
  };

  const handleOpenPopup = () => {
    setEditAsset(null);
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
    setEditAsset(null);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box sx={{ minWidth: 650, margin: '10px 60px' }}>
      <Typography variant="h4" sx={{ mb: 3 }}>{t('Asset Management')}</Typography>
      
      <Box mb={5}>
        <SearchBar onSearch={handleSearch} onReset={handleReset} />
        </Box>

        <Box mb={2}>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleOpenPopup}
          sx={{ height: '40px' }}
        >
          {t('Add Asset')}
        </Button>
      </Box>
    
      
      {isLoading ? (
        <Typography>{t('Loading...')}</Typography>
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : (
        <AssetTable
          rows={assets}
          onDelete={handleDeleteAsset}
          onEdit={handleEditAsset}
          page={page}
          rowsPerPage={rowsPerPage}
          setPage={setPage}
          totalItems={totalItems}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
        />
      )}

      <AddAssetPopup
        open={openPopup}
        handleClose={handleClosePopup}
        handleAdd={editAsset ? handleUpdateAsset : handleAddAsset}
        editAsset={editAsset}
      />
    </Box>
  );
};

export default AssetPage;