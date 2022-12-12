import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';

export default function BasicCard({cardInfo}) {
  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', }}>
      {cardInfo.map(({id, title, text, icon}) => (
        <Card key={id} sx={{ minWidth: 275, m:4, boxShadow: 0, borderRadius: 4, }} style={{ background: '#00bfa5' }}>
          <CardContent style={{
            display: 'flex',
            justifyContent: 'center',
          }}>
            <Icon style={{ color: 'white', fontSize: "60px" }}>{icon}</Icon>
          </CardContent>
          <CardContent >
            <Typography variant="h5" color="common.white" gutterBottom style={{textAlign: 'center', fontWeight: 'bold'}}>
              {title}
            </Typography>
            <Typography variant="h6" color="common.white" style={{textAlign: 'center'}}>
              {text}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
