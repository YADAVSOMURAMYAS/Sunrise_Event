import jsPDF from 'jspdf';
import 'jspdf-autotable';

export const generateEventPDF = (data) => {
  console.log("Generating PDF with data:", data);

  const doc = new jsPDF();

  // Add Title
  doc.setFontSize(18);
  doc.text('Event Planning Details', 15, 15);

  // Check if data exists before creating PDF
  if (!data || Object.keys(data).length === 0) {
    doc.text("No event data available!", 20, 30);
  } else {
    const tableData = [
      ['Event Type', data.eventType || 'N/A'],
      ['Event Date', data.eventDate ? new Date(data.eventDate).toLocaleDateString() : 'N/A'],
      ['Location', data.location || 'N/A'],
      ['Guest Count', data.guestCount || 'N/A'],
      ['Budget Range', data.budgetRange || 'N/A'],
    ];

    doc.autoTable({
      startY: 40,
      head: [['Field', 'Value']],
      body: tableData,
      theme: 'grid',
      styles: { fontSize: 10 }
    });
  }

  // Save the PDF
  doc.save('event-details.pdf');
};
