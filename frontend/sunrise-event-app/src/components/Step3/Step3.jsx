import React from "react";
import { useFormContext } from "../../context/FormContext";

const Step3 = ({ prevStep, submitForm }) => {
  const { formData, setFormData } = useFormContext();

  return (
    <div>
      <h2>Step 3: Venue Details</h2>
      <label>Venue:</label>
      <input
        type="text"
        value={formData.venue}
        onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
      />
      <button onClick={prevStep}>Back</button>
      <button onClick={submitForm}>Submit</button>
    </div>
  );
};

export default Step3;
