class SessionsController < ApplicationController
  before_action :require_logged_out, only: [:new, :create]
  before_action :require_logged_in, only: :destroy

  def new
    @user = User.new
    render :new
  end

  def create
    credentials = [params[:user][:email], params[:user][:password]]
    @user = User.find_by_credentials(*credentials)
    if @user
      login_user!(@user)
      redirect_to root_url
    else
      flash.now[:errors] ||= []
      flash.now[:errors].push "Invalid email/password combination"
      @user = User.new
      render :new
    end
  end

  def destroy
    logout_user!
    debugger
    redirect_to new_session_url
  end
end
