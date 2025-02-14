import jsPDF from "jspdf";
import "jspdf-autotable";
import logo from '../assets/logo.png';
export const generateEventPDF = (data) => {
  console.log("Generating PDF with data:", data);

  const doc = new jsPDF();

  // ✅ Background Color
  doc.setFillColor(240, 240, 240); // Light gray background
  doc.rect(0, 0, doc.internal.pageSize.width, doc.internal.pageSize.height, "F");

  // ✅ Brand Name
  const brandName = "Sunrise Events";
 // Replace with actual logo URL

  doc.setFont("helvetica", "bold");
  doc.setFontSize(24);
  doc.setTextColor(0, 0, 0); // Black color
  doc.text(brandName, 105, 20, "center"); // Center aligned

  // ✅ Add Logo (Center it)
  const imgWidth = 50;
  const imgHeight = 50;
  doc.addImage(logo, "PNG", 80, 25, imgWidth, imgHeight); // Adjust position

  // ✅ Section Title with Separator Line
  doc.setFontSize(18);
  doc.setTextColor(0, 0, 255); // Blue color
  doc.text("Event Planning Details", 105, 85, "center");
  doc.setDrawColor(0, 0, 255);
  doc.line(50, 90, 160, 90); // Line below title

  // ✅ Check if Data is Available
  if (!data || Object.keys(data).length === 0) {
    doc.setFontSize(14);
    doc.setTextColor(255, 0, 0); // Red color
    doc.text("No event data available!", 105, 100, "center");
  } else {
    // ✅ Event Details Table
    const tableData = [
      ["Event Type", data.eventType || "N/A"],
      ["Event Date", data.eventDate ? new Date(data.eventDate).toLocaleDateString() : "N/A"],
      ["Location", data.location || "N/A"],
      ["Guest Count", data.guestCount || "N/A"],
      ["Budget Range", data.budgetRange || "N/A"],
      ["Full Name", data.fullName || "N/A"],
      ["Email", data.email || "N/A"],
      ["Phone", data.phone || "N/A"],
      ["Preferred Contact", data.preferredContact || "N/A"],
      ["Venue Status", data.venueStatus || "N/A"],
      ["Special Requests", data.specialRequests || "N/A"],
      ["Services Required", data.services ? data.services.join(", ") : "N/A"],
    ];

    doc.autoTable({
      startY: 100,
      head: [["Field", "Value"]],
      body: tableData,
      theme: "grid",
      styles: {
        fontSize: 11,
        cellPadding: 4,
      },
      headStyles: {
        fillColor: [0, 0, 128], // Dark blue header
        textColor: [255, 255, 255], // White text
      },
      alternateRowStyles: {
        fillColor: [230, 230, 250], // Light lavender for alternate rows
      },
    });
  }

  // ✅ "Thank You" Message with Stylish Text
  doc.setTextColor(255, 69, 0); // Orange-red color
  doc.setFontSize(16);
  doc.text("Thank you for choosing Sunrise Events!", 105, doc.internal.pageSize.height - 30, "center");

  doc.setTextColor(0, 128, 0); // Green color
  doc.setFontSize(12);
  doc.text("We look forward to making your event memorable!", 105, doc.internal.pageSize.height - 20, "center");

  // ✅ Save the PDF
  doc.save("event-details.pdf");
};
