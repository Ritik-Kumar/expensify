import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense, startSetExpenses, setExpenses, startRemoveExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';
import expenseReducer from '../../reducers/expenses';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const expensesData = {};
  expenses.forEach(({ id, description, createdAt, amount, note }) => {
    expensesData[id] = { description, note, amount, createdAt };
  });
  database.ref('expenses').set(expensesData).then(() => { done(); });
});

test('shold set up remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toStrictEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
});

test('should remove expense from firebase', (done) => {
  const store = createMockStore({});
  const id = expenses[2].id;
  store.dispatch(startRemoveExpense({ id })).then(() => {
    const action = store.getActions();
    expect(action[0]).toEqual({
      type: 'REMOVE_EXPENSE',
      id
    });
    return database.ref(`expenses/${id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toBeFalsy();
    done();
  });
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
  const action = addExpense(expenses[2]);
  expect(action).toStrictEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  })
});

test('should add expense to database and store with default values', (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: '',
    amount: 0,
    createdAt: 0,
    note: ''
  };
  store.dispatch(startAddExpense({})).then(() => {
    const action = store.getActions();
    expect(action[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });
    return database.ref(`expenses/${action[0].expense.id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData);
    done();
  });
});

test('should add expense to database and store with given values', (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: 'Mouse',
    amount: 500,
    createdAt: 195000,
    note: 'Thujh mein hai khot'
  };
  store.dispatch(startAddExpense(expenseData)).then(() => {
    const action = store.getActions();
    expect(action[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    })
    return database.ref(`expenses/${action[0].expense.id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData);
    done();
  });
});


test('should setup set expenses action object with data', () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  })
});

test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expenses[1]]
  }
  const state = expenseReducer(expenses, action);
  expect(state).toEqual([expenses[1]]);
});



test('shold fetch expense from firebase', (done) => {
  const store = createMockStore();
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    });
    done();
  });

});