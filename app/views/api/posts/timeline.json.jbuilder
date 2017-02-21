@posts.each do |post|
  json.set! post.id do
    author = post.author;

    json.body post.body
    json.author_f_name author.f_name
    json.author_l_name author.l_name
    json.author_id author.id
    json.wall_id post.wall_id
    json.id post.id
    json.avatar asset_path(author.profile(:small))
    json.created_at post.created_at
    json.updated_at post.updated_at
  end

end
