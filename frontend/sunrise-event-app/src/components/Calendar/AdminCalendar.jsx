import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './AdminCalendar.css'; // Import the CSS file

function AdminCalendar() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('/api/dates')
      .then(response => response.json())
      .then(data => {
        // Assuming data is an array of dates with fields 'title' and 'start'
        const formattedEvents = data.map(date => ({
          title: date.title,
          date: new Date(date.start),
        }));
        setEvents(formattedEvents);
      })
      .catch(error => console.error('Error fetching dates:', error));
  }, []);

  return (
    <div style={{ width: '100%', height: '100%' }}>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        height="auto" // Automatically adjust height
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,dayGridWeek,dayGridDay', // Add views if needed
        }}
        eventColor="#3788d8" // Custom event color
        eventTextColor="#fff" // White text for events
      />
    </div>
  );
}

export default AdminCalendar;