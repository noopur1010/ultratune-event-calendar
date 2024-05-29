import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import './EventCalendar.css';

const EventCalendar = ({ events, deleteEvent }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleEventClick = (clickInfo) => {
    deleteEvent(clickInfo.event.id);
  };

  const filteredEvents = events.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderEventContent = (eventInfo) => (
    <>
      <div>{eventInfo.event.title}</div>
      <div className="tooltip">
        {eventInfo.event.extendedProps.description}
      </div>
    </>
  );

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search events" 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={filteredEvents.map(event => ({
          id: event.id,
          title: event.title,
          start: event.date,
          extendedProps: { description: event.description }
        }))}
        eventContent={renderEventContent}
        eventClick={handleEventClick}
      />
    </div>
  );
};

export default EventCalendar;
