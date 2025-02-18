import React, { useEffect, useState } from "react";
import AdminCalendar from "../../components/Calendar/AdminCalendar";
import Navbar from "../../components/Navbar/Navbar";
import { motion } from "framer-motion";

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

  const today = new Date();
  
  const calendarEvents = bookings.map((booking) => ({
    id: booking._id,
    title: booking.eventType,
    start: booking.eventDate,
    extendedProps: { ...booking },
    className: new Date(booking.eventDate) < today ? "text-gray-500" : "", // Grayscale past events
  }));

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6 mt-16">
        <h2 className="text-4xl font-extrabold text-black text-center mb-8">
          Admin Dashboard
        </h2>

        {/* Selected Event Details */}
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white shadow-xl rounded-xl p-6 mb-6 border-4 border-[#FFD700] backdrop-blur-md bg-opacity-90"
          >
            <h3 className="text-2xl font-semibold text-[#FF9800] mb-4">
              📌 Event Details
            </h3>
            <p><strong>Event Type:</strong> {selectedEvent.eventType}</p>
            <p><strong>Date:</strong> {new Date(selectedEvent.eventDate).toLocaleDateString()}</p>
            <p><strong>Location:</strong> {selectedEvent.location}</p>
            <p><strong>Guests:</strong> {selectedEvent.guestCount}</p>
            <p><strong>Client Name:</strong> {selectedEvent.fullName}</p>
            <p><strong>Phone:</strong> {selectedEvent.phone}</p>
            <p><strong>Email:</strong> {selectedEvent.email}</p>
            <p><strong>Budget:</strong> ${selectedEvent.budget}</p>
            <p><strong>Special Requests:</strong> {selectedEvent.specialRequests}</p>
          </motion.div>
        )}

        {/* Booking List & Calendar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Calendar */}
          <div className="bg-[#FFF3E0] shadow-xl rounded-xl p-6 border-4 border-[#FFD700]">
            <h3 className="text-xl font-semibold text-[#FF9800] mb-4">
              🗓 Event Calendar
            </h3>
            <AdminCalendar events={calendarEvents} onEventClick={setSelectedEvent} />
          </div>

          {/* Booking List */}
          <div className="bg-white shadow-xl rounded-xl p-6 border-4 border-[#FF9800] backdrop-blur-md bg-opacity-90">
            <h3 className="text-xl font-semibold text-[#FF9800] mb-4">
              📋 Booking List
            </h3>

            {loading ? (
              <div className="flex justify-center items-center">
                <span className="animate-spin rounded-full h-8 w-8 border-t-2 border-[#FF9800]"></span>
                <p className="ml-2 text-[#FF9800]">Loading bookings...</p>
              </div>
            ) : bookings.filter((booking) => new Date(booking.eventDate) >= today).length === 0 ? (
              <p className="text-[#FF9800] text-center">No upcoming bookings available.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full bg-white shadow-md rounded-xl border-4 border-[#FFD700]">
                  <thead className="bg-[#FFD700] text-gray-900">
                    <tr>
                      <th className="px-4 py-3">Event Type</th>
                      <th className="px-4 py-3">Date</th>
                      <th className="px-4 py-3">Location</th>
                      <th className="px-4 py-3">Guests</th>
                      <th className="px-4 py-3">Client</th>
                      <th className="px-4 py-3">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bookings
                      .filter((booking) => new Date(booking.eventDate) >= today) // Hide past events
                      .map((booking) => (
                        <tr
                          key={booking._id}
                          className={`border-t text-center hover:bg-[#FFF8E1] cursor-pointer transition-all duration-200 ${
                            selectedEvent?.eventDate === booking.eventDate ? "bg-[#FFE082]" : ""
                          }`}
                          onClick={() => setSelectedEvent({ ...booking })}
                        >
                          <td className="px-4 py-3">{booking.eventType}</td>
                          <td className="px-4 py-3">{new Date(booking.eventDate).toLocaleDateString()}</td>
                          <td className="px-4 py-3">{booking.location}</td>
                          <td className="px-4 py-3">{booking.guestCount}</td>
                          <td className="px-4 py-3">{booking.fullName}</td>
                          <td className="px-4 py-3 text-[#FF9800] font-bold cursor-pointer">
                            View Details
                          </td>
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
