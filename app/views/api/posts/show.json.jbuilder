author = User.find_by(id: @post.user_id)

json.body @post.body
json.id @post.id
json.author_f_name author.f_name
json.author_l_name author.l_name
json.avatar asset_path(author.profile(:small))
json.created_at @post.created_at
json.updated_at @post.updated_at
