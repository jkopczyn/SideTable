class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :current_user, :login_user!, :logout_user!
  
  private
  def require_logged_in
    unless logged_in?
      redirect_to new_session_url
    end
  end

  def require_logged_out
    if logged_in?
      redirect_to root_url
    end
  end

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login_user!(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def logout_user!
    @current_user.reset_session_token!
    @current_user.destroy if @current_user.guest?
    @current_user = nil
    session[:session_token] = nil
  end
end
