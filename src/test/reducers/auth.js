import authReducer from '../../reducers/auth';

test('should dispatch correct state for case login', () => {
  const action = {
    type: 'LOGIN',
    uid: 'tuaycbalcidua'
  };
  const state = authReducer({}, action);
  expect(state).toEqual({
    uid: 'tuaycbalcidua'
  });
});

test('should dispatch correct state for case logout', () => {
  const action = {
    type: 'LOGOUT'
  };
  const state = authReducer({ uid: 'anything' }, action);
  expect(state).toBeFalsy();
});