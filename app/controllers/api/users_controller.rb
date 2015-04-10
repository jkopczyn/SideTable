class Api::UsersController < ApplicationController
  before_action :require_logged_in

  def show
    @user = User.find(params[:id])
    render :show
  end
end
