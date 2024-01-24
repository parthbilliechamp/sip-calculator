import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import '../assets/styles/NavigationBar.css';

function NavigationBar() {
  
  return (
      <AppBar style={{backgroundColor: '#07889B'}}>
        <Toolbar>
          <Typography variant="h6">SIP Calculator</Typography>
        </Toolbar>
      </AppBar>
  );
};

export default NavigationBar;
