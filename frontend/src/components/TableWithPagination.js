import React, { useState, useEffect } from 'react';
import UserTable from './UserTable';
import DeviceListTable from './DeviceListTable';
import ControlRecordsTable from './ControlRecordsTable';
import TransactionHistoryTable from './TransactionRecordsTable';
import AssetRecordsTable from './AssetRecordsTable';
import AddressListTable from './AddressListTable';
import TriggeringRulesTable from './TriggeringRulesTable';
import ApplicationListTable from './ApplicationListTable';
import KeyloggerTable from './KeyLoggerTable.js'; // Import KeyloggerTable

const TableWithPagination = ({ tableType, data }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(15);
  const [paginatedData, setPaginatedData] = useState([]);

  useEffect(() => {
    const startIndex = page * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    setPaginatedData(data.slice(startIndex, endIndex));
  }, [page, rowsPerPage, data]);

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  let TableComponent;
  switch (tableType) {
    case 'user':
      TableComponent = UserTable;
      break;
    case 'device':
      TableComponent = DeviceListTable;
      break;
    case 'controlRecord':
      TableComponent = ControlRecordsTable;
      break;
    case 'transactionHistory':
      TableComponent = TransactionHistoryTable;
      break;
    case 'asset':
      TableComponent = AssetRecordsTable;
      break;
    case 'addressList':
      TableComponent = AddressListTable;
      break;
    case 'triggeringRules':
      TableComponent = TriggeringRulesTable;
      break;
    case 'applicationList':
      TableComponent = ApplicationListTable;
      break;
    case 'keylogger': // Adding KeyloggerTable case
      TableComponent = KeyloggerTable;
      break;
    default:
      TableComponent = UserTable;
  }

  return (
    <TableComponent
      rows={paginatedData}
      page={page}
      rowsPerPage={rowsPerPage}
      setPage={handleChangePage}
      totalItems={data.length}
      handleChangeRowsPerPage={handleChangeRowsPerPage}
    />
  );
};

export default TableWithPagination;
