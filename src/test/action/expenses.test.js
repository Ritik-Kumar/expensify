import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('shold set up remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toStrictEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
});


test('shold set up edit expense action object', () => {
  const action = editExpense('123abc', { note: 'without it', amount: 500 });
  expect(action).toStrictEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'without it',
      amount: 500
    }
  })
});

test('shold set up add expense action object with provided value', () => {
  const data = {
    description: 'Rent',
    amount: 1500,
    createdAt: 100000,
    note: 'Are Bhai Bhai Bhai'
  }
  const action = addExpense(data);
  expect(action).toStrictEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      ...data
    }
  })
});

test('shold set up add expense action object with default value', () => {
  const data = {
  }
  const action = addExpense(data);
  expect(action).toStrictEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      amount: 0,
      createdAt: 0,
      note: ''
    }
  })
});