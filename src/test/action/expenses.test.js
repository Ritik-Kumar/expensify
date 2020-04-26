import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

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

// test('shold set up add expense action object with default value', () => {
//   const data = {
//   }
//   const action = addExpense(data);
//   expect(action).toStrictEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       id: expect.any(String),
//       description: '',
//       amount: 0,
//       createdAt: 0,
//       note: ''
//     }
//   })
// });