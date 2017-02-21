json.extract! user, :id, :email, :f_name,
  :l_name, :dob, :location, :profile_url

json.profile asset_path(user.profile.url)
json.profile_thumb asset_path(user.profile.url(:thumb))
json.profile_small asset_path(user.profile(:small))
json.cover asset_path(user.cover.url)
