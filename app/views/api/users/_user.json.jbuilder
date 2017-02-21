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
json.received_friend_requests({})
