// HomePage.js

import React, { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar";
import InputForm from "../components/InputForm";
import Summary from "../components/Summary";
import FutureValuesTable from "../components/FutureValuesTable";
import { Grid, Container, Paper } from "@mui/material";
import SIPChart from "../components/SIPChart";

function HomePage() {
  const calculateSIP = () => {
    const futureValue =
      monthlyInvestment *
      (((1 + expectedReturnRate / 1200) ** (investmentPeriod * 12) - 1) /
        (expectedReturnRate / 1200));

    setInvestedAmount((monthlyInvestment * investmentPeriod * 12).toFixed(2));
    setTotalAmount(futureValue.toFixed(2));
    setEstimatedReturns((totalAmount - investedAmount).toFixed(2));
  };

  const calculateSIPFor = (investmentPeriod) => {
    const futureValue =
      monthlyInvestment *
      (((1 + expectedReturnRate / 1200) ** (investmentPeriod * 12) - 1) /
        (expectedReturnRate / 1200));

    return futureValue.toFixed(2);
  };

  const calculateFutureValuesData = () => {
    const interval = Math.ceil(investmentPeriod / 10);
    const data = [];

    for (let i = 1; i <= investmentPeriod; i += interval) {
      const futureValue = calculateSIPFor(i);
      data.push({
        duration: i,
        sipAmount: monthlyInvestment * i * 12,
        futureValue: futureValue,
      });
    }

    return data;
  };

  const [monthlyInvestment, setMonthlyInvestment] = useState(500);
  const [investmentPeriod, setInvestmentPeriod] = useState(10);
  const [expectedReturnRate, setExpectedReturns] = useState(10);

  const [investedAmount, setInvestedAmount] = useState(0);
  const [estimatedReturns, setEstimatedReturns] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    calculateSIP();
  });

  return (
    <div>
      <NavigationBar />
      <Paper
        elevation={3}
        style={{
          width: "90%",
          margin: "25px auto",
          backgroundColor: "#EEAA7B",
        }}
      >
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={7}>
              <InputForm
                monthlyInvestment={monthlyInvestment}
                setMonthlyInvestment={setMonthlyInvestment}
                investmentPeriod={investmentPeriod}
                setInvestmentPeriod={setInvestmentPeriod}
                expectedReturnRate={expectedReturnRate}
                setExpectedReturnRate={setExpectedReturns}
                calculateSIP={calculateSIP}
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <Summary
                investedAmount={investedAmount}
                estimatedReturns={estimatedReturns}
                totalAmount={totalAmount}
              />
            </Grid>
          </Grid>
        </Container>

        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={7}>
              <FutureValuesTable data={calculateFutureValuesData()} />
            </Grid>
            <Grid item xs={12} sm={5}>
              <SIPChart
                investedAmount={investedAmount}
                estimatedReturns={estimatedReturns}
                totalAmount={totalAmount}
              ></SIPChart>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </div>
  );
}

export default HomePage;
