import { jsPDF } from "jspdf";
import logo from "../assets/logo.png"; // Ensure this path is correct

const generatePDF = (formData) => {
  const doc = new jsPDF();

  // Add company logo
  doc.addImage(logo, "PNG", 10, 10, 50, 20);

  // Title
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text("Event Booking Summary", 70, 30);

  // Event Details
  doc.setFontSize(12);
  doc.setFont("helvetica", "normal");
  doc.text(`Name: ${formData.name}`, 10, 50);
  doc.text(`Email: ${formData.email}`, 10, 60);
  doc.text(`Phone: ${formData.phone}`, 10, 70);
  doc.text(`Event Type: ${formData.eventType}`, 10, 80);
  doc.text(`Event Date: ${formData.date}`, 10, 90);
  doc.text(`Guests: ${formData.guests}`, 10, 100);
  doc.text(`Venue: ${formData.venue}`, 10, 110);

  // Footer with Timestamp
  const currentDate = new Date().toLocaleString();
  doc.setFontSize(10);
  doc.text(`Generated on: ${currentDate}`, 10, 280);

  // Save PDF
  doc.save("event-booking-summary.pdf");
};

export default generatePDF;
