# Capstone Project - Backend Services

This is the backend service for the MERN Blog Application, built using Node.js, Express.js, and MongoDB/Mongoose.

## Database Schemas

### UserModel (models/UserModel.js)
Represents all registered user profiles on the platform (USER, AUTHOR, and ADMIN).

Fields:
- firstName (String, Required): First name of the user.
- lastName (String, Optional): Last name of the user.
- email (String, Required, Unique): Email used for auth credentials.
- password (String, Required): Bcrypt-hashed password.
- role (String, Required, Enum: ["USER", "AUTHOR", "ADMIN"]): System privileges.
- profileImageUrl (String, Optional): Link to the user profile avatar.
- isUserActive (Boolean, Default: true): Control state to block/unblock users.

Options:
- timestamps: true
- versionKey: false
- strict: "throw"

### ArticleModel (models/ArticleModel.js)
Represents articles created by Authors, including a sub-document array for comments.

Comment Schema:
- user (ObjectId, Ref: "user", Required): Reference to the commenting user.
- comment (String, Required): Content text of the comment.

Article Schema:
- author (ObjectId, Ref: "user", Required): Creator reference.
- title (String, Required): Header of the post.
- category (String, Required): Category tags.
- content (String, Required): Text body.
- comments (Array of CommentSchema, Default: []): Nested comments list.
- isArticleActive (Boolean, Default: true): Soft-delete visibility state toggle.

Options:
- timestamps: true
- versionKey: false
- strict: "throw"

---

## Middlewares

### verifyToken (middlewares/VerifyToken.js)
Validates JWT stored inside the browser cookie `token`. It decodes user details and validates their role against the authorized access roles.
- Cookie lookup: `req.cookies.token`
- Unauthorized fallback: Returns 401
- Forbidden role mismatch: Returns 403

---

## API Routes and Endpoints

### 1. Common Authentication APIs (APIs/commonAPI.js)
Prefix: `/auth`

- POST `/auth/users`
  - Access: Public
  - Purpose: Registers a USER or AUTHOR. Encrypts password using Bcryptjs (12 rounds).
- POST `/auth/login`
  - Access: Public
  - Purpose: Authenticates credentials, signs 1-hour JWT, and saves to an HTTP-only secure cookie named `token`.
- GET `/auth/logout`
  - Access: Protected
  - Purpose: Clears the `token` cookie.
- GET `/auth/check-auth`
  - Access: Protected (USER, AUTHOR, ADMIN)
  - Purpose: Returns the decoded JWT payload of the active session.
- PUT `/auth/password`
  - Access: Protected (USER, AUTHOR, ADMIN)
  - Purpose: Updates user password after matching current password.

### 2. User APIs (APIs/UserAPI.js)
Prefix: `/user-api`

- GET `/user-api/articles`
  - Access: Protected (USER)
  - Parameters: Query `page` (default 1) and `limit` (default 10)
  - Purpose: Fetches paginated list of active articles, sorted newest first. Populates author fields.
- GET `/user-api/articles/:id`
  - Access: Protected (USER)
  - Purpose: Fetches detail of a single active article. Populates author and commenter fields.
- POST `/user-api/articles/:id/comments`
  - Access: Protected (USER)
  - Request body: `{ "comment": "text" }`
  - Purpose: Appends a new comment sub-document to the article.
- DELETE `/user-api/articles/:articleId/comments/:commentId`
  - Access: Protected (USER - Owner Only)
  - Purpose: Deletes a specific comment from the article's list.

### 3. Author APIs (APIs/AuthorAPI.js)
Prefix: `/author-api`

- POST `/author-api/articles`
  - Access: Protected (AUTHOR)
  - Request body: `{ "title": "text", "category": "text", "content": "text" }`
  - Purpose: Publishes a new article.
- GET `/author-api/articles`
  - Access: Protected (AUTHOR)
  - Purpose: Returns all articles written by the logged-in author.
- PUT `/author-api/articles/:id`
  - Access: Protected (AUTHOR)
  - Request body: JSON content fields to update.
  - Purpose: Edits the specified article.
- PATCH `/author-api/articles/:id`
  - Access: Protected (AUTHOR)
  - Request body: `{ "isArticleActive": boolean }`
  - Purpose: Toggles article visibility status (soft-delete).

### 4. Admin APIs (APIs/AdminAPI.js)
Prefix: `/admin-api`

- GET `/admin-api/users`
  - Access: Protected (ADMIN)
  - Purpose: Fetches all registered accounts (excluding passwords).
- PATCH `/admin-api/users/:id/status`
  - Access: Protected (ADMIN)
  - Request body: `{ "isUserActive": boolean }`
  - Purpose: Blocks or unblocks a specific user.
- GET `/admin-api/articles`
  - Access: Protected (ADMIN)
  - Parameters: Query `page`, `limit`
  - Purpose: Fetches a paginated system-wide view of all articles.
- DELETE `/admin-api/articles/:id`
  - Access: Protected (ADMIN - Override)
  - Purpose: Hard deletes an article permanently from the database.
- GET `/admin-api/stats`
  - Access: Protected (ADMIN)
  - Purpose: Computes dashboard analytics (totalUsers, totalAuthors, totalArticles, activeArticles).

---

## Setup and Execution

1. Navigate to directory:
   ```bash
   cd BACKEND
   ```
2. Install packages:
   ```bash
   npm install
   ```
3. Configure environment variables in `.env`:
   ```env
   PORT=4000
   DB_URL=mongodb+srv://...
   SECRET_KEY=your_secret_key
   NODE_ENV=development
   ```
4. Start the server:
   ```bash
   node server.js
   ```
