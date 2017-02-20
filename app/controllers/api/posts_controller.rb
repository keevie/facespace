class Api::PostsController < ApplicationController
  def create

  end

  def show

  end

  def update

  end

  def newsfeed
    wall = User.find_by(id: )
    @posts = wall.posts
  end
end
