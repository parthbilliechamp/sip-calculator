import React from "react";
import {
  Grid,
  Container,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";

function InputForm({
  monthlyInvestment,
  setMonthlyInvestment,
  investmentPeriod,
  setInvestmentPeriod,
  expectedReturnRate,
  setExpectedReturnRate,
  calculateSIP,
}) {
  const cardStyles = {
    backgroundColor: "#E2E2E2",
    marginTop: 20,
  };

  return (
    <Container>
      <Card style={cardStyles}>
        <CardContent>
          <Typography variant="h6">SIP Details</Typography>
          <br></br>
          <form>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Monthly Investment Amount"
                  fullWidth
                  variant="outlined"
                  type="number"
                  value={monthlyInvestment}
                  onChange={(e) => {
                    setMonthlyInvestment(e.target.value);
                    calculateSIP();
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Investment Period (in years)"
                  fullWidth
                  variant="outlined"
                  type="number"
                  value={investmentPeriod}
                  onChange={(e) => {
                    setInvestmentPeriod(e.target.value);
                    calculateSIP();
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Expected Amount Returns"
                  fullWidth
                  variant="outlined"
                  type="number"
                  value={expectedReturnRate}
                  onChange={(e) => {
                    setExpectedReturnRate(e.target.value);
                    calculateSIP();
                  }}
                />
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Container>
  );
}

export default InputForm;
