import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import SearchBar from "../components/KeyLoggerSearchBar.js";
import KeyloggerTable from "../components/KeyLoggerTable.js";
import AddKeyloggerPopup from "../PopUps/AddKeyloggerPopup.js";
import { useTranslation } from 'react-i18next';
import { fetchKeyloggerData, addKeyloggerEntry, deleteKeyloggerEntry, updateKeyloggerEntry } from '../utils/APIservice';

const KeyloggerPage = () => {
  const { t } = useTranslation();
  const [entries, setEntries] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [openPopup, setOpenPopup] = useState(false);
  const [searchParams, setSearchParams] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [editEntry, setEditEntry] = useState(null);

  useEffect(() => {
    fetchEntriesList();
  }, [searchParams]);

  const fetchEntriesList = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await fetchKeyloggerData(searchParams);
      setEntries(result.entries);
      setTotalItems(result.totalItems);
    } catch (error) {
      console.error("Error fetching keylogger entries:", error);
      setError("Failed to fetch keylogger entries. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (params) => {
    setSearchParams(params);
  };

  const handleAddEntry = async (newEntry) => {
    try {
      await addKeyloggerEntry(newEntry);
      fetchEntriesList();
    } catch (error) {
      console.error("Error adding keylogger entry:", error);
      setError("Failed to add keylogger entry. Please try again.");
    }
  };

  const handleDeleteEntry = async (id) => {
    try {
      await deleteKeyloggerEntry(id);
      fetchEntriesList();
    } catch (error) {
      console.error("Error deleting keylogger entry:", error);
      setError("Failed to delete keylogger entry. Please try again.");
    }
  };

  const handleEditEntry = (entry) => {
    setEditEntry(entry);
    setOpenPopup(true);
  };

  const handleUpdateEntry = async (updatedEntry) => {
    try {
      await updateKeyloggerEntry(updatedEntry._id, updatedEntry);
      fetchEntriesList();
      setEditEntry(null);
    } catch (error) {
      console.error("Error updating keylogger entry:", error);
      setError("Failed to update keylogger entry. Please try again.");
    }
  };

  const handleOpenPopup = () => {
    setEditEntry(null);
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
    setEditEntry(null);
  };

  const handleResetSearch = () => {
    setSearchParams({});
  };

  return (
    <Box sx={{ minWidth: 650, margin: '10px 60px' }}>
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
        <KeyloggerTable
          rows={entries}
          onDelete={handleDeleteEntry}
          onEdit={handleEditEntry}
        />
      )}

      <AddKeyloggerPopup
        open={openPopup}
        handleClose={handleClosePopup}
        handleAdd={editEntry ? handleUpdateEntry : handleAddEntry}
        editEntry={editEntry}
      />
    </Box>
  );
};

export default KeyloggerPage;