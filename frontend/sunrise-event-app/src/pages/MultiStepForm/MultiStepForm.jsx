import React, { useState } from "react";
import Step1 from "../../components/Step1/Step1";
import Step2 from "../../components/Step2/Step2";
import Step3 from "../../components/Step3/Step3";
import Summary from "../../components/Summary/Summary";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);

  return (
    <div>
      {step === 1 && <Step1 nextStep={() => setStep(2)} />}
      {step === 2 && <Step2 nextStep={() => setStep(3)} prevStep={() => setStep(1)} />}
      {step === 3 && <Step3 prevStep={() => setStep(2)} submitForm={() => setStep(4)} />}
      {step === 4 && <Summary />}
    </div>
  );
};

export default MultiStepForm;
