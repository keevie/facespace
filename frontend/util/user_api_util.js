export const fetchUser = (profileUrl) => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${profileUrl}`
  });
};

export const updateUser = (file, profileUrl) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/users/${profileUrl}`,
    processData: false,
    contentType: false,
    dataType: 'json',
    data: file
  });
};
