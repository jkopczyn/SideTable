class Api::ReviewsController < ApplicationController
  before_action :require_logged_in, except: [:show]

  def show
    @review = Review.find(params[:id])
    render :show
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def update
    @review = Review.find(params[:id])
    if @review.update(review_params)
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def destroy
    @review = Review.find(params[:id])
    if ensure_owner(@review)
      @review.destroy
      render :show
    end
  end
  
  private
    def review_params
      params.require(:review).permit(:body, :id, :user_id, :game_id)
    end 
    def ensure_owner(review)
      if current_user.id = review.user_id
        return true
      else
        render json: "Invalid User Access", status: 422
        return false
      end
    end
end
