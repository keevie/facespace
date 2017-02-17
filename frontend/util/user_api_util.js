export const fetchUser = (profileUrl) => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${profileUrl}`
  });
};
