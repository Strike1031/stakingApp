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
              <Grid container>
                <Grid item xs={12} sm={4}>
                  <img
                    src={userImage}
                    alt="User"
                    style={{ width: '300px', height: '150px', objectFit: 'cover' }}
                  />
                </Grid>
                <Grid item xs={12} sm={8} mt={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
                  <Typography variant="h4" sx={{ ml: 2, textAlign: 'center' }}>
                    Welcome Adams David
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={5} sx={{ mt: 2 }}>
        {/* Balance and Add Button */}
        <Grid item xs={12} sm={4}>
          <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <CardContent sx={{ position: 'relative' }} >
              <Typography variant="h4" pb={3}>Balance</Typography>
              {/* <Typography variant="h6">{user.balance}</Typography> */}
              <Typography variant="h6" pb={3}>350</Typography>
              {/* <Button variant="contained" sx={{ mt: 2 }}>+</Button> */}
              <Button
                variant="contained"
                sx={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  transform: 'translate(-50%, 50%)',
                  width: '40px',
                  height: '40px',
                  minWidth: 'unset',
                }}
              >
                +
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Plan Section */}
        <Grid item xs={12} sm={4}>
          <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <CardContent >
              <Typography variant="h4" pb={3}>Daily Task Done</Typography>
              {/* <Typography variant="h6">{user.plan}</Typography> */}
              <Typography variant="h6" pb={3}>Task1</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Referral Link */}
        <Grid item xs={12} sm={4}>
          <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <CardContent >
              <Typography variant="h4" pb={3}>Total Referrals</Typography>
              <Typography variant="h6" pb={3}>referral</Typography>
              {/* <Typography variant="h6">{user.referralLink}</Typography> */}
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={5} sx={{ mt: 2 }}>
        {/* Left Column (Plan and Referral Link) */}
        <Grid item xs={12} sm={4} sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
          {/* Plan Card */}
          <Card sx={{ flexGrow: 1 }}>
            <CardContent>
              <Typography variant="h4" pb={3}>Plan:</Typography>
              <Typography variant="h6" pb={3}>Crown</Typography>
            </CardContent>
          </Card>

          {/* Referral Link Card */}
          <Card sx={{ flexGrow: 1 }}>
            <CardContent>
              <Typography variant="h4" pb={3}>Referral Link:</Typography>
              <Typography
                variant="h6"
                pb={3}
                sx={{
                  wordBreak: 'break-all',
                  overflowWrap: 'break-word',
                }}
              >
                https://tradefest.vercel.app/referral/12835
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Right Column (Referrals List) */}
        <Grid item xs={12} sm={8} sx={{ display: 'flex', flexDirection: 'column' }}>
          <Card sx={{ flexGrow: 1 }}>
            <CardContent>
              <Typography variant="h6">Referrals</Typography>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
                <Typography>Name</Typography>
                <Typography>Commission</Typography>
                <Typography>Date</Typography>
              </Box>

              {/* Referral List Example */}
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
    </Container >
  );
};

export default Dashboard;
