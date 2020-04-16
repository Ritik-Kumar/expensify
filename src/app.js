import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';

//Store
import configureStore from './store/configureStore';
import { addExpense, editExpense, removeExpense } from './actions/expenses';
import { setTextFilter, setStartDate, setEndDate, sortByAmount, sortByDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

//style
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water Bill', amount: 100, createdAt: 999000000 }));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 500, createdAt: 200 }));
store.dispatch(addExpense({ description: 'Rent', amount: 10500 }));


const state = store.getState();
console.log(getVisibleExpenses(state.expenses, state.filters));


const jsx = (
  <Provider store={store}><AppRouter /></Provider>
);


ReactDOM.render(jsx, document.getElementById('app'));
