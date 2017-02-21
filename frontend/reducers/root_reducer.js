import { combineReducers } from 'redux';

import sessionReducer from './session_reducer';
import userReducer from './user_reducer';
import postsReducer from './posts_reducer';
import modalReducer from './modal_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  user: userReducer,
  posts: postsReducer,
  modalOpen: modalReducer
});

export default rootReducer;


