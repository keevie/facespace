class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(user_params[:email],
                                     user_params[:password])

    if @user
      login!(@user)
      render 'api/users/show'
    else
      render json: { base: ["Invalid username/password"] }, status: 422
    end
  end

  def show
    @user = current_user

    if @user
      render 'api/users/show'
    else
      render json: nil
    end
  end

  def destroy
    @user = current_user
    if @user
      logout!
      render json: {}
    else
      render json: {}, status: 404
    end
  end
end
