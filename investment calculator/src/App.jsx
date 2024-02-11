import { useState } from "react";

import Header from "./components/Header";
import InvestmentsForm from "./components/InvestmentsForm";
import InvestmentsResult from "./components/InvestmentsResult";

function App() {
  const [formValues, setFormValues] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const handleInitialInvestmentChange = (initialInvestment) => {
    setFormValues({ ...formValues, initialInvestment });
  };

  const handleAnnualInvestmentChange = (annualInvestment) => {
    setFormValues({ ...formValues, annualInvestment });
  };

  const handleExpectedReturnChange = (expectedReturn) => {
    setFormValues({ ...formValues, expectedReturn });
  };

  const handleInvestmentDurationChange = (duration) => {
    setFormValues({ ...formValues, duration });
  };

  return (
    <main>
      <Header />
      <InvestmentsForm
        formValues={formValues}
        onInitialInvestmentChange={handleInitialInvestmentChange}
        onAnnualInvestmentChange={handleAnnualInvestmentChange}
        onExpectedReturnChange={handleExpectedReturnChange}
        onInvestmentDurationChange={handleInvestmentDurationChange}
      />
      <InvestmentsResult formValues={formValues} />
    </main>
  );
}

export default App;
