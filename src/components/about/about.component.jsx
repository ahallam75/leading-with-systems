import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { forwardRef } from "react";

const About = forwardRef((props, ref) => {
  return (
    <div ref={ref} style={{ marginTop: "100px" }}>
      <Toolbar sx={{ textAlign: 'center' }}>
        <Typography className='text_style' variant="h3" sx={{ flexGrow: 1 }}>
          About
        </Typography>
      </Toolbar>
      <Box sx={{ 
          display: 'flex', 
          gridTemplateColumns: 'repeat(1, 1fr)', 
          justifyContent: 'center',
        }}
      > 
        <Card sx={{ minWidth: 275, m:8, boxShadow: 0, borderRadius: 4, }}>
          <CardContent >
            <Typography sx={{ fontSize: 26 }} color="text.secondary" gutterBottom>
              What is family-systems theory? 
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.primary">
              Family Systems Theory is the exploration of the science of human behavior as it relates to the family. As humans, we long to be in community, and we originate in community – the community of our family.
              <br />
              <br />
              Family Systems Theory offers tools for thinking for the individual, the couple, the family, and any institution or organization. Emotionality and functioning, multi-generational processes, anxiety regulation, and differentiation of self are some of the factors to be considered when searching for increased awareness and better functioning during times of high stress.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
})

export default About;
