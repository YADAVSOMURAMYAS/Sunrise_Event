import { useState } from "react";
import Step1 from "../../components/EventForm/Step1";
import Step2 from "../../components/EventForm/Step2";
import Step3 from "../../components/EventForm/Step3";
import Review from "../../components/EventForm/Review";

const MultipageForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    eventType: "",
    eventDate: "",
    location: "",
    guestCount: "",
    budgetRange: "",
    fullName: "",
    email: "",
    phone: "",
    preferredContact: "email",
    services: [],
    termsAccepted: false,
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = async () => {
    try {
      const response = await fetch("https://sunrise-event-517y.vercel.app/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) throw new Error(result.message || "Submission failed");

      console.log("Form submitted successfully:", result);
      nextStep();
    } catch (err) {
      console.error("Submission error:", err);
    }
  };

  return (
    <div className="container mx-auto p-4">
      {step === 1 && <Step1 {...{ formData, setFormData, nextStep }} />}
      {step === 2 && <Step2 {...{ formData, setFormData, nextStep, prevStep }} />}
      {step === 3 && <Step3 {...{ formData, setFormData, nextStep, prevStep }} />}
      {step === 4 && <Review {...{ formData, prevStep, handleSubmit }} />}
    </div>
  );
};

export default MultipageForm; // ✅ Make sure this line exists
