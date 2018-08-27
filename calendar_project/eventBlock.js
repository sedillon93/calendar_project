import React from 'react';

class EventBlock extends React.Component {
  constructor(props)
  {
    super(props);
  }

  render () {
    let events = this.props.events;

    return (
      events.map((event, index) => {
        let divStyle = {
          backgroundColor: event.color
        }
        return (
          <div key={ index } className='event-entry' style={ divStyle }>
            <h3>Event: { event.description }</h3>
            <h3>Start Time: { event.startTime }</h3>
            <h3>End Time: { event.endTime }</h3>
          </div>
        )
      })
    )
  }
}

export default EventBlock