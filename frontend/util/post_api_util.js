export const fetchTimelinePosts = (wallId) => {
  return $.ajax({
    method: 'GET',
    url: 'api/timeline',
    data: {wall_id: `${wallId}`}
  });
};
