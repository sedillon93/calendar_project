import React from 'react';
import ReactDOM from 'react-dom';
import Calendar from './dayScheduleContainer';
import './style/daySchedule.less';

const container = document.createElement('div');
document.body.appendChild(container);

ReactDOM.render(
  <Calendar />,
  container
);