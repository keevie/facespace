json.extract! user, :id, :email, :f_name,
  :l_name, :dob, :location, :profile, :cover, :profile_url

json.profile asset_path(user.profile.url)
json.cover asset_path(user.cover.url)
