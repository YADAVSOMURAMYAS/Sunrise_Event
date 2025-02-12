import React from "react";
import { useFormContext } from "../../context/FormContext";

const Step1 = ({ nextStep }) => {
  const { formData, setFormData } = useFormContext();

  return (
    <div>
      <h2>Step 1: Personal Details</h2>
      <label>Name:</label>
      <input
        type="text"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <label>Email:</label>
      <input
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <label>Phone:</label>
      <input
        type="text"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      />
      <button onClick={nextStep}>Next</button>
    </div>
  );
};

export default Step1;
