import getExpenseTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('Should calculate amount for 0 expenses', () => {
  const total = getExpenseTotal([]);
  expect(total).toBe(0);
})

test('Should calculate amount for 0 expenses', () => {
  const total = getExpenseTotal(expenses);
  expect(total).toBe(114195);
})