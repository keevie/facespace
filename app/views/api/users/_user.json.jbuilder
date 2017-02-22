json.extract! user, :id, :email, :f_name,
  :l_name, :dob, :location, :profile_url

json.profile asset_path(user.profile.url)
json.profile_thumb asset_path(user.profile.url(:thumb))
json.profile_small asset_path(user.profile(:small))
json.cover asset_path(user.cover.url)

if user.sent_friend_requests.length > 0
  json.sent_friend_requests do
    user.sent_friend_requests.each do |friend_request|
      json.set! friend_request.friend_id, friend_request
    end
  end
else
  json.sent_friend_requests({})
end

if user.received_friend_requests.length > 0
  json.received_friend_requests do
    user.received_friend_requests.each do |friend_request|
      json.set! friend_request.user_id do
        json.requester_id friend_request.user_id
        json.requester_avatar asset_path(User.find_by(id: friend_request.user_id).profile(:small))
        json.requester_f_name User.find_by(id: friend_request.user_id).f_name
        json.requester_l_name User.find_by(id: friend_request.user_id).l_name
      end
    end
  end
else
  json.received_friend_requests({})
end

json.test user.received_friend_requests

if user.friendships.length > 0
  json.friends do
    user.friendships.each do |friend|
      json.set! friend.friend_id, friend
    end
  end
else
  json.friends({})
end
