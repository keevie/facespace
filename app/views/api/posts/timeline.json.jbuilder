@posts.each do |post|
  json.set! post.id do
    author = post.author
    wall = post.wall

    json.body post.body
    json.author_f_name author.f_name
    json.author_l_name author.l_name
    json.author_id author.id
    json.wall_id post.wall_id
    json.wall_f_name wall.f_name
    json.wall_l_name wall.l_name
    json.id post.id
    json.avatar asset_path(author.profile(:small))
    json.created_at post.created_at
    json.updated_at post.updated_at
  end

end
