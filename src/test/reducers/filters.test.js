
import moment from 'moment';
import filtersReducers from '../../reducers/filters';

test('shoud setup default reducer', () => {
  const state = filtersReducers(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('shoud setup sortBy reducer', () => {
  const state = filtersReducers(undefined, { type: 'SORT_AMOUNT' });
  expect(state.sortBy).toEqual('amount');
});

test('shoud setup sortBy reducer', () => {
  const currState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
  const state = filtersReducers(currState, { type: 'SORT_DATE' });
  expect(state.sortBy).toEqual('date');
});

test('shoud setup Text reducer', () => {
  const state = filtersReducers(undefined, { type: 'SET_TEXT', text: 'Ritik' });
  expect(state.text).toEqual('Ritik');
});

test('shoud setup start Date reducer', () => {
  const state = filtersReducers(undefined, { type: 'SET_START_DATE', date: moment(0) });
  expect(state.startDate).toEqual(moment(0));
});

test('shoud setup end Date reducer', () => {
  const state = filtersReducers(undefined, { type: 'SET_END_DATE', date: moment(0).add(5, 'days') });
  expect(state.endDate).toEqual(moment(0).add(5, 'days'));
});