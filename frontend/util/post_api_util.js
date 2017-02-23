export const fetchTimelinePosts = (wallId) => {
  return $.ajax({
    method: 'GET',
    url: 'api/timeline',
    data: {wall_id: `${wallId}`}
  });
};

export const fetchNewsFeedPosts = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/newsfeed'
  });
};

export const createPost = (post) => {
  return $.ajax({
    method: 'POST',
    url: 'api/posts',
    data: {post}
  });
};

export const deletePost = (post) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/posts/${post.id}`
  });
};

export const updatePost = (post) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/posts/${post.id}`,
    data: {post}
  });
};
