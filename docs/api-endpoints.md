# API Endpoints

## HTML API

# Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `GET /api/users/:id`
- `PATCH /api/users/:id`
- `GET /api/users/:id/posts`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Posts

- `POST /api/posts`
- `DELETE /api/posts/:id`
- `GET /api/posts/:id`
- `GET /api/posts/:id/comments`
- `DELETE /api/posts/:id/comments`
- `GET /api/posts/:id/comments/:id/likes`
- `DELETE /api/posts/:id/comments/:id/likes`
- `GET /api/posts/:id/likes`
- `DELETE /api/posts/:id/likes`
- `PATCH /api/posts/:id`
- `POST /api/posts/:id/likes`
- `POST /api/posts/:id/comments/:id/likes`



