class Api::PostsController < ApplicationController
  def create
    @post = Post.new(post_params);
    if @post.save
      render :show
    else
      render json: @post.errors, status: 422
    end
  end

  def show

  end

  def update

  end

  def timeline
    wall = User.find_by(id: params[:wall_id])
    @posts = wall.posts
    render :timeline
  end

  def post_params
    params.require(:post).permit(:body, :user_id, :wall_id)
  end

end
