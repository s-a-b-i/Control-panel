import React, { useState } from 'react';
import { 
  Box, 
  Card, 
  CardContent, 
  Grid, 
  Typography, 
  Select, 
  MenuItem, 
  FormControl, 
  InputLabel,
  TextField
} from '@mui/material';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { format } from 'date-fns';

const generateRandomData = (count) => {
  return Array.from({ length: count }, (_, i) => ({
    date: new Date(2024, 3 + Math.floor(i / 30), 1 + (i % 30)), // Now storing Date object
    value: Math.floor(Math.random() * 10)
  }));
};

const Dashboard = () => {
  const [unit, setUnit] = useState('sky'); // Default to 'Sky'
  const [startDate, setStartDate] = useState(new Date(2024, 3, 1)); // Starting date

  const cardData = [
    { title: 'Total Users', value: Math.floor(Math.random() * 10000) },
    { title: 'Active Sessions', value: Math.floor(Math.random() * 1000) },
    { title: 'Revenue', value: `$${(Math.random() * 10000).toFixed(2)}` },
    { title: 'Conversion Rate', value: `${(Math.random() * 100).toFixed(2)}%` },
  ];

  const graphData = {
    users: generateRandomData(180),
    sessions: generateRandomData(180),
    revenue: generateRandomData(180),
    conversions: generateRandomData(180),
    engagement: generateRandomData(180),
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3, bgcolor: '#f5f5f5' }}>
      <Grid container spacing={3} sx={{ mb: 3 }}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6" component="div">
                  {card.title}
                </Typography>
                <Typography variant="h4" component="div">
                  {card.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mb: 3 }}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Start Date"
            value={startDate}
            onChange={(newValue) => setStartDate(newValue)}
            renderInput={(params) => <TextField {...params} sx={{ mr: 2 }} />}
          />
        </LocalizationProvider>

        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel>Unit</InputLabel>
          <Select
            value={unit}
            label="Unit"
            onChange={(e) => setUnit(e.target.value)}
          >
            <MenuItem value="moon">Moon</MenuItem>
            <MenuItem value="sky">Sky</MenuItem>
            <MenuItem value="hour">Hour</MenuItem>
            <MenuItem value="minute">Minute</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Grid container spacing={3}>
        {Object.entries(graphData).map(([key, data], index) => (
          <Grid item xs={12} key={index}>
            <Card sx={{ bgcolor: '#ffffff' }}>
              <CardContent>
                <Typography variant="h6" component="div" sx={{ mb: 2 }}>
                  {key.charAt(0).toUpperCase() + key.slice(1)} Over Time
                </Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="date" 
                      tickFormatter={(tick) => format(tick, 'yyyy-MM-dd')} // Format Date object
                    />
                    <YAxis />
                    <Tooltip 
                      labelFormatter={(label) => format(label, 'yyyy-MM-dd')} // Format Date object
                    />
                    <Line type="monotone" dataKey="value" stroke="#C70039" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;
