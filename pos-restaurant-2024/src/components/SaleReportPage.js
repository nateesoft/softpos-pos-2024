import React from "react";
import useMediaQuery from '@mui/material/useMediaQuery';

function SaleReportPage() {
  const matches = useMediaQuery('(min-width:600px)');
  
  return (
    <div>
      <h2>Sale Report Page</h2>;
      <span>{`(min-width:600px) matches: ${matches}`}</span>
    </div>
);
}

export default SaleReportPage;