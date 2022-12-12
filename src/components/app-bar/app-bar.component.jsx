import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function ButtonAppBar({ resultRef1, resultRef2, resultRef3 }) {

  const onClickAbout = () => {
    resultRef1.current.scrollIntoView({ behavior: "smooth" });
  };
  const onClickServices = () => {
    resultRef2.current.scrollIntoView({ behavior: "smooth" });
  };
  const onClickContact = () => {
    resultRef3.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#00bfa5' }}>
        <Toolbar>
          <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>
            LEADing with systems
          </Typography>
        </Toolbar>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Learn &#x2022; Examine &#x2022; Apply &#x2022; Differentiate
          </Typography>
          <Button onClick={onClickAbout} variant="outlined" sx={{ mr: 1 }} color="inherit">About</Button>
          <Button onClick={onClickServices} variant="outlined" color="inherit">Services</Button>
          <Button onClick={onClickContact} variant="outlined" sx={{ mr: 1 }} color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}