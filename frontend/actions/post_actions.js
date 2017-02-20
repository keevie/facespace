import * as APIUtil from '../util/post_api_util';

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';


export const fetchTimelinePosts = (wallId) => {
  return (dispatch) => {
    return APIUtil.fetchTimelinePosts(wallId)
      .then(posts => dispatch(receivePosts(posts)));
  };
};

export const receivePosts = (posts) => {
  return {
    type: RECEIVE_ALL_POSTS,
    posts
  };
};
