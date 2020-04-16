import { createStore } from 'redux';


//  Action Generators - 

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});


const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});


const resetCount = () => ({
  type: 'RESET',
});

const setCount = ({ count }) => ({
  type: 'SET',
  count
});

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };

    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };

    case 'RESET': return {
      count: 0
    };

    case 'SET': return {
      count: action.count
    };

    default: return state;
  }
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
  console.log('Subscribe');
});


store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(decrementCount({ decrementBy: 0 }));

store.dispatch(decrementCount());

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(setCount({ count: 101 }));




