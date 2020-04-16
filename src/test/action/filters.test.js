import moment from 'moment';
import { setEndDate, setTextFilter, setStartDate, sortByAmount, sortByDate } from '../../actions/filters';

test('should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    date: moment(0)
  })
});

test('should generate set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    date: moment(0)
  })
});

test('should generate sort by amount action object', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_AMOUNT'
  })
});

test('should generate sort By date action object', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_DATE'
  })
});

test('should generate set Text action object with provided value', () => {
  const action = setTextFilter('Ritik');
  expect(action).toEqual({
    type: 'SET_TEXT',
    text: 'Ritik'
  })
});

test('should generate set Text action object with default value', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT',
    text: ''
  })
});