export const sendFriendRequest = (friendship) => {
  return $.ajax({
    method: 'POST',
    url: 'api/friendships/create',
    data: {friendship}
  });
};

export const cancelFriendRequest = (friendship) => {
  return $.ajax({
    method: 'Post',
    url: 'api/friendships/cancel',
    data: {friendship}
  });
};
