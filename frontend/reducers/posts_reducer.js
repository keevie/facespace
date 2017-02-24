import { REMOVE_POST, RECEIVE_ALL_POSTS, RECEIVE_POST }
  from '../actions/post_actions';
import { RECEIVE_COMMENT, REMOVE_COMMENT }
  from '../actions/comment_actions';


const insertOrReplace = (array, newEl) => {
  let replaced = false;
  let newArray = array.map((el) => {
    if (el.id === newEl.id) {
      replaced = true;
      return newEl;
    }
    return el;
  });
  if (replaced) {
    return newArray;
  }
  else {
    return newArray.concat(newEl);
  }
};

const addSelfToParentChildren = (comment, comments) => {
  return comments.map((el) => {
    // debugger
    if (el.id === comment.parent_id) {
      el.children = el.children.concat(comment.id);
      return el;
    }
    else {
      return el;
    }
  });
};

const postReducer = (state, action) => {
  switch(action.type) {
    case REMOVE_COMMENT:
      if (state.id === action.comment.commentable_id) {
        return Object.assign(
        {}, state, {comments: state.comments
          .filter((comment) => action.comment.id !== comment.id)}
        );
      }
      else {
        return state;
      }
    case RECEIVE_COMMENT:
      if (state.id === action.comment.commentable_id) {
        return Object.assign(
          {}, state,
          {comments: addSelfToParentChildren(action.comment, insertOrReplace(state.comments, action.comment))}
      );
      }
      else {
        return state;
      }
    default:
      return state;
  }
};

const postsReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_ALL_POSTS:
      return Object.assign({}, state, action.posts);
    case RECEIVE_POST:
      return Object.assign({}, state, {[action.post.id]: action.post});
    case REMOVE_POST:
      let newState = Object.assign({}, state);
      delete newState[action.post.id];
      return newState;
    case REMOVE_COMMENT:
    case RECEIVE_COMMENT:
      newState = {};
      for (let key in state) {
        newState[key] = postReducer(state[key], action);
      }
      return newState;
    default:
      return state;
  }

};

export default postsReducer;


