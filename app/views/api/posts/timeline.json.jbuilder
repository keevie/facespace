@posts.each do |post|
  json.set! post.id do
    author = post.author
    wall = post.wall
    comments = post.comments

    json.body post.body
    json.author_f_name author.f_name
    json.author_l_name author.l_name
    json.author_id author.id
    json.wall_id post.wall_id
    json.wall_f_name wall.f_name
    json.wall_l_name wall.l_name
    json.id post.id
    json.avatar asset_path(author.profile(:small))
    json.top_level_comments post.top_level_comment_ids
    json.comments do
      comments.each do |comment|
        json.set! comment.id do
          json.body comment.body
          json.parent_id comment.parent_id
          json.author_full_name comment.author.f_name + ' ' + comment.author.l_name
          json.author_avatar asset_path(comment.author.profile(:small))
          json.children comment.child_ids
          json.created_at comment.created_at
          json.updated_at comment.updated_at
        end
      end
    end


    json.created_at post.created_at
    json.updated_at post.updated_at
  end

end
