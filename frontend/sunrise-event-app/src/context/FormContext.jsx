import React, { createContext, useContext, useState } from "react";

// Create Context
const FormContext = createContext();

// Create Provider Component
export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    date: "",
    guests: "",
    venue: "",
  });

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

// Custom Hook for consuming the context
export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};
