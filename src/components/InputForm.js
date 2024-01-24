import React from "react";
import {
  Grid,
  Container,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import Slider from "@mui/material/Slider";

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

  const handleMonthlyInvestmentChange = (value) => {
    setMonthlyInvestment(value);
    calculateSIP();
  };

  const handleInvestmentPeriodChange = (value) => {
    setInvestmentPeriod(value);
    calculateSIP();
  };

  const handleExpectedReturnRate = (value) => {
    setExpectedReturnRate(value);
    calculateSIP();
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
                    handleMonthlyInvestmentChange(e.target.value);
                  }}
                  color="success"
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
                    handleInvestmentPeriodChange(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography gutterBottom variant="h8">
                Expected Amount Returns (in %) : {expectedReturnRate}
                </Typography>
                <Slider
                  value={expectedReturnRate}
                  onChange={(e) => {
                    handleExpectedReturnRate(e.target.value);
                  }}
                  valueLabelDisplay="auto"
                  step={1}
                  min={1}
                  max={100}
                  sx={{ color: "#66B9BF" }}
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
