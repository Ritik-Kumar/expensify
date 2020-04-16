
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
})

test('should remove by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
})

test('should not remove id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '123'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
})

test('should ADD expense', () => {
  const expense = {
    id: '123',
    createdAt: 0,
    amount: 500,
    description: 'Marie',
    note: ''
  }
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
})

test('should edit expense', () => {
  const expense = {
    createdAt: 0,
    amount: 500,
    description: 'Marie',
    note: ''
  }
  const action = {
    type: 'EDIT_EXPENSE',
    id: '1',
    updates: expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([{ ...expenses[0], ...expense }, expenses[1], expenses[2]]);
})

test('should not edit expense', () => {
  const expense = {
    createdAt: 0,
    amount: 500,
    description: 'Marie',
    note: ''
  }
  const action = {
    type: 'EDIT_EXPENSE',
    id: '123',
    updates: expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
})