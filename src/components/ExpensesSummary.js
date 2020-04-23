import React from 'react';
import numeral from 'numeral';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import setExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expensesCount, expensesTotal }) => {
  return (
    <div>
      {(expensesCount == 1) ? (
        `Viewing ${expensesCount} expense totalling ${numeral(expensesTotal).format('$0,0.00')}`
      ) : (
          `Viewing ${expensesCount} expenses totalling ${numeral(expensesTotal).format('$0,0.00')}`
        )}
    </div>
  )
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters)
  return {
    expensesCount: visibleExpenses.length,
    expensesTotal: setExpensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(ExpensesSummary);