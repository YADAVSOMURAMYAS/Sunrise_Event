import React, { useState } from "react";
import {
  Container,
  Paper,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
  Typography,
} from "@mui/material";
import jsPDF from "jspdf";
import { toast } from "react-toastify";

const steps = ["Basic Information", "Contact Details", "Submit"];

const MultipageForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    paymentStatus: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = async () => {
    if (activeStep === steps.length - 1) {
      try {
        const response = await fetch("http://localhost:3000/api/form/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const data = await response.json();
        if (response.ok) {
          toast.success("Form submitted successfully!");
          setFormData({ ...formData, paymentStatus: true });
          setActiveStep(activeStep + 1);
        } else {
          toast.error(data.message || "Form submission failed");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        toast.error("Server error, please try again later.");
      }
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("User Submitted Form", 20, 20);
    doc.text(`First Name: ${formData.firstName}`, 20, 30);
    doc.text(`Last Name: ${formData.lastName}`, 20, 40);
    doc.text(`Email: ${formData.email}`, 20, 50);
    doc.text(`Phone: ${formData.phone}`, 20, 60);
    doc.text("Payment: SUCCESS", 20, 70);
    doc.save("submitted-form.pdf");
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: 20, marginTop: 30 }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => (
            <Step key={index}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {activeStep === steps.length ? (
          <div style={{ textAlign: "center", marginTop: 20 }}>
            <Typography variant="h5">Form Submitted Successfully!</Typography>
            {formData.paymentStatus && (
              <Button
                variant="contained"
                color="primary"
                onClick={generatePDF}
                style={{ marginTop: 20 }}
              >
                Download Submitted Form
              </Button>
            )}
          </div>
        ) : (
          <div style={{ marginTop: 20 }}>
            {activeStep === 0 && (
              <>
                <TextField
                  label="First Name"
                  name="firstName"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <TextField
                  label="Last Name"
                  name="lastName"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </>
            )}

            {activeStep === 1 && (
              <>
                <TextField
                  label="Email"
                  name="email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={formData.email}
                  onChange={handleChange}
                />
                <TextField
                  label="Phone"
                  name="phone"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </>
            )}

            {activeStep === 2 && (
              <Typography variant="h6" align="center" style={{ marginTop: 20 }}>
                Click "Submit" to save your form details
              </Typography>
            )}

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 20,
              }}
            >
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Submit" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </Paper>
    </Container>
  );
};

export default MultipageForm;
