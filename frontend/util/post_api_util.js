export const fetchTimelinePosts = (wallId) => {
  return $.ajax({
    method: 'GET',
    url: 'api/timeline',
    data: {wall_id: `${wallId}`}
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
