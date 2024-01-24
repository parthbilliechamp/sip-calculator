import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

function SIPChart({ investedAmount, estimatedReturns, totalAmount }) {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const data = {
    labels: ["Invested Amount", "Estimated Returns"],
    datasets: [
      {
        label: "SIP Chart",
        data: [investedAmount, estimatedReturns],
        backgroundColor: ["#66B9BF", "#7adade"],
        borderColor: ["#E2E2E2"],
        borderWidth: 1,
      },
    ],
  };

  return (
    
      <Pie data={data} />
    
  );
}

export default SIPChart;
