# Component Hierarchy


**SplashPage**

  - AuthFormContainer
    - AuthForm
      - LoginForm
        - LoginErrors
      - SignUpForm
        - SignUpErrors

**NavBar**

  - SearchContainer
    - Search
  - NavItems
    - FriendRequestsContainer
      - FriendRequests
    - NotificationsContainer
      - Notifications

**Wall**

  - NavBar
  - ProfileNavBar
  - InfoPane
  - About
  - Friends
  - FriendsPaneContainer
      - FriendsPane
  - PostsContainer

**NewsFeed**

  - NavBar
  - NewsFeedSideBar
  - PostsContainer

**PostsContainer**

  - Posts
    - PostContainer
      - Post
          - CommentContainer
            - Comment 

**LikesContainer**

  - Likes


**ChatContainer**

  - Chat

## Routes

|Path                                 |Component              |
|-------------------------------------|-----------------------|
|"/user/:id/"                         |"Wall"                 |
|"/user/:id/about"                    |"About"                |
|"/user/:id/friends"                  |"Friends"              |



