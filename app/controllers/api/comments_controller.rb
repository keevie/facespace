class Api::CommentsController < ApplicationController
  def show
    @comment = Comment.find_by(id: params[:id])
    render :show
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      render :show
    end
  end

  def destroy
    @comment = Comment.find_by(id: params[:id])
    @comment.destroy
    render :show
  end

  def update
    @comment = Comment.find_by(id: params[:id])
    if @comment
      @comment.update!(comment_params)
      render :show
    end
  end

  def comment_params
    params.require(:comment).permit(:parent_id,
                                    :author_id,
                                    :commentable_id,
                                    :commentable_type,
                                    :body)
  end
end
