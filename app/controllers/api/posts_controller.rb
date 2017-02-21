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
    @post = Post.find_by(id: params[:id])
    if @post
      @post.update!(post_params)
      render :show
    end
  end

  def timeline
    wall = User.find_by(id: params[:wall_id])
    @posts = wall.posts
    render :timeline
  end

  def destroy
    @post = Post.find_by(id: params[:id])
    @post.destroy
    render :show
  end

  def post_params
    params.require(:post).permit(:body, :user_id, :wall_id, :id)
  end

end
