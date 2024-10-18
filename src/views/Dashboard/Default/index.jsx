import React from 'react';

// material-ui
import { useTheme, styled } from '@mui/material/styles';
import { Grid, Card, CardHeader, CardContent, Typography, Divider, LinearProgress, Container, Button, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import userImage from "assets/images/user.png";

// custom style
const FlatCardBlock = styled((props) => <Grid item sm={6} xs={12} {...props} />)(({ theme }) => ({
  padding: '25px 25px',
  borderLeft: '1px solid' + theme.palette.background.default,
  [theme.breakpoints.down('sm')]: {
    borderLeft: 'none',
    borderBottom: '1px solid' + theme.palette.background.default
  },
  [theme.breakpoints.down('md')]: {
    borderBottom: '1px solid' + theme.palette.background.default
  }
}));

// ==============================|| DASHBOARD DEFAULT ||============================== //

const Dashboard = () => {
  const user = useSelector((state) => state.user);
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Grid container spacing={3}>
        {/* Profile Section */}
        <Grid item xs={12}>
          <Card sx={{ display: 'flex', alignItems: 'center', p: 2 }}>
            <CardContent sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
              <img
                src={userImage}
                alt="User"
                style={{ width: '300px', height: '150px', objectFit: 'cover' }}
              />
              <Typography variant="h4" sx={{ ml: 2, textAlign: 'center', flex: 1 }}>
                Welcome Adams David
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Balance and Add Button */}
        <Grid item xs={6} sm={3}>
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h4">Balance</Typography>
              {/* <Typography variant="h6">{user.balance}</Typography> */}
              <Typography variant="h6">350</Typography>
              <Button variant="contained" sx={{ mt: 2 }}>+</Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Plan Section */}
        <Grid item xs={6} sm={3}>
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h4">Plan</Typography>
              {/* <Typography variant="h6">{user.plan}</Typography> */}
              <Typography variant="h6">Crown</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Referral Link */}
        <Grid item xs={12} sm={3}>
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h4">Referral Link:</Typography>
              <Typography variant="h6">https://tradefest.com/referral/502</Typography>
              {/* <Typography variant="h6">{user.referralLink}</Typography> */}
            </CardContent>
          </Card>
        </Grid>

        {/* Daily Task and Referrals */}
        <Grid item xs={6} sm={3}>
          <Card>
            <CardContent>
              <Typography variant="h4">DAILY TASK DONE:</Typography>
              <Typography variant="h6">Task1</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6} sm={3}>
          <Card>
            <CardContent>
              <Typography variant="h4">Total Referrals:</Typography>
              <Typography variant="h6">82</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Referrals Table */}
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Referrals</Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                <Typography>Name</Typography>
                <Typography>Commission</Typography>
                <Typography>Date</Typography>
              </Box>
              {/* Referral List */}
              {/* {user.referrals.map((referral, index) => (
                <Box key={index} sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                  <Typography>{referral.name}</Typography>
                  <Typography>{referral.commission}</Typography>
                  <Typography>{referral.date}</Typography>
                </Box>
              ))} */}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
