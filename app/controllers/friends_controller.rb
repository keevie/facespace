class FriendsController < ApplicationController
  def create
    @friendship = Friendship.new(friend_params)

    if @friendship.save
      render :show
    else
      render json: @friendship.errors.full_messages, status: 422
    end
  end

  def accept
    friend_request = Friendship.find_by(friend_id: friend_params[:user_id] )
    friend_request.update!(pending: false)
    @friendship = Friendship.new(friend_params)
    render :show
  end

  def reject
    @friendship = Friendship.find_by(friend_id: friend_params[:user_id] )
    @friendship.destroy
    render :show
  end

  def destroy

  end

  def friend_params
    params.require(:friend).permit(:friend_id, :user_id, :pending)
  end
end
