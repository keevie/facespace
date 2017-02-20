import { RECEIVE_USER_INFO, LOADING_USER_INFO}
  from '../actions/user_actions';

const defaultState = {
  user: {
    id: 0,
    email: '',
    f_name: '',
    l_name: '',
    dob: '1905-01-01',
    location: '',
    profile: 'missing.png',
    cover: 'missing.png',
    profile_url: 0
  },
  loading: false
};

const userReducer = (state = defaultState, action) => {
  switch(action.type) {
    case RECEIVE_USER_INFO:
      return Object.assign({}, state, {user: action.user, loading: false});
    case LOADING_USER_INFO:
      return Object.assign({}, state, {loading: true});
    default:
      return state;
  }
};

export default userReducer;
