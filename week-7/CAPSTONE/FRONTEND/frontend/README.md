# Capstone Project - Frontend Client Application

This is the React client application for the MERN Blog Application, built using Vite, styled with Tailwind CSS, and configured to communicate with the Backend API over HTTP.

## Backend Deployment Link Configuration
The production backend server is deployed at:
`https://capstone-backend-hesv.onrender.com`

This URL is integrated into the frontend client inside the `src/api/axios.jsx` API configuration as the default fallback baseURL. Local development overrides are done via the `VITE_API_URL` variable in `.env`.

---

## Application Routing and Page Navigation

Routing is managed in `src/App.jsx` using `react-router-dom`. The following table maps virtual paths to pages and security conditions:

| Path | Rendering Page | Access Level | Description |
|---|---|---|---|
| / | Home | Public | Landing homepage showing user greetings and role dashboard shortcuts |
| /login | Login | Public | User credentials entry card with error handling alerts |
| /register | Register | Public | Registrations for "USER" (Reader) and "AUTHOR" roles |
| /articles | ArticleFeed | Protected (USER) | Paginated blog roll list of all published active posts |
| /article/:id | ArticleDetail | Protected (USER) | Detail view of single post, complete with comment additions and owner-deletions |
| /author | AuthorDashboard | Protected (AUTHOR) | Author's studio for posting, editing, and toggling article visibility |
| /admin | AdminDashboard | Protected (ADMIN) | Admin's studio for platform stats, blocking accounts, and override deletes |
| * | NotFound | Public | Standard 404 unmatched page fallback |

---

## Core Client Architectures

### 1. State Management (src/context/AuthContext.jsx)
Centralizes the application session states in an `AuthProvider`:
- `user`: Authenticated user profile data (id, email, role, names) or null.
- `loading`: Boolean state that blocks route renderings during session checking.
- Auto Session Recovery: On component mounting, it issues a GET request to `/auth/check-auth` using Axios. If cookies containing JWT are valid, the session is recovered automatically.

### 2. Route Guarding (src/routes/ProtectedRoute.jsx)
A gatekeeper component intercepting page access:
- Redirects unlogged users to `/login`.
- Redirects users whose roles do not match the specified `allowedRoles` array to `/`.

### 3. API Connector (src/api/axios.jsx)
A custom Axios client instance:
- `baseURL`: Automatically targets `VITE_API_URL` from `.env` or defaults to `https://capstone-backend-hesv.onrender.com`.
- `withCredentials: true`: Enforces browser storage of HTTP-only JWT cookies across requests.

---

## Page Outlines

- **Home.jsx**: Dynamic landing page featuring clean navigation layouts.
- **Login.jsx**: Form card that captures user inputs and logs them in.
- **Register.jsx**: Handles registration for USER and AUTHOR roles.
- **ArticleFeed.jsx**: Displays active articles in a paginated list with pagination controls.
- **ArticleDetail.jsx**: Renders individual article content, alongside comments with submit forms and self-owned delete buttons.
- **AuthorDashboard.jsx**: Console for creating new articles, editing existing posts, and toggling visibility (active/inactive).
- **AdminDashboard.jsx**: Console for viewing system analytics stats, toggling active user status, and removing inappropriate articles from database.
- **NotFound.jsx**: Custom fallback page.

---

## Setup and Execution

1. Navigate to directory:
   ```bash
   cd FRONTEND/frontend
   ```
2. Install npm packages:
   ```bash
   npm install
   ```
3. Configure environment variables in `.env` (optional for local fallback):
   ```env
   VITE_API_URL=http://localhost:4000
   ```
4. Run Vite development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` to browse the app.
