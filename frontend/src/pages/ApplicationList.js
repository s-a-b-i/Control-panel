import React from "react";
import SearchBar from "../components/ApplicationListSearchBar"; // Assuming you might want a similar search bar
import TableWithPagination from "../components/TableWithPagination";

const ApplicationListPage = () => {
  // Mock data (replace with actual fetch logic)
  const applicationData = [
    {
        id: 1,
        deviceNo: '8e75e09bc22e4fe1',
        brand: 'vivo',
        model: 'V2357A',
        userId: '10001473',
        account: 'afa58',
        nickname: 'xx',
        appIcon: 'path_to_imToken_icon.png',
        appName: 'im.token.app',
        recordingTime: '2024-09-15 17:55:26'
      
    },
    // Add more data objects as needed
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
        <TableWithPagination tableType="applicationList" data={applicationData} />
      </div>
    </div>
  );
};

export default ApplicationListPage;
