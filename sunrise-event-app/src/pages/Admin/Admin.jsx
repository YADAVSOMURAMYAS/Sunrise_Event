import React, { useEffect, useState } from "react";
import AdminCalendar from "../../components/Calendar/AdminCalendar";
import Navbar from "../../components/Navbar/Navbar";

const Admin = () => {
  const [bookings, setBookings] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/events`)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching bookings:", error);
        setLoading(false);
      });
  }, []);
  
  // Convert bookings into calendar format
  const calendarEvents = bookings.map((booking) => ({
    id: booking._id,
    title: booking.eventType,
    start: booking.eventDate,
    extendedProps: {
      eventType: booking.eventType,
      eventDate: booking.eventDate,
      location: booking.location,
      guestCount: booking.guestCount,
      fullName: booking.fullName,
      phone: booking.phone,
      email: booking.email,
      budget: booking.budget,
      specialRequests: booking.specialRequests,
    },
  }));

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6 mt-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Admin Dashboard</h2>

        {/* 📌 Selected Event Details */}
        {selectedEvent && (
          <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
            <h3 className="text-2xl font-semibold mb-4">📌 Event Details</h3>
            <p><strong>Event Type:</strong> {selectedEvent.eventType}</p>
            <p><strong>Date:</strong> {new Date(selectedEvent.eventDate).toLocaleDateString()}</p>
            <p><strong>Location:</strong> {selectedEvent.location}</p>
            <p><strong>Guests:</strong> {selectedEvent.guestCount}</p>
            <p><strong>Client Name:</strong> {selectedEvent.fullName}</p>
            <p><strong>Phone:</strong> {selectedEvent.phone}</p>
            <p><strong>Email:</strong> {selectedEvent.email}</p>
            <p><strong>Budget:</strong> ${selectedEvent.budget}</p>
            <p><strong>Special Requests:</strong> {selectedEvent.specialRequests}</p>
          </div>
        )}

        {/* 📜 Booking List & 📅 Calendar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 📆 Event Calendar */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">📅 Event Calendar</h3>
            <AdminCalendar events={calendarEvents} onEventClick={setSelectedEvent} />
          </div>

          {/* 📜 Booking List */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">📜 Booking List</h3>

            {loading ? (
              <p className="text-gray-600">Loading bookings...</p>
            ) : bookings.length === 0 ? (
              <p className="text-gray-600">No bookings available.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full bg-gray-50 shadow-md rounded-lg border">
                  <thead className="bg-gray-700 text-white">
                    <tr>
                      <th className="px-4 py-2">Event Type</th>
                      <th className="px-4 py-2">Date</th>
                      <th className="px-4 py-2">Location</th>
                      <th className="px-4 py-2">Guests</th>
                      <th className="px-4 py-2">Client</th>
                      <th className="px-4 py-2">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings.map((booking) => (
                      <tr
                        key={booking._id}
                        className="border-t text-center hover:bg-gray-200 cursor-pointer"
                        onClick={() =>
                          setSelectedEvent({
                            eventType: booking.eventType,
                            eventDate: booking.eventDate,
                            location: booking.location,
                            guestCount: booking.guestCount,
                            fullName: booking.fullName,
                            phone: booking.phone,
                            email: booking.email,
                            budget: booking.budget,
                            specialRequests: booking.specialRequests,
                          })
                        }
                      >
                        <td className="px-4 py-2">{booking.eventType}</td>
                        <td className="px-4 py-2">{new Date(booking.eventDate).toLocaleDateString()}</td>
                        <td className="px-4 py-2">{booking.location}</td>
                        <td className="px-4 py-2">{booking.guestCount}</td>
                        <td className="px-4 py-2">{booking.fullName}</td>
                        <td className="px-4 py-2 text-blue-600 font-bold">View Details</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
