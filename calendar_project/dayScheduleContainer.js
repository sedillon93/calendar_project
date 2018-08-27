import React from 'react';
import DaySchedule from './daySchedule';

class DayScheduleContainer extends React.Component {
  constructor(props) {
    super(props);

    const date = '2018-11-14T08:00:00Z';
    const initialEventData = [
      {
        id: 1,
        startTime: '2018-11-14T16:00:00Z',
        endTime: '2018-11-14T18:00:00Z',
        description: 'Morning Event',
        color: "#2ecc71"
      }, {
        id: 2,
        startTime: '2018-11-14T20:00:00Z',
        endTime: '2018-11-14T23:00:00Z',
        description: 'Afternoon Event',
        color: "#2ecc71"
      }, {
        id: 3,
        startTime: '2018-11-15T06:00:00Z',
        endTime: '2018-11-15T10:00:00Z',
        description: 'Evening Event',
        color: "#e67e22"
      }, {
        id: 3,
        startTime: '2018-11-15T16:00:00Z',
        endTime: '2018-11-15T18:00:00Z',
        description: 'Next Day Event',
        color: "#e74c3c"
      }
    ];

    this.state = {
      date: date,
      events: initialEventData
    };
  }

  handleEventUpdate(event) {
    events.find(event.id === event.target.id);
    // setState with new information (see lab 31-34)
    // update start/end time if changed
    // update duration if changed
    // rerender the schedule view component (?)
  }

  render() {
    const {
      date,
      events
    } = this.state;

    return (
      <DaySchedule
        date={date}
        events={events}
        onEventUpdate={this.handleEventUpdate.bind(this)}
      />
    );
  }
}

export default DayScheduleContainer;