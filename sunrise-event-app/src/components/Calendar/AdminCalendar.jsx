import React, { useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";

const AdminCalendar = ({ events, onEventClick }) => {
  const calendarRef = useRef(null);

  // Navigate to a specific date
  const goToDate = (event) => {
    event.preventDefault();
    const dateInput = event.target.date.value;
    if (calendarRef.current && dateInput) {
      const calendarApi = calendarRef.current.getApi();
      calendarApi.gotoDate(dateInput);
    }
  };

  return (
    <div>
      {/* Date Picker for Navigation */}
      <form onSubmit={goToDate} className="mb-4 flex items-center space-x-2">
        <label className="text-gray-700 font-medium">Go to Date:</label>
        <input
          type="date"
          name="date"
          className="border p-2 rounded"
          required
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Go
        </button>
      </form>

      {/* FullCalendar Component */}
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, listPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,listMonth",
        }}
        events={events}
        eventClick={(info) => onEventClick(info.event.extendedProps)}
        eventContent={(eventInfo) => (
          <div className="cursor-pointer">
            <b>{eventInfo.event.title}</b>
            <p className="text-xs">{eventInfo.event.extendedProps.location}</p>
          </div>
        )}
      />
    </div>
  );
};

export default AdminCalendar;
