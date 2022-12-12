import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { forwardRef } from "react";

const Services = forwardRef((props, ref) => {

  return (
    <div ref={ref}>
      <Toolbar sx={{ textAlign: 'center', mt:8}}>
        <Typography variant="h3" sx={{ flexGrow: 1 }}>
          Services
        </Typography>
      </Toolbar>
      <Box sx={{ 
          gridTemplateColumns: 'repeat(2, 1fr)', 
          justifyContent: 'center',
          display: 'grid'
        }}
      >
        <Card sx={{ minWidth: 275, m:8, boxShadow: 0, borderRadius: 4 }}>
          <CardContent>
            <Typography sx={{ fontSize: 26 }} color="text.secondary" gutterBottom>
              COACHING FOR ORGANIZATIONS
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.primary">
              The family business, the corporate entity, the congregation, the local or federal government – all these structures can benefit from applying Family Systems Theory to their organization. Murray Bowen, founder of Family Systems Theory, recognized that all organisms respond to anxiety in similar ways – be they micro-organisms, mole rats, chimpanzees, or human beings. Thus, Family Systems Theory is a tool for thinking about the emotional system in whatever organizational structure we find ourselves in: home, school, work, social club, US diplomacy.            
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.primary">
              Coaching is available in-person for local congregations, or via Skype or phone due to distance, with travel as needed. Compensation varies.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: 275, m:8, boxShadow: 0, borderRadius: 4 }}>
          <CardContent>
            <Typography sx={{ fontSize: 26 }} color="text.secondary" gutterBottom>
              TRAINING SEMINARS
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.primary">
              The board of directors,  the church council, the organization’s staff, or any prominent lay leaders will benefit from a Family Systems Theory workshop series. These can be tailored to specific issues that have surfaced, or the series can revolve around a more conversational approach, addressing questions as the learning grows.
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.primary">
              The number of sessions, the goal of the workshop, and the number of participants will be considered to assess the length of the series. Compensation varies.
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <Box sx={{ 
        gridTemplateColumns: 'repeat(3, 1fr)', 
        justifyContent: 'center',
        display: 'grid'
      }}
    >
      <Card sx={{ minWidth: 275, m:8, boxShadow: 0, borderRadius: 4 }}>
        <CardContent>
          <Typography sx={{ fontSize: 26 }} color="text.secondary" gutterBottom>
            COACHING FOR INDIVIDUALS 
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.primary">
            While we recognize we are individuals within our system, it can be a comfort to know we are not independent from our system. That which affects others in our home, our social spaces, and our work is bound to affect us. Here we sit back and look at the larger picture in the swirling eddy of life, examine patterns of behavior (in others and ourselves), study our family history, and think about our own role in it all. While we cannot change those around us, we can change ourselves – and by changing ourselves, we can effect change around us.
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.primary">
            Coaching is available in-person for local individuals, or via Skype or phone due to distance.             
          </Typography>
          <Typography sx={{ mb: 1.5, fontSize: 40 }} color="text.primary">
            $65/hr
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 275, m:8, boxShadow: 0, borderRadius: 4 }}>
        <CardContent>
          <Typography sx={{ fontSize: 26 }} color="text.secondary" gutterBottom>
            COACHING FOR COUPLES & FAMILIES
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.primary">
            Sometimes the chaos in our family reaches the point of overwhelm, and we realize we need to find help together. We will think about the underlying issues in the larger context of Family Systems Theory, learn patterns of behavior that go back generations, and consider each persons role in the emotional system. Coaching with families takes place together in a shared space, but imitates one-on-one sessions with each member as the others observe with no cross talk, lowering anxiety and allowing for more objective thinking.            
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.primary">
            Coaching is available in-person for local couples & families, or via Skype or phone due to distance.            
          </Typography>
          <Typography sx={{ mb: 1.5, fontSize: 40 }} color="text.primary">
            $65/hr
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 275, m:8, boxShadow: 0, borderRadius: 4 }}>
        <CardContent>
          <Typography sx={{ fontSize: 26 }} color="text.secondary" gutterBottom>
            COACHING FOR CLERGY
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.primary">
            Often we recognize something is wrong in our congregation because the symptoms become intolerable: gossip, manipulation, warring factions, alliances, over-functioning, under-functioning, heightened emotionality. We might think about the role we play as a leader in our congregation, and how we perpetuate the problems and long to get things back on track. But can a pastor really influence a whole congregation toward health and wholeness? Rabbi Edwin Friedman would say, “Without a doubt.” We will examine the family history of the clergy, the sense of call, and the call between pastor and congregation that led to this point. We will examine the congregation’s history and leadership, and discover ways to use our learnings for the benefit of not only the pastor, but will impact the congregation for years to come.            </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.primary">
            Coaching is available in-person for local clergy, or via Skype or phone due to distance.             </Typography>
          <Typography sx={{ mb: 1.5, fontSize: 40 }} color="text.primary">
            $65/hr
          </Typography>
        </CardContent>
      </Card>
    </Box>
    </div>
  );
})

export default Services;