// Summary.js

import React from "react";
import {
  Paper,
  Typography,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import "../assets/styles/Summary.css";

function Summary({ investedAmount, estimatedReturns, totalAmount }) {

  const paperStyles = {
    backgroundColor: "#E2E2E2",
    marginTop: "10px",
    marginBottom: "50px",
  };

  return (
    <Paper elevation={3} className="summary-card" style={paperStyles}>
      <Typography variant="h6" className="summary-title" gutterBottom>
        Investment Summary
      </Typography>
      <Divider className="divider" />

      <TableContainer className="table-container">
        <Table className="table">
          <TableBody>
            <TableRow className="table-row">
              <TableCell>Invested Amount</TableCell>
              <TableCell>
                <strong>${investedAmount}</strong>
              </TableCell>
            </TableRow>
            <TableRow className="table-row">
              <TableCell>Estimated Returns</TableCell>
              <TableCell>
                <strong>${estimatedReturns}</strong>
              </TableCell>
            </TableRow>
            <TableRow className="table-row">
              <TableCell>Total Amount</TableCell>
              <TableCell>
                <strong>${totalAmount}</strong>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default Summary;
