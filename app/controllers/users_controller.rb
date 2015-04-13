class UsersController < ApplicationController
  before_action :require_logged_out, only: [:new, :create]

  def new
    @user = User.new
    render :new
  end

  def create
    @user = params[:user] ? User.new(user_params) : User.new_guest
    if @user.save
      login_user!(@user)
      redirect_to root_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  private
  def user_params
    params.require(:user).permit(:email, :password, :session_token)
  end
end
