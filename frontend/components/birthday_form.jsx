import React from 'react';
import { Link, withRouter } from 'react-router';

const months = [
  'Month',
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

const dayOptions = () => {
  const days = ["Day"];
  for (let i = 1; i <= 31; i++) {
    days.push(i);
  }
  return days.map((day, i) => (
    <option key={i} value={day}>{day}</option>
  ));
};

const monthOptions = () => {
  return months.map((month, i) => (
    <option key={i} value={month}>{month}</option>
  ));

};

const yearOptions = () => {
  const years = ['Year'];
  for (let i = 1905; i <= 2017; i++) {
    years.push(i);
  }
  return years.map((year, i) => (
    <option key={i} value={year}>{year}</option>
  ));
};

const BirthdayForm = ({handleDateChange}) => {
  return(
    <section>
      <label htmlFor='birthday'>Birthday</label>

      <select onChange={handleDateChange('month')}>
        {monthOptions()}
      </select>
      <select onChange={handleDateChange('day')}>
        {dayOptions()}
      </select>
      <select onChange={handleDateChange('year')}>
        {yearOptions()}
      </select>
    </section>
    );
};

export default BirthdayForm;
