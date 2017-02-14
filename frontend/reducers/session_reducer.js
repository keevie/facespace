import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER }
  from '../actions/session_actions';


const defaultState = {
  currentUser: null,
  errors: []
};

const sessionReducer = (state = defaultState, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state,
        {currentUser: action.currentUser, errors: []});
    case RECEIVE_ERRORS:
      return Object.assign({}, state,
        {currentUser: null, errors: action.errors});
    default:
      return state;
  }
};

export default sessionReducer;
