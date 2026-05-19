# External User Selection Counter (reactApp2)

This React application demonstrates two crucial architectural patterns in React: loading asynchronous external data using hooks, and sharing dynamic user interface values between disconnected sibling components by lifting state up to their closest common parent.

## Core Architectural Concepts

* Asynchronous Side Effects (`useEffect`): Querying external web APIs safely on initial component load without causing infinite looping rendering cycles.
* State Lifting: Moving active state values up to a common parent (`App.js`) so sibling elements (`UserCount` and `Users`) can sync changes in real time.
* Callback Communication: Passing function handles down as props to allow child components to inform parent scopes of local user interactions (e.g. clicking selection buttons).

## Component Structure

The app's interface is broken down into three clean files:

```
App.js (Parent State Manager)
 ├── UserCount.js (Stateless Banner - Sibling A)
 └── Users.js (Dynamic Cards Listing - Sibling B)
```

### 1. Parent Controller (App.js)
* Manages the root selection count state (`count`) using `useState`.
* Defines the increment handler method:
  const handleAddUser = () => {
    setCount(count + 1);
  };
* Returns the unified dashboard, feeding `count` to the banner and `handleAddUser` to the card list.

### 2. User Counter Banner (components/Usercount.js)
* A simple presentation component.
* Reads the `count` property and renders a header banner indicating the quantity of selected profiles.
* Standardized text notifies users on how to increment values.

### 3. Fetching User Cards (components/Users.js)
* Maintains dynamic state for the incoming API database (`users`) and progress states (`loading`).
* Executes an asynchronous JSON request inside a mounting `useEffect` block:
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);
* Rendering Logic:
  * Loading state boundary: If data is fetching, outputs a text placeholder "Loading Users...".
  * Avatar generation: Dynamically slices the first character of each username to render circular initials as card avatars.
  * Grid rendering: Maps profiles into responsive cards showing name, email, and a selection button.
  * Parent notification: Clicking "Add User" calls `onAddUser` which triggers the handler in `App.js` to increment selection tallies.

## Running the Application

1. Open your terminal and navigate to the project directory:
   cd reactApp2
2. Install local node dependencies:
   npm install
3. Start the local server:
   npm start
   Open http://localhost:3000 in your browser to view the application.
