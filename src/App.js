import React, { useState } from 'react';
import EventForm from './EventForm';
import EventCalendar from './EventCalendar';

const App = () => {
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  const deleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id));
  };

  return (
    <div className="App">
      <h1>Event Calendar</h1>
      <EventForm addEvent={addEvent} />
      <EventCalendar events={events} deleteEvent={deleteEvent} />
    </div>
  );
};

export default App;
