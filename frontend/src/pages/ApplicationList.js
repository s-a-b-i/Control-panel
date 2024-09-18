import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import SearchBar from "../components/ApplicationListSearchBar";
import ApplicationListTable from "../components/ApplicationListTable";
import AddApplicationPopup from "../PopUps/AddApplicationPopup";
import { useTranslation } from 'react-i18next';
import { fetchApplications, addApplication, deleteApplication, updateApplication } from '../utils/APIservice';

const ApplicationListPage = () => {
  const { t } = useTranslation();
  const [applications, setApplications] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [openPopup, setOpenPopup] = useState(false);
  const [searchParams, setSearchParams] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [editApplication, setEditApplication] = useState(null);

  useEffect(() => {
    fetchApplicationList();
  }, [searchParams]);

  const fetchApplicationList = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await fetchApplications(searchParams);
      setApplications(result.applications);
      setTotalItems(result.totalItems);
    } catch (error) {
      console.error("Error fetching applications:", error);
      setError("Failed to fetch applications. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (params) => {
    setSearchParams(params);
  };

  const handleAddApplication = async (newApplication) => {
    try {
      await addApplication(newApplication);
      fetchApplicationList();
    } catch (error) {
      console.error("Error adding application:", error);
      setError("Failed to add application. Please try again.");
    }
  };

  const handleDeleteApplication = async (id) => {
    try {
      await deleteApplication(id);
      fetchApplicationList();
    } catch (error) {
      console.error("Error deleting application:", error);
      setError("Failed to delete application. Please try again.");
    }
  };

  const handleEditApplication = (application) => {
    setEditApplication(application);
    setOpenPopup(true);
  };

  const handleUpdateApplication = async (updatedApplication) => {
    try {
      await updateApplication(updatedApplication._id, updatedApplication);
      fetchApplicationList();
      setEditApplication(null);
    } catch (error) {
      console.error("Error updating application:", error);
      setError("Failed to update application. Please try again.");
    }
  };

  const handleOpenPopup = () => {
    setEditApplication(null);
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
    setEditApplication(null);
  };

  return (
    <Box sx={{ padding: "20px", margin: "0px 50px", maxWidth: "1200px" }}>
      <Typography variant="h4" sx={{ mb: 3 }}>{t("Application List")}</Typography>
      
      <Box sx={{ mb: 4 }}>
        <SearchBar onSearch={handleSearch} />
      </Box>
      
      <Box sx={{ mb: 2 }}>
        <Button variant="contained" color="primary" onClick={handleOpenPopup}>
          {t("Add Application")}
        </Button>
      </Box>
      
      <ApplicationListTable
        rows={applications}
        onDelete={handleDeleteApplication}
        onEdit={handleEditApplication}
        isLoading={isLoading}
        error={error}
      />
      
      <AddApplicationPopup
        open={openPopup}
        handleClose={handleClosePopup}
        handleAdd={editApplication ? handleUpdateApplication : handleAddApplication}
        editApplication={editApplication}
      />
    </Box>
  );
};

export default ApplicationListPage;