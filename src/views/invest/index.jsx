import React from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { Container, Grid, Card, CardContent, Typography, Button, Avatar, Box } from '@mui/material';

// project import
import Breadcrumb from 'component/Breadcrumb';
import { gridSpacing } from 'config.js';
import AiAvatar from "assets/images/ai.png";

const plans = [
  { status: 'Mine', enabled: true, amount: 'NGN50,000', buttonText: 'Mine', buttonColor: 'primary' },
  { status: 'Mining', enabled: true, amount: 'Enabled', buttonText: 'Mining', buttonColor: 'info' },
  { status: 'Claim', enabled: true, amount: 'Enabled', buttonText: 'Claim', buttonColor: 'primary' },
  { status: 'Disabled', enabled: false, amount: 'Enabled', buttonText: 'Disabled', buttonColor: 'secondary' },
];

const InvestPage = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Grid container spacing={4}>
        {plans.map((plan, index) => (
          <Grid item xs={12} sm={6} md={6} key={index} px={10}>
            <Card sx={{ padding: 2, borderRadius: '16px', backgroundColor: '#8a82f0', color: 'white' }}>
              <CardContent>
                <Box display="flex" justifyContent="center">
                  <Avatar
                    src={AiAvatar}
                    alt="Avatar"
                    sx={{ width: 60, height: 60 }}
                  />
                </Box>
                <Typography variant="h5" component="div" sx={{ textAlign: 'center', mt: 2 }}>
                  Mine Ai
                </Typography>
                <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>
                  Zeetech org has provided their user with an AI mining robot that helps them mine their coin
                  with ease as they go on with their normal daily activities.
                </Typography>

                <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ mt: 4 }}>
                  <Typography variant="button" sx={{ padding: '8px 16px', border: '1px solid white', borderRadius: '24px' }}>
                    {plan.amount}
                  </Typography>
                  <Button variant="contained" color={plan.buttonColor} sx={{ borderRadius: '24px' }}>
                    {plan.buttonText}
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default InvestPage;