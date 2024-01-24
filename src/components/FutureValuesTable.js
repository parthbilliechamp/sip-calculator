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
    marginTop: "10px",
    marginBottom: "30px",
    padding: "16px",
  };

  const buttonStyles = {
    backgroundColor: "#07889B",
    marginTop: "16px",
  };

  const tableHeadStyles = {
    backgroundColor: "#07889B",
  };

  const tableHeaderValues = ["Duration (Years)", "SIP Amount", "Future Value"];

  const downloadCSV = () => {
    const csvContent =
      tableHeaderValues.join(",") +
      "\n" +
      data.map((row) => Object.values(row).join(",")).join("\n");

    // Create a Blob containing the CSV data
    const blob = new Blob([csvContent], { type: "text/csv" });

    // Create a download link and trigger a click event to download the file
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "data.csv";
    link.click();
  };

  return (
    <Paper elevation={3} style={paperStyles}>
      <TableContainer className="table-container">
        <Table className="table">
          <TableHead style={tableHeadStyles}>
            <TableRow>
              <TableCell>
                {" "}
                <Typography variant="h6">{tableHeaderValues[0]}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">{tableHeaderValues[1]}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">{tableHeaderValues[2]}</Typography>
              </TableCell>
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
      <Button
        variant="contained"
        color="primary"
        style={buttonStyles}
        onClick={downloadCSV}
        disabled={data.length === 0}
      >
        Download as CSV
      </Button>
    </Paper>
  );
};

export default FutureValuesTable;
