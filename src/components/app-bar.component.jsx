import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#43a047' }}>
        <Toolbar>
          <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>
            LEADing with systems
          </Typography>
        </Toolbar>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Learn &#x2022; Examine &#x2022; Apply &#x2022; Differentiate
          </Typography>
          <Button variant="outlined" sx={{ mr: 1 }} color="inherit">About</Button>
          <Button variant="outlined" sx={{ mr: 1 }} color="inherit">Contact</Button>
          <Button variant="outlined" color="inherit">Services</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}