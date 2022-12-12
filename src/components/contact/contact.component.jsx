import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { forwardRef } from "react";

const Contact = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <Toolbar sx={{ textAlign: 'center', mt:4}}>
        <Typography variant="h3" sx={{ flexGrow: 1 }}>
          Contact
        </Typography>
      </Toolbar>
      <Box sx={{ 
          display: 'flex', 
          gridTemplateColumns: 'repeat(1, 1fr)', 
          justifyContent: 'center',
        }}
      >
        <Card sx={{ minWidth: 275, m:8, boxShadow: 0, borderRadius: 4 }} style={{ background: '#00bfa5' }}>
          <CardContent>
            <Typography sx={{ fontSize: 26 }} color="common.white" gutterBottom>
              COLLEEN MAILLIE 
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="common.white">
              Colleen Maillie, M.Div., began her studies of Family Systems Theory in 2006 during her 4 units of Clinical Pastoral Education at The University of Tennessee Medical Center in Knoxville.  In 2010 Colleen began her formal studies of Family Systems Theory thru the Post-Graduate Program at The Bowen Center for the Study of the Family at Georgetown in Washington, D.C., completing two years of study and attending symposiums. She is an active member of The Bowen Theory Education Center in Chattanooga where she continues her work in theory and serves as a guest lecturer.          
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="common.white">
              With a Masters of Divinity from Princeton Theological Seminary, Colleen went on to congregational ministry and chaplaincy for 8 years before settling into work in executive search.          
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="common.white">
              Though Colleen does have an undergraduate background rooted in Psychology, she is not a licensed therapist. Colleen offers her services as a coach through the lens of Family Systems Theory for the individual, the couple, the family, and any organization. Colleen also offers workshops to leaders capable of effecting change within their organization.          
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="common.white">
              If you would like to get in touch with Colleen use the form below or email her at <span style={{fontSize: '18px', fontWeight: 'bold'}}>colleen@leadingwithsystems.com</span>
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
})

export default Contact;
