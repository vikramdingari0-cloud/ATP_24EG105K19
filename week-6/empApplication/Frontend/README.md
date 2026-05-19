# Frontend Client Application (empApplication/Frontend)

This is the client-side user interface of the Employee Management System. It is developed as a Single Page Application (SPA) using React, Vite, React Router, and Tailwind CSS. It connects dynamically to the Express server to perform CRUD actions.

## Technology Stack

* React: UI rendering library.
* Vite: Modern, fast frontend build tool.
* React Router: Multi-page client routing library.
* Tailwind CSS: Utility-first CSS framework for styles.

## Folder Organization and Components

The frontend client utilizes modular components housed inside `src/components`:

### 1. Shell Layout (RootLayout & Header)
* RootLayout: Serves as the primary layout template, rendering the static Header component at the top and the dynamic page body underneath using React Router's `<Outlet />`.
* Header: Responsive navigation header. It provides links to return home, view employee records, or register new ones, automatically bolding active locations via `NavLink` class attributes.

### 2. View Pages
* Home: Landing page offering navigation entry points to add employees or browse existing ones.
* CreateEmp: Structured registration form containing input validators. It binds input changes to local state and dispatches a POST request to `/api/emp` to record new employees.
* ListOfEmp: Dynamic listing grid. It requests all records via a GET API call, mapping each record into individual structural cards. Each card offers buttons to:
  * View Details: Triggers client-side redirect to the detailed employee view page.
  * Edit: Redirects to the Edit Employee form.
  * Delete: Dispatches a DELETE API request to clean records, automatically updating the UI list upon success.
* Employees: Full profile details view. It parses state values passed through the React Router context (`useLocation().state`) to display full employee fields without making extra server hits.
* EditEmp: Dynamic edit page. It pre-populates form fields using passed state context, capturing updates locally and saving changes to the database by dispatching a PUT request to `/api/emp/:id`.

## Dynamic API Routing Setup

The application maps frontend client views to paths in `src/App.jsx` using `createBrowserRouter`:

* `/` -> Renders Home component.
* `/create-emp` -> Renders Create Employee component.
* `/list` -> Renders Employee List component.
* `/emps` -> Renders Single Employee View component.
* `/edit-emp` -> Renders Edit Employee component.
* `/delete-emp` -> Redirects to Employee List component to trigger delete processes.

## Backend Integration Config

Connection URLs are configured centrally inside `src/config.js`:
export const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

To connect to a separate hosted backend, set the environment configuration variable `VITE_API_URL` to your remote API address before building the project.
