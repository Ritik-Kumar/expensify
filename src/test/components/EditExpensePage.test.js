import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';
let wrapper, history, editExpense, startRemoveExpense;

beforeAll(() => {
  editExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = {
    push: jest.fn()
  }
  wrapper = shallow(<EditExpensePage
    expense={expenses[1]}
    history={history}
    editExpense={editExpense}
    startRemoveExpense={startRemoveExpense}
  />)
});

test('should render edit expense component correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handel edit expense component correctly', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
  expect(wrapper).toMatchSnapshot();
});

test('should handel edit expense component correctly', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expenses[1].id });
  expect(wrapper).toMatchSnapshot();
});