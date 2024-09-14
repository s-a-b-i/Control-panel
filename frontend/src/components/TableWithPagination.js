import React, { useState, useEffect } from 'react';
import UserTable from './UserTable';
import DeviceListTable from './DeviceListTable';

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

  const TableComponent = tableType === 'user' ? UserTable : DeviceListTable;

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