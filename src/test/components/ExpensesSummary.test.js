import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expensesTotal from '../../selectors/expenses-total';

test('1 item', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={500} />);
  expect(wrapper).toMatchSnapshot();
});


test('2 item', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={2} expensesTotal={500} />);
  expect(wrapper).toMatchSnapshot();
});