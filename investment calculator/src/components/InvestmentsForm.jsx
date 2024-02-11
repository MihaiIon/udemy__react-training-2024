import { useState } from "react";

export default function CalculatorForm(props) {
  const {
    formValues: {
      initialInvestment,
      annualInvestment,
      expectedReturn,
      duration,
    },
    onInitialInvestmentChange,
    onAnnualInvestmentChange,
    onExpectedReturnChange,
    onInvestmentDurationChange,
  } = props;

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="investment-amount">
            Investment Amount
            <input
              type="number"
              id="investment-amount"
              name="investment-amount"
              value={initialInvestment}
              onChange={(event) =>
                onInitialInvestmentChange(parseInt(event.target.value))
              }
              required
            />
          </label>
        </p>
        <p>
          <label htmlFor="annual-investment">
            Annual Investment
            <input
              type="number"
              id="annual-investment"
              name="annual-investment"
              value={annualInvestment}
              onChange={(event) =>
                onAnnualInvestmentChange(parseInt(event.target.value))
              }
              required
            />
          </label>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Return
            <input
              type="number"
              id="expected-return"
              name="expected-return"
              value={expectedReturn}
              onChange={(event) =>
                onExpectedReturnChange(parseInt(event.target.value))
              }
              required
            />
          </label>
        </p>
        <p>
          <label htmlFor="investment-duration">
            Investment Duration
            <input
              type="number"
              id="investment-duration"
              name="investment-duration"
              value={duration}
              onChange={(event) =>
                onInvestmentDurationChange(parseInt(event.target.value))
              }
              required
            />
          </label>
        </p>
      </div>
    </section>
  );
}
