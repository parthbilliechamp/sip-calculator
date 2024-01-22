// FutureValuesTable.js

import React from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Typography,
} from "@mui/material";
import "../assets/styles/FutureValuesTable.css";

const FutureValuesTable = ({ data }) => {

  const paperStyles = {
    backgroundColor: "#E2E2E2",
    marginTop: 20,
    padding: "16px",
  };

  const buttonStyles = {
    backgroundColor: "#07889B",
    marginTop: "16px"
  }

  const tableHeadStyles = {
    backgroundColor: "#07889B",
  }

  return (
    <Paper elevation={3} style={paperStyles}>
      <TableContainer className="table-container">
        <Table className="table">
          <TableHead style={tableHeadStyles}>
            <TableRow>
              <TableCell> <Typography variant="h6">Duration (Years)</Typography></TableCell>
              <TableCell><Typography variant="h6">SIP Amount</Typography></TableCell>
              <TableCell><Typography variant="h6">Future Value</Typography></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.duration} className="table-row">
                <TableCell>{row.duration}</TableCell>
                <TableCell>${row.sipAmount}</TableCell>
                <TableCell>
                  <strong>${row.futureValue}</strong>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" color="primary" style={buttonStyles}>
        Download as CSV
      </Button>
    </Paper>
  );
};

export default FutureValuesTable;
