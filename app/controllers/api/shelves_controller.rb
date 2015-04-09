class Api::ShelvesController < ApplicationController

  def show
    @shelf = Shelf.find(params[:id])
    render :show
  end

  def index
    @shelves = current_user.shelves
    render :index
  end
  
  #def create
  #end

  def update
    @shelf = Shelf.find(params[:id])
    if @shelf.update(shelf_params)
      render :show
    else
      render json: @shelf.errors.full_messages, status: 422
    end
  end

  private
  def shelf_params
    params.require(:shelf).permit(:title, :user_id)
  end
end
