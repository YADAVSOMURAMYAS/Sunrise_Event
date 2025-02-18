import React, { useRef, useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";

const AdminCalendar = ({ events, onEventClick }) => {
  const calendarRef = useRef(null);
  const [isListView, setIsListView] = useState(false);

  // Detect screen width for responsive behavior
  useEffect(() => {
    const handleResize = () => setIsListView(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    <div className="bg-white shadow-xl rounded-2xl p-6 border-4 border-[#FFD700] backdrop-blur-md bg-opacity-90 w-full max-w-5xl mx-auto">
      {/* Date Picker Navigation */}
      <form onSubmit={goToDate} className="mb-4 flex flex-col md:flex-row items-center justify-between gap-3">
        <label className="text-gray-700 font-semibold text-lg">📅 Go to Date:</label>
        <input
          type="date"
          name="date"
          className="border-2 border-gray-300 p-3 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#FF9800] w-full md:w-auto"
          required
        />
        <button
          type="submit"
          className="w-full md:w-auto bg-gradient-to-r from-[#FFC107] to-[#FF9800] text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:scale-105 text-center"
        >
          🔍 Go
        </button>
      </form>

      {/* List View for screens < 1024px */}
      {isListView ? (
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">📅 Upcoming Events</h3>
          {events.length === 0 ? (
            <p className="text-gray-600 text-center">No upcoming events.</p>
          ) : (
            <ul className="space-y-3">
              {events.map((event) => (
                <li
                  key={event.id}
                  className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-[#FF9800] cursor-pointer hover:bg-gray-100 transition"
                  onClick={() => onEventClick(event.extendedProps)}
                >
                  <p className="font-semibold text-[#FF9800]">{event.title}</p>
                  <p className="text-sm text-gray-600">
                    📅 {new Date(event.start).toLocaleDateString()} | 📍 {event.extendedProps.location}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        /* Full Calendar for screens ≥ 1024px */
        <div className="rounded-lg overflow-hidden border border-[#FFD700] shadow-md">
          <FullCalendar
            ref={calendarRef}
            plugins={[dayGridPlugin, listPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
              left: "prev,next",
              center: "title",
              right: "dayGridMonth,listMonth",
            }}
            height="auto"
            contentHeight="auto"
            aspectRatio={1.5} // Ensures proper scaling
            events={events}
            buttonText={{
              today: "Today",
              month: "📆 Month",
              list: "📋 List",
            }}
            customButtons={{
              prev: {
                text: "⬅️",
                click: () => calendarRef.current.getApi().prev(),
              },
              next: {
                text: "➡️",
                click: () => calendarRef.current.getApi().next(),
              },
            }}
            eventClick={(info) => onEventClick(info.event.extendedProps)}
            eventContent={(eventInfo) => (
              <div className="cursor-pointer p-2 bg-white border-l-4 border-[#FF9800] shadow-sm rounded-md text-sm md:text-base">
                <b className="text-[#FF9800]">{eventInfo.event.title}</b>
                <p className="text-gray-600">{eventInfo.event.extendedProps.location}</p>
              </div>
            )}
          />
        </div>
      )}
    </div>
  );
};

export default AdminCalendar;
