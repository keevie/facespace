@posts.each do |post|
  json.set! post.id do
    author = post.author
    wall = post.wall
    comments = post.comments

    json.body post.body
    json.author_f_name author.f_name
    json.author_l_name author.l_name
    json.author_id author.id
    json.author_link author.profile_url
    json.wall_id post.wall_id
    json.wall_f_name wall.f_name
    json.wall_l_name wall.l_name
    json.wall_link wall.profile_url
    json.id post.id
    json.avatar asset_path(author.profile(:small))
    json.comments comments do |comment|
      json.id comment.id
      json.commentable_id comment.commentable_id
      json.commentable_type comment.commentable_type
      json.body comment.body
      json.parent_id comment.parent_id
      json.author_full_name comment.author.f_name + ' ' + comment.author.l_name
      json.author_id comment.author.id
      json.author_avatar asset_path(comment.author.profile(:small))
      json.children comment.child_ids
      json.created_at comment.created_at
      json.updated_at comment.updated_at
    end


    json.created_at post.created_at
    json.updated_at post.updated_at
  end

end
