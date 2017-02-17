import { RECEIVE_USER_INFO } from '../actions/user_actions';

const defaultState = {
  id: 0,
  email: '',
  f_name: '',
  l_name: '',
  dob: '1905-01-01',
  location: '',
  profile: 'missing.png',
  cover: 'missing.png',
  profile_url: 0
};

const userReducer = (state = defaultState, action) => {
  switch(action.type) {
    case RECEIVE_USER_INFO:
      return Object.assign({}, state, {action});
    default:
      return state;
  }
};

export default userReducer;
