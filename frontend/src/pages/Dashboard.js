import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
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
  TextField,
  Popover,
} from '@mui/material';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { format } from 'date-fns';
import Calendar from '../components/Calendar'; // Ensure this path is correct

// Helper function to generate random data
const generateRandomData = (count, startDate) => {
  return Array.from({ length: count }, (_, i) => ({
    date: new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000),
    value: Math.floor(Math.random() * 12)
  }));
};

const Dashboard = () => {
  const { t } = useTranslation();
  const [unit, setUnit] = useState('sky');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [tempDate, setTempDate] = useState(selectedDate);
  const [anchorEl, setAnchorEl] = useState(null);
  const [timeSpent, setTimeSpent] = useState('');
  
  const cardData = [
    { title: t('Total no of users'), value: 1185 },
    { title: t('Total no of groups'), value: 3 },
    { title: t('Total no of chat messages'), value: 38 },
    { title: t('Total no of friends added'), value: 576 },
  ];

  const [graphData, setGraphData] = useState({
    users: generateRandomData(180, selectedDate),
    sessions: generateRandomData(180, selectedDate),
    revenue: generateRandomData(180, selectedDate),
    conversions: generateRandomData(180, selectedDate),
    engagement: generateRandomData(180, selectedDate),
  });

  const handleDateChange = (newDate) => {
    setTempDate(newDate);
    setTimeSpent(format(newDate, 'yyyy-MM-dd'));
  };

  const handleConfirmDate = (confirmedDate) => {
    setSelectedDate(confirmedDate);
    setGraphData({
      users: generateRandomData(180, confirmedDate),
      sessions: generateRandomData(180, confirmedDate),
      revenue: generateRandomData(180, confirmedDate),
      conversions: generateRandomData(180, confirmedDate),
      engagement: generateRandomData(180, confirmedDate),
    });
    setAnchorEl(null);
  };

  const handleTimeSpentClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseCalendar = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Box sx={{ margin: '10px 40px', minWidth: '650px', flexGrow: 1, p: 3, bgcolor: '#f5f5f5' }}>
      
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ bgcolor: '#ffffff', borderRadius: '10px' }}>
              <CardContent>
                <Typography variant="h8" component="div">
                  {card.title}
                </Typography>
                <hr style={{ borderColor: '#f8f8f8', borderWidth: 1, margin: '8px 0' }} />
                <Typography variant="h4" component="div" color='#606060'>
                  {card.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mb: 2, bgcolor: '#ffffff', p: 3, borderRadius: '10px' }}>
        <TextField
          label={t('Time Range')}
          value={timeSpent}
          onClick={handleTimeSpentClick}
          sx={{ mr: 2 }}
        />
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleCloseCalendar}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <Calendar 
            dueDate={new Date()} 
            onDateSelect={handleDateChange}
            selectedDate={tempDate}
            onConfirm={handleConfirmDate}
          />
        </Popover>

        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel>{t('Unit')}</InputLabel>
          <Select
            value={unit}
            label={t('Unit')}
            onChange={(e) => setUnit(e.target.value)}
          >
            <MenuItem value="moon">{t('Moon')}</MenuItem>
            <MenuItem value="sky">{t('Sky')}</MenuItem>
            <MenuItem value="hour">{t('Hour')}</MenuItem>
            <MenuItem value="minute">{t('Minute')}</MenuItem>
          </Select>
        </FormControl>
      </Box>
      
      <Grid container spacing={3}>
        {Object.entries(graphData).map(([key, data], index) => (
          <Grid item xs={12} key={index}>
            <Box sx={{ bgcolor: '#ffffff', p: 3, borderRadius: '10px' }}>
              <Card sx={{ bgcolor: '#f8f8f8', borderRadius: '10px' }}>
                <CardContent>
                  <Typography variant="h6" component="div" sx={{ mb: 2 }}>
                    {t(`${key.charAt(0).toUpperCase() + key.slice(1)} Over Time`)}
                  </Typography>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={data}>
                      <XAxis 
                        dataKey="date" 
                        tickFormatter={(tick) => format(tick, 'yyyy-MM-dd')}
                      />
                      <YAxis 
                        ticks={[0, 2, 4, 6, 8, 10, 12]}
                        domain={[0, 12]}
                      />
                      <Tooltip 
                        labelFormatter={(label) => format(label, 'yyyy-MM-dd')}
                      />
                      <Line type="monotone" dataKey="value" stroke="#C70039" />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;