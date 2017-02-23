import * as APIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const createComment = (comment) => {
  return (dispatch) => {
    return APIUtil.createComment(comment)
      .then(newComment => dispatch(receiveComment(newComment)));
  };
};

export const updateComment = (comment) => {
  return (dispatch) => {
    return APIUtil.updateComment(comment)
      .then(updatedComment => dispatch(receiveComment(updatedComment)));
  };
};

export const deleteComment = (comment) => {
  return (dispatch) => {
    return APIUtil.deleteComment(comment)
      .then(deletedComment => dispatch(removeComment(deletedComment)));
  };
};

export const removeComment = (comment) => {
  return {
    type: REMOVE_COMMENT,
    comment
  };
};

export const receiveComment = (comment) => {
  return {
    type: RECEIVE_COMMENT,
    comment
  };
};
