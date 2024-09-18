import React, { useState, useEffect } from "react";
import { Button, Box, Typography } from "@mui/material";
import SearchBar from "../components/TriggeringRulesSearchBar";
import TriggeringRulesTable from "../components/TriggeringRulesTable";
import AddTriggeringRulePopup from "../PopUps/AddTriggeringRulePopup";
import { useTranslation } from 'react-i18next';
import { fetchTriggeringRules, addTriggeringRule, deleteTriggeringRule, updateTriggeringRule } from '../utils/APIservice';

const TriggeringRulesPage = () => {
  const { t } = useTranslation();
  const [rules, setRules] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [openPopup, setOpenPopup] = useState(false);
  const [searchParams, setSearchParams] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [editRule, setEditRule] = useState(null);

  useEffect(() => {
    fetchRulesList();
  }, [searchParams]);

  const fetchRulesList = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await fetchTriggeringRules(searchParams);
      setRules(result.rules);
      setTotalItems(result.totalItems);
    } catch (error) {
      console.error("Error fetching triggering rules:", error);
      setError("Failed to fetch triggering rules. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (params) => {
    setSearchParams(params);
  };

  const handleAddRule = async (newRule) => {
    try {
      await addTriggeringRule(newRule);
      fetchRulesList();
    } catch (error) {
      console.error("Error adding triggering rule:", error);
      setError("Failed to add triggering rule. Please try again.");
    }
  };

  const handleDeleteRule = async (id) => {
    try {
      await deleteTriggeringRule(id);
      fetchRulesList();
    } catch (error) {
      console.error("Error deleting triggering rule:", error);
      setError("Failed to delete triggering rule. Please try again.");
    }
  };

  const handleEditRule = (rule) => {
    setEditRule(rule);
    setOpenPopup(true);
  };

  const handleUpdateRule = async (updatedRule) => {
    try {
      await updateTriggeringRule(updatedRule._id, updatedRule);
      fetchRulesList();
      setEditRule(null);
    } catch (error) {
      console.error("Error updating triggering rule:", error);
      setError("Failed to update triggering rule. Please try again.");
    }
  };

  const handleOpenPopup = () => {
    setEditRule(null);
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
    setEditRule(null);
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
        <TriggeringRulesTable
          rows={rules}
          onDelete={handleDeleteRule}
          onEdit={handleEditRule}
        />
      )}

      <AddTriggeringRulePopup
        open={openPopup}
        handleClose={handleClosePopup}
        handleAdd={editRule ? handleUpdateRule : handleAddRule}
        editRule={editRule}
      />
    </Box>
  );
};

export default TriggeringRulesPage;