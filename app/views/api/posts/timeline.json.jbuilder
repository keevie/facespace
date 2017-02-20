json.array! @posts do |post|
  json.body post.body
  json.author post.user_id
  json.created_at post.created_at
  json.updated_at post.updated_at
end
