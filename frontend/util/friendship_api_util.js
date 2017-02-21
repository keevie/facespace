export const sendFriendRequest = (friendship) => {
  return $.ajax({
    method: 'POST',
    url: 'api/friendships/create',
    data: {friendship}
  });
};
