//******SET_TEXT******* */

export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT',
  text
});

//******SORT_AMOUNT******* */

export const sortByAmount = () => ({
  type: 'SORT_AMOUNT'
});

//******SORT_DATE******* */

export const sortByDate = () => ({
  type: 'SORT_DATE'
});

//******SET_START_DATE******* */

export const setStartDate = (date = undefined) => ({
  type: 'SET_START_DATE',
  date: date
});

//******SET_END_DATE******* */

export const setEndDate = (date = undefined) => ({
  type: 'SET_END_DATE',
  date: date
});
