json.id @comment.id
json.commentable_id @comment.commentable_id
json.commentable_type @comment.commentable_type
json.body @comment.body
json.parent_id @comment.parent_id
json.author_full_name @comment.author.f_name + ' ' + @comment.author.l_name
json.author_avatar asset_path(@comment.author.profile(:small))
json.children @comment.child_ids
json.created_at @comment.created_at
json.updated_at @comment.updated_at
