class Api::FriendshipsController < ApplicationController
  def create
    @friendship = Friendship.new(friendship_params)

    if @friendship.save
      render :show
    else
      render json: @friendship.errors.full_messages, status: 422
    end
  end

  def accept
    friend_request = Friendship.find_by(friend_id: friendship_params[:user_id] )
    friend_request.update!(pending: false)
    @friendship = Friendship.new(friendship_params)
    render :show
  end

  def reject
    @friendship = Friendship.find_by(friend_id: friendship_params[:user_id] )
    @friendship.destroy
    render :show
  end

  def destroy

  end

  def friendship_params
    params.require(:friendship).permit(:friend_id, :user_id, :pending)
  end
end
