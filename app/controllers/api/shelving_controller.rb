class Api::ShelvingController < ApplicationController
  before_action :require_logged_in 
  
  def create
    @shelf = Shelf.find(shelving_params.shelf_id)
    @game = Game.find(shelving_params.game_id)
    if ensure_owner(@shelf)
      Shelving.create({game: @game, shelf: @shelf});
      render :show
    end
  end

  def destroy
    if params[:id]
      @shelving = Shelving.find(params[:id])
      @shelf = @shelving.shelf
    else
      @shelf = Shelf.find(shelving_params.shelf_id)
      @game = Game.find(shelving_params.game_id)
      @shelving = Shelving.find_by_game_id_and_shelf_id(@game, @shelf)
    end
    if ensure_owner(@shelf)
      @shelf.destroy
      render :show
    end
  end

  private
    def shelving_params
      params.require(:shelving).permit(:game_id, :shelf_id)
    end

    def ensure_owner(shelf)
      if current_user.id = shelf.user_id
        return true
      else
        render json: "Invalid User Access", status: 422
        return false
      end
    end
end
