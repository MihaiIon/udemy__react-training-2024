import { useState } from "react";

export default function CalculatorForm(props) {
  const {
    onInvestmentAmountChange,
    onAnnualInvestmentChange,
    onExpectedReturnChange,
    onInvestmentDurationChange,
  } = props;

  const [investmentAmount, setInvestmentAmount] = useState(0);
  const [annualInvestment, setAnnualInvestment] = useState(0);
  const [expectedReturn, setExpectedReturn] = useState(0);
  const [investmentDuration, setInvestmentDuration] = useState(0);

  const handleInvestmentAmountChange = (e) => {
    setInvestmentAmount(e.target.value);
    onInvestmentAmountChange(e.target.value);
  };

  const handleAnnualInvestmentChange = (e) => {
    setAnnualInvestment(e.target.value);
    onAnnualInvestmentChange(e.target.value);
  };

  const handleExpectedReturnChange = (e) => {
    setExpectedReturn(e.target.value);
    onExpectedReturnChange(e.target.value);
  };

  const handleInvestmentDurationChange = (e) => {
    setInvestmentDuration(e.target.value);
    onInvestmentDurationChange(e.target.value);
  };

  return (
    <div id="user-input">
      <label className="input-group" htmlFor="investment-amount">
        Investment Amount
        <input
          type="number"
          id="investment-amount"
          name="investment-amount"
          value={investmentAmount}
          onChange={handleInvestmentAmountChange}
          required
        />
      </label>
      <label className="input-group" htmlFor="annual-investment">
        Annual Investment
        <input
          type="number"
          id="annual-investment"
          name="annual-investment"
          value={annualInvestment}
          onChange={handleAnnualInvestmentChange}
          required
        />
      </label>
      <label className="input-group" htmlFor="expected-return">
        Expected Return
        <input
          type="number"
          id="expected-return"
          name="expected-return"
          value={expectedReturn}
          onChange={handleExpectedReturnChange}
          required
        />
      </label>
      <label className="input-group" htmlFor="investment-duration">
        Investment Duration
        <input
          type="number"
          id="investment-duration"
          name="investment-duration"
          value={investmentDuration}
          onChange={handleInvestmentDurationChange}
          required
        />
      </label>
    </div>
  );
}
