class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(user_params[:email],
                                     user_params[:password])

    if @user.is_a?(User)
      login!(@user)
      render 'api/users/show'
    else
      if @user == :no_user
        render json: { email: ["user does not exist"] }, status: 422
      elsif @user == :wrong_pass
        render json: { password: ["wrong password"] }, status: 422
      end
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
