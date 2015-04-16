class Api::ShelvingsController < ApplicationController
  before_action :require_logged_in 
  
  def create
    @shelf = Shelf.find(shelving_params["shelf_id"])
    @game = Game.find(shelving_params["game_id"])
    if ensure_owner(@shelf)
      if (@shelving = Shelving.create({game: @game, shelf: @shelf}))
        render :show
      else
        render json: @shelving.errors.full_messages, status: 422
      end
    end
  end

  def destroy
     @shelving = Shelving.find(params[:id])
     @shelf = @shelving.shelf
     @game = @shelving.game
    if ensure_owner(@shelf)
      @shelving.destroy
      render :show
    end
  end

  def destroy_by_ids
    @shelf = Shelf.find(shelving_params["shelf_id"])
    @game = Game.find(shelving_params["game_id"])
    @shelving = Shelving.find_by_game_id_and_shelf_id(@game, @shelf)
    if ensure_owner(@shelf)
      @shelving.destroy
      render :show
    end
  end

  def show
    @shelving = Shelving.find(params[:id])
    render :show
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
