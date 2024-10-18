import React from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { Container, Grid, Card, CardContent, Typography, Button } from '@mui/material';

// project import
import Breadcrumb from 'component/Breadcrumb';
import { gridSpacing } from 'config.js';

const plans = [
  { level: 'Regular', amount: 2000, taskPerDay: 1, incomePerDay: 250 },
  { level: 'Crown', amount: 3000, taskPerDay: 2, incomePerDay: 300 },
  { level: 'Regular2', amount: 4000, taskPerDay: 3, incomePerDay: 450 },
  { level: 'Regular3', amount: 5000, taskPerDay: 4, incomePerDay: 650 },
  { level: 'Pro', amount: 6000, taskPerDay: 4, incomePerDay: 800 },
];

const TaskCenterPage = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Grid container spacing={4}>
        {plans.map((plan, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ textAlign: 'center', padding: '16px', borderRadius: '8px' }}>
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  {plan.level}
                </Typography>
                <Typography variant="body1">
                  <strong>Invest level:</strong> {plan.level}
                </Typography>
                <Typography variant="body1">
                  <strong>Amount:</strong> {plan.amount}
                </Typography>
                <Typography variant="body1">
                  <strong>Task per day:</strong> {plan.taskPerDay}
                </Typography>
                <Typography variant="body1">
                  <strong>Income per day:</strong> {plan.incomePerDay}
                </Typography>
              </CardContent>
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                subscribe
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default TaskCenterPage;
