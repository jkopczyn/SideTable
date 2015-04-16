class Api::RatingsController < ApplicationController

  def show
    @rating = Rating.find(params[:id])
    render :show
  end

  def create
    @rating = Rating.new(rating_params)
    if @rating.save
      render :show
    else
      render json: @rating.errors.full_messages, status: 422
    end
  end

  def update
    @rating = Rating.find(params[:id])
    if @rating.update(rating_params)
      render :show
    else
      render json: @rating.errors.full_messages, status: 422
    end
  end

  def destroy
    @rating = Rating.find(params[:id])
    if ensure_owner(@rating)
      @rating.destroy
      render :show
    end
  end
  
  private
    def rating_params
      debugger
      params.require(:rating).permit(:score, :id, :user_id, :game_id)
    end 

    def ensure_owner(rating)
      if current_user.id = rating.user_id
        return true
      else
        render json: "Invalid User Access", status: 422
        return false
      end
    end
end
