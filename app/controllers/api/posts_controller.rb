class Api::PostsController < ApplicationController
  def create
    @post = Post.new(post_params);
    if @post.save
      render :show
      send_pusher_notifications
    else
      render json: @post.errors, status: 422
    end
  end

  def show
  end

  def send_pusher_notifications
    friend_ids = current_user.friends.map {|friend| friend.id}
    friend_ids.each do |id|
      Pusher.trigger(
        "newsfeed-#{id}",
        "post-change",
        {sender: current_user.id}
      )
    end
    Pusher.trigger(
      "wall-#{@post.wall_id}",
      "post-change",
      {sender: current_user.id})
  end

  def update
    @post = Post.find_by(id: params[:id])
    if @post
      @post.update!(post_params)
      render :show
      send_pusher_notifications
    end
  end

  def newsfeed
    friend_ids = current_user.friends.map {|friend| friend.id}
    friend_ids << current_user.id
    @posts = Post.where("user_id IN (?)", friend_ids)
      .includes(:author)
      .includes(:wall)
      .includes(:comments)
      .includes(:comment_authors)
    #oh boy this should not be called timeline
    render :timeline
  end

  def timeline
    wall = User.find_by(id: params[:wall_id])
    @posts = wall.posts
      .includes(:author)
      .includes(:wall)
      .includes(:comments)
      .includes(:comment_authors)
    render :timeline
  end

  def destroy
    @post = Post.find_by(id: params[:id])
    @post.destroy
    render :show
    send_pusher_notifications
  end

  def post_params
    params.require(:post).permit(:body, :user_id, :wall_id, :id)
  end

end
