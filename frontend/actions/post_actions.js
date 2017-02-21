import * as APIUtil from '../util/post_api_util';

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';

export const createPost = (post) => {
  return (dispatch) => {
    return APIUtil.createPost(post)
      .then(newPost => dispatch(receivePost(newPost)));
  };
};

export const fetchTimelinePosts = (wallId) => {
  return (dispatch) => {
    return APIUtil.fetchTimelinePosts(wallId)
      .then(posts => dispatch(receivePosts(posts)));
  };
};

export const deletePost = (post) => {
  return (dispatch) => {
    return APIUtil.deletePost(post)
      .then(deletedPost => dispatch(removePost(deletedPost)));
  };
};

export const updatePost = (post) => {
  return (dispatch) => {
    return APIUtil.updatePost(post)
      .then(updatedPost => dispatch(receivePost(updatedPost)));
  };
};

export const removePost = (post) => {
  return {
    type: REMOVE_POST,
    post
  };
};

export const receivePosts = (posts) => {
  return {
    type: RECEIVE_ALL_POSTS,
    posts
  };
};

export const receivePost = (post) => {
  return {
    type: RECEIVE_POST,
    post
  };
};
