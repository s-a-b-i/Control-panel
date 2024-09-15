import React from "react";
import SearchBar from "../components/TriggeringRulesSearchBar";
import TableWithPagination from "../components/TableWithPagination";

const TriggeringRulesPage = () => {
  // Mock data (replace with actual fetch logic)
  const triggeringRulesData = [
  {
    deviceNumber: 'D12345',
    unitsOfMeasure: 'Liters',
    triggerAmount: 100,
  },
  
 
];


  // Styling for margin and spacing
  const containerStyle = {
    padding: "20px",
    margin: "0px 50px",
    maxWidth: "1200px",
  };

  const elementSpacing = {
    marginBottom: "40px",
  };

  return (
    <div style={containerStyle}>
      <div style={elementSpacing}>
        <SearchBar />
      </div>
      <div>
        <TableWithPagination tableType="triggeringRules" data={triggeringRulesData} />
      </div>
    </div>
  );
};

export default TriggeringRulesPage;
