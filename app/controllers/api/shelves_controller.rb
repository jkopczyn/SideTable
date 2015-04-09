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

  #def update
  #end
end
