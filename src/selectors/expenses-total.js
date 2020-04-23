
export default (expenses) => {
  const reducer = (accumilator, sum) => accumilator + sum;
  let Total = expenses.map((expense) => expense.amount).reduce(reducer, 0);
  return Total;
};