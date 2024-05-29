import React, { useState } from 'react';

const EventForm = ({ addEvent }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      id: Date.now(),
      title,
      description,
      date
    };
    addEvent(newEvent);
    setTitle('');
    setDescription('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Title" 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required 
      />
      <input 
        type="text" 
        placeholder="Description" 
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required 
      />
      <input 
        type="datetime-local" 
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required 
      />
      <button type="submit">Add Event</button>
    </form>
  );
};

export default EventForm;
