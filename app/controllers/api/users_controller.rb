class Api::UsersController < ApplicationController
  # TO DO protect from rogue profile picture changers
  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors, status: 422
    end
  end

  def show
    @user = User.find_by(profile_url: params[:id])
    if @user
      render :show
    end
  end

  def update
    @user = User.find_by(profile_url: params[:id])
    if @user
      @user.update!(user_params)
      render :show
    end
  end
end
