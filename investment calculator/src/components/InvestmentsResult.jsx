import { calculateInvestmentResults, formatter } from "../util/investment";

export default function InvestmentsResult({ formValues }) {
  const results = calculateInvestmentResults(formValues);
  console.log(results);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Amount</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Investment Capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result, index) => (
          <tr key={index}>
            <td>{result.year}</td>
            <td>{formatter.format(result.valueEndOfYear)}</td>
            <td>{formatter.format(result.interest)}</td>
            <td>{formatter.format(result.totalInterest)}</td>
            <td>{formatter.format(result.totalAmountInvested)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
