class Api::ShelvesController < ApplicationController

  def show
    @shelf = Shelf.find(params[:id])
    render :show
  end

  #def index
  #end
  
  #def create
  #end

  #def update
  #end
end
