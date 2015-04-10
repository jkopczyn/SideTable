class Api::GamesController < ApplicationController
  before_action :require_logged_in, except: [:index]

  def show
    @game = Game.find(params[:id])
    render :show
  end

  def index
    if params[:shelf_id]
      @games = Shelf.find(params[:shelf_id]).games
    elsif params[:query]
      @games = Game.where(*query_args(params[:query]))
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

  GAME_FIELDS = [:id, :title, :designer, :image_url, :description]

  def game_params
    params.require(:game).permit(*GAME_FIELDS)
  end

  def query_args(query_hash)
    keys = query_hash.keys & GAME_FIELDS.map(&:to_s)
    fields = keys.map { |key| "#{key} = :#{key}" }.join(" and ")
    return [fields, query_hash]
  end
end
