import { RECEIVE_ALL_POSTS } from '../actions/post_actions';

const postsReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_ALL_POSTS:
      return action.posts;
    default:
      return state;
  }

};

export default postsReducer;
