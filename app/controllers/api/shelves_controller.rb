class Api::ShelvesController < ApplicationController
  before_action :require_logged_in

  def show
    @shelf = Shelf.find(params[:id])
    unless @shelf.user_id == current_user.id
      render json: "Invalid User Access", status: 422
      return nil
    end
    render :show
  end

  def index
    @shelves = current_user.shelves
    render :index
  end
  
  def create
    whitelist = shelf_params
    unless whitelist.user_id == current_user.id
      render json: "Invalid User Access", status: 422
      return nil
    end
    @shelf = Shelf.new(whitelist)
    if @shelf.save
      render :show
    else
      render json: @shelf.errors.full_messages, status: 422
    end
  end

  def update
    whitelist = shelf_params
    unless whitelist.user_id == current_user.id
      render json: "Invalid User Access", status: 422
      return nil
    end
    @shelf = Shelf.find(params[:id])
    if @shelf.update(whitelist)
      render :show
    else
      render json: @shelf.errors.full_messages, status: 422
    end
  end

  private
  def shelf_params
    shelf_permitted = params.require(:shelf).permit(:title, :user_id)
  end
end
