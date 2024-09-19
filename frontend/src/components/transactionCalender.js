import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  Box, 
  Typography, 
  Grid, 
  IconButton,
  Button,
  styled,
  Divider
} from '@mui/material';
import {
  ChevronLeft,
  ChevronRight,
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight
} from '@mui/icons-material';

const DayButton = styled(Button)(({ theme, isSelectable, isToday, isSelected }) => ({
  minWidth: 36,
  padding: 6,
  borderRadius: 0,
  color: isSelectable ? theme.palette.text.primary : theme.palette.text.disabled,
  backgroundColor: isSelected ? theme.palette.primary.main : 
                  isToday ? theme.palette.action.selected : 'transparent',
  '&:hover': {
    backgroundColor: isSelectable ? theme.palette.action.hover : 'transparent',
  },
}));

const Calendar = ({ dueDate, onDateSelect, selectedDate = new Date(), onConfirm }) => {
  const { t } = useTranslation();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [tempDate, setTempDate] = useState(selectedDate || new Date());

  const handleConfirm = () => {
    onConfirm(tempDate);
  };

  const handleDateClick = (date) => {
    setTempDate(date);
    onDateSelect(date);
  };

  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const startDay = (year, month) => new Date(year, month, 1).getDay();
  
  const isSelectable = (date) => date <= dueDate;
  const isToday = (date) => {
    const today = new Date();
    return date.getDate() === today.getDate() &&
           date.getMonth() === today.getMonth() &&
           date.getFullYear() === today.getFullYear();
  };
  const isSelected = (date) => {
    if (!selectedDate) return false;
    return date.getDate() === selectedDate.getDate() &&
           date.getMonth() === selectedDate.getMonth() &&
           date.getFullYear() === selectedDate.getFullYear();
  };

  const renderMonth = (year, month) => {
    const days = [];
    const totalDays = daysInMonth(year, month);
    const firstDay = startDay(year, month);

    for (let i = 0; i < firstDay; i++) {
      days.push(<Grid item key={`empty-${i}`} xs={1}><DayButton disabled></DayButton></Grid>);
    }

    for (let i = 1; i <= totalDays; i++) {
      const date = new Date(year, month, i);
      days.push(
        <Grid item key={i} xs={1}>
          <DayButton
            isSelectable={isSelectable(date)}
            isToday={isToday(date)}
            isSelected={isSelected(date)}
            disabled={!isSelectable(date)}
            onClick={() => handleDateClick(date)}
          >
            {i}
          </DayButton>
        </Grid>
      );
    }

    return days;
  };

  const changeMonth = (delta) => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setMonth(newDate.getMonth() + delta);
      return newDate;
    });
  };

  const changeYear = (delta) => {
    setCurrentDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setFullYear(newDate.getFullYear() + delta);
      return newDate;
    });
  };

  const nextMonth = new Date(currentDate);
  nextMonth.setMonth(nextMonth.getMonth() + 1);

  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', borderRadius: 1, border: '1px solid #ddd', p: 2 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <IconButton onClick={() => changeYear(-1)}><KeyboardDoubleArrowLeft /></IconButton>
        <IconButton onClick={() => changeMonth(-1)}><ChevronLeft /></IconButton>
        <Typography variant="h6">
          {t('{{year}} Year {{month}} Month', { year: currentDate.getFullYear(), month: currentDate.getMonth() + 1 })}
        </Typography>
        <Typography variant="h6" sx={{ ml: 2 }}>
          {t('{{year}} Year {{month}} Month', { year: nextMonth.getFullYear(), month: nextMonth.getMonth() + 1 })}
        </Typography>
        <IconButton onClick={() => changeMonth(1)}><ChevronRight /></IconButton>
        <IconButton onClick={() => changeYear(1)}><KeyboardDoubleArrowRight /></IconButton>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={5.5}>
          <Grid container columns={7}>
            {[t('Sun'), t('Mon'), t('Tue'), t('Wed'), t('Thu'), t('Fri'), t('Sat')].map(day => (
              <Grid item key={day} xs={1}>
                <Typography align="center">{day}</Typography>
              </Grid>
            ))}
            {renderMonth(currentDate.getFullYear(), currentDate.getMonth())}
          </Grid>
        </Grid>
        
        <Grid item>
          <Divider orientation="vertical" sx={{ height: '100%', borderRadius: 2 }} />
        </Grid>
        
        <Grid item xs={5.5}>
          <Grid container columns={7}>
            {[t('Sun'), t('Mon'), t('Tue'), t('Wed'), t('Thu'), t('Fri'), t('Sat')].map(day => (
              <Grid item key={day} xs={1}>
                <Typography align="center">{day}</Typography>
              </Grid>
            ))}
            {renderMonth(nextMonth.getFullYear(), nextMonth.getMonth())}
          </Grid>
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
        <Button variant="outlined" sx={{ mr: 1 }} onClick={() => setTempDate(selectedDate)}>{t('CLEAR')}</Button>
        <Button variant="contained" onClick={handleConfirm}>{t('CONFIRM')}</Button>
      </Box>
    </Box>
  );
};

export default Calendar;