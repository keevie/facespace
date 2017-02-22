export const sendFriendRequest = (friendship) => {
  return $.ajax({
    method: 'POST',
    url: 'api/friendships/create',
    data: {friendship}
  });
};

export const cancelFriendRequest = (friendship) => {
  return $.ajax({
    method: 'POST',
    url: 'api/friendships/cancel',
    data: {friendship}
  });
};

export const unFriend = (friendship) => {
  return $.ajax({
    method: 'DELETE',
    url: 'api/friendships/destroy',
    data: {friendship}
  });
};
