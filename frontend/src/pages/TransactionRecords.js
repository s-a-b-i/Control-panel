// TransactionHistoryPage.js
import React, { useState, useEffect } from 'react';
import { Box, Button, Typography } from "@mui/material";
import SearchBar from "../components/TransactionRecordsSearchBar";
import TransactionHistoryTable from "../components/TransactionRecordsTable";
import AddTransactionPopup from "../PopUps/AddTransactionPopup";
import { fetchTransactions, addTransaction, updateTransaction, deleteTransaction } from '../utils/APIservice';
import { useTranslation } from 'react-i18next';

const TransactionHistoryPage = () => {
  const { t } = useTranslation();
  const [transactions, setTransactions] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [openPopup, setOpenPopup] = useState(false);
  const [searchParams, setSearchParams] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [editTransaction, setEditTransaction] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    fetchTransactionsList();
  }, [searchParams, page, rowsPerPage]);

  const fetchTransactionsList = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await fetchTransactions({ ...searchParams, page: page + 1, limit: rowsPerPage });
      setTransactions(result.transactions);
      setTotalItems(result.totalItems);
    } catch (error) {
      console.error("Error fetching transactions:", error);
      setError("Failed to fetch transactions. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (params) => {
    const filteredParams = Object.fromEntries(
      Object.entries(params).filter(([key, value]) => {
        if (key === 'startDate' || key === 'endDate') {
          return value !== null;
        }
        return value !== '' && value !== 'all';
      })
    );
    setSearchParams(filteredParams);
    setPage(0);
  };

  const handleReset = () => {
    setSearchParams({});
    setPage(0);
    fetchTransactionsList();
  };


  const handleAddTransaction = async (newTransaction) => {
    try {
      await addTransaction(newTransaction);
      fetchTransactionsList();
      setOpenPopup(false);
    } catch (error) {
      console.error("Error adding transaction:", error);
      setError("Failed to add transaction. Please try again.");
    }
  };

  const handleDeleteTransaction = async (id) => {
    try {
      await deleteTransaction(id);
      fetchTransactionsList();
    } catch (error) {
      console.error("Error deleting transaction:", error);
      setError("Failed to delete transaction. Please try again.");
    }
  };

  const handleEditTransaction = (transaction) => {
    setEditTransaction(transaction);
    setOpenPopup(true);
  };

  const handleUpdateTransaction = async (updatedTransaction) => {
    try {
      await updateTransaction(updatedTransaction._id, updatedTransaction);
      fetchTransactionsList();
      setEditTransaction(null);
      setOpenPopup(false);
    } catch (error) {
      console.error("Error updating transaction:", error);
      setError("Failed to update transaction. Please try again.");
    }
  };

  const handleOpenPopup = () => {
    setEditTransaction(null);
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
    setEditTransaction(null);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleInternalSettlement = async (id) => {
    try {
      // Implement the internal settlement logic here
      console.log("Internal settlement for transaction:", id);
      // After settlement, refresh the list
      fetchTransactionsList();
    } catch (error) {
      console.error("Error performing internal settlement:", error);
      setError("Failed to perform internal settlement. Please try again.");
    }
  };

  return (
 <Box sx={{ minWidth: 650, margin: '10px 60px' }}>
      <Box mb={5}>
        <SearchBar onSearch={handleSearch} onReset={handleReset} />
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
        <TransactionHistoryTable
          data={transactions}
          page={page}
          rowsPerPage={rowsPerPage}
          totalItems={totalItems}
          onEdit={handleEditTransaction}
          onDelete={handleDeleteTransaction}
          onInternalSettlement={handleInternalSettlement}
          setPage={setPage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
        />
      )}

      <AddTransactionPopup
        open={openPopup}
        handleClose={handleClosePopup}
        handleAdd={editTransaction ? handleUpdateTransaction : handleAddTransaction}
        editTransaction={editTransaction}
      />
    </Box>
  );
};

export default TransactionHistoryPage;