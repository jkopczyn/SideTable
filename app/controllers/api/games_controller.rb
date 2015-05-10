class Api::GamesController < ApplicationController

  def show
    @game = Game.includes(:ratings, :reviews, :shelves, :users).find(params[:id])
    render :show
  end

  def index
    @page = params[:page] ? params[:page] : 1
    if params[:shelf_id] or params[:id]
      @games = Shelf.find(params[:shelf_id]).games.includes(:ratings).page(@page)
    elsif params[:query]
      @games = Game.where(*query_args(params[:query])).includes(:ratings).page(@page)
    else
      @games = Game.order(:id).page(@page).includes(:ratings)
    end
    @total_pages = @games.total_pages
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

  def explore
    @games = random_items(10).shuffle
    render :index
  end

  private

  GAME_FIELDS = [:id, :title, :designer, :image_url, :description]

  def game_params
    params.require(:game).permit(*GAME_FIELDS)
  end

  def random_items(n)
    last = Game.pluck(:id).last
    Game.where(id: (1..last).to_a.shuffle[0...n]).includes(:ratings)
  end

  def query_args(query_hash)
    #this takes the union of the two sets to ensure safety
    keys = query_hash.keys & GAME_FIELDS.map(&:to_s)
    fields = keys.map { |key| "#{key} ILIKE :#{key}" }.join(" and ")
    values = {}
    keys.each { |key| values[key.to_sym] = "%#{query_hash[key]}%" }
    return [fields, values]
  end
end
