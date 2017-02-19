import { RECEIVE_USER_INFO, LOADING_USER_INFO, LOADED_USER_INFO }
  from '../actions/user_actions';

const defaultState = {
  id: 0,
  email: '',
  f_name: '',
  l_name: '',
  dob: '1905-01-01',
  location: '',
  profile: 'missing.png',
  cover: 'missing.png',
  profile_url: 0,
  loading: false
};

const userReducer = (state = defaultState, action) => {
  switch(action.type) {
    case RECEIVE_USER_INFO:
      return Object.assign({}, state, {action});
    case LOADING_USER_INFO:
      return Object.assign({}, state, {loading: true});
    case LOADED_USER_INFO:
      return Object.assign({}, state, {loading: false});
    default:
      return state;
  }
};

export default userReducer;
