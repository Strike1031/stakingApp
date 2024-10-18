import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// material-ui
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

// project import
import Breadcrumb from 'component/Breadcrumb';
import { gridSpacing } from 'config.js';

const withdrawalData = [
  { amount: '1000', date: '2024-10-17', status: 'Pending' },
  { amount: '5000', date: '2024-10-16', status: 'Completed' },
  { amount: '2000', date: '2024-10-15', status: 'Failed' },
];

const WithdrawlHistoryPage = () => {

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Withdrawals
        </Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Amount</strong></TableCell>
                <TableCell><strong>Date</strong></TableCell>
                <TableCell><strong>Status</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {withdrawalData.length > 0 ? (
                withdrawalData.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{row.amount}</TableCell>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>{row.status}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={3} align="center">
                    No withdrawals available.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
};

export default WithdrawlHistoryPage;