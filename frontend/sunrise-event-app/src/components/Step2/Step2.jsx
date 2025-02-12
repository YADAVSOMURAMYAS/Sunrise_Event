import React from "react";
import { useFormContext } from "../../context/FormContext";

const Step2 = ({ nextStep, prevStep }) => {
  const { formData, setFormData } = useFormContext();

  return (
    <div>
      <h2>Step 2: Event Details</h2>
      <label>Event Type:</label>
      <input
        type="text"
        value={formData.eventType}
        onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
      />
      <label>Event Date:</label>
      <input
        type="date"
        value={formData.date}
        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
      />
      <label>Number of Guests:</label>
      <input
        type="number"
        value={formData.guests}
        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
      />
      <button onClick={prevStep}>Back</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default Step2;
