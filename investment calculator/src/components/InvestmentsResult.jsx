import { calculateInvestmentResults, formatter } from '../util/investment';

export default function InvestmentsResult({ formValues }) {
  const results = calculateInvestmentResults(formValues);
  console.log(results);

  return (
    <div id="result">
      <table>
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
              <td>{formatter.format(result.annualInvestment)}</td>
              <td>{formatter.format(result.interest)}</td>
              <td>{formatter.format(result.interest)}</td>
              <td>{formatter.format(result.interest)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}