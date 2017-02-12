# Schema Information

## users

|column name    |data type|details                  |
|---------------|---------|-------------------------|
|id             |integer  |not null, primary key    |
|email          |string   |not null, indexed, unique|
|f_name         |string   |not null, indexed        |
|l_name         |string   |not null, indexed        |
|dob            |string   |not null                 |
|location       |string   |                         |
|password_digest|string   |not null                 |
|session_token  |string   |not null, indexed, unique|
|prof_image_url |string   |                         |
|cover_image_url|string   |                         |

## sessions

|column name    |data type|details                  |
|---------------|---------|-------------------------|
|id             |integer  |not null, primary key    |
|user_id        |string   |not null, indexed        |
|http_user_agent|string   |not null                 |
|ip_address     |string   |                         |

## friends

|column name    |data type|details                  |
|---------------|---------|-------------------------|
|id             |integer  |not null, primary key    |
|user_id        |integer  |not null, indexed        |
|friend_id      |integer  |not null, indexed        |

## posts

|column name    |data type|details                  |
|---------------|---------|-------------------------|
|id             |integer  |not null, primary key    |
|title          |string   |not null, indexed        |
|user_id        |integer  |not null, indexed        |
|body           |text     |                         |
|wall_id        |text     |not null, indexed        |

## comments

|column name    |data type|details                  |
|---------------|---------|-------------------------|
|id             |integer  |not null, primary key    |
|user_id        |integer  |not null, indexed        |
|post_id        |integer  |not null, indexed        |
|body           |text     |                         |

## likes

|column name    |data type|details                  |
|---------------|---------|-------------------------|
|id             |integer  |not null, primary key    |
|user_id        |integer  |not null, indexed        |
|post_id        |integer  |not null, indexed        |

## albums

|column name    |data type|details                  |
|---------------|---------|-------------------------|
|id             |integer  |not null, primary key    |
|user_id        |integer  |not null, indexed        |

## photos

|column name    |data type|details                  |
|---------------|---------|-------------------------|
|id             |integer  |not null, primary key    |
|album_id       |integer  |not null, indexed        |
|image_url      |string   |not null                 |



## messages 

**schema for this TK**















