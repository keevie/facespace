class Api::PostsController < ApplicationController
  def create

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

end
