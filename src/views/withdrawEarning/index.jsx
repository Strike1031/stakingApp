import React from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { Container, Grid, Card, CardContent, Typography, Button, Avatar, Box, TextField } from '@mui/material';

// project import
import Breadcrumb from 'component/Breadcrumb';
import { gridSpacing } from 'config.js';
import { useState } from 'react';

const WithdrawEarningPage = () => {
  const [amount, setAmount] = useState(null);

  const handleAmountClick = (value) => {
    setAmount(value);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4, p: 4, backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
      <form>
        <Grid container spacing={3}>
          {/* Bank Name Field */}
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Bank name:
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Enter your bank name"
            />
          </Grid>

          {/* Bank Account Number */}
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Bank Acc NO:
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Enter your bank account number"
            />
          </Grid>

          {/* Account Name */}
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Acc name:
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Enter account name"
            />
          </Grid>

          {/* Withdrawal Amount Buttons */}
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Withdrawal amount:
            </Typography>
            <Grid container spacing={2}>
              {['1000', '5000', '10000', '50000', '200000', '500000', '1000000'].map((value) => (
                <Grid item xs={4} sm={3} key={value}>
                  <Button
                    variant={amount === value ? 'contained' : 'outlined'}
                    color="secondary"
                    fullWidth
                    onClick={() => handleAmountClick(value)}
                  >
                    {value}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Withdrawal Pin Field */}
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
              Withdrawal Pin:
            </Typography>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Enter your withdrawal pin"
              type="password"
            />
          </Grid>

          {/* Submit Button */}
          <Grid item xs={12}>
            <Button variant="contained" color="error" fullWidth>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};


export default WithdrawEarningPage;
