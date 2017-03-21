class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :logged_in?, :current_user

  def logged_in?
    !!current_user
  end

  def current_user
    return @current_user if @current_user
    token = Session.find_by(session_token: session[:session_token])
    @current_user = token ? token.user : nil
  end

  def login!(user)
    session[:session_token] = user.add_session!(
      request.env["HTTP_USER_AGENT"],
      request.remote_ip
    )
  end

  def logout!
    @current_user = nil
    current_user.try(:remove_session!, session[:session_token])
    session[:session_token] = nil
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :dob,
                                 :f_name, :l_name, :gender, :profile, :cover)
  end
end
