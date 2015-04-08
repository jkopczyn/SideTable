class Api::GamesController < ApplicationController
  before_action :require_logged_in, except: [:new]

  def show
    @game = Game.find(params[:id])
    render :show
  end

  def index
    if params[:shelf_id]
      @games = Shelf.find(params[:shelf_id]).games
    else
      @games = Game.all
    end
    render :index
  end

  #def create
  #end

end
