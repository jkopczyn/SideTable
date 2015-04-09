class Api::GamesController < ApplicationController
  before_action :require_logged_in, except: [:new]

  def show
    @game = Game.find(params[:id])
    render :show
  end

  def index
    debugger
    if params[:shelf_id]
      @games = Shelf.find(params[:shelf_id]).games
    else
      @games = Game.all
    end
    render :index
  end

  def create
    @game = Game.new(game_params)
    if @game.save
      render :show
    else
      render json: @game.errors.full_messages, status: 422
    end
  end

  def update
    @game = Game.find(params[:id])
    if @game.update(game_params)
      render :show
    else
      render json: @game.errors.full_messages, status: 422
    end
  end

  private
  def game_params
    params.require(:game).permit(:id, :title, :designer, 
                                 :image_url, :description)
  end
end
