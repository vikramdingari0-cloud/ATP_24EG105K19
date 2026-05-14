import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Rootlayout from "./components/Rootlayout";
import Home from "./components/Home";
import CreateEmp from "./components/CreateEmp";
import ListOfEmp from "./components/ListOfEmp";
import Employees from "./components/Employees";
import EditEmp from "./components/EditEmp";

function App() {
  const routerObj = createBrowserRouter([
    {
      path: "/",
      element: <Rootlayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "create-emp",
          element: <CreateEmp />,
        },
        {
          path: "list",
          element: <ListOfEmp />,
        },
        {
          path: "emps",
          element: <Employees />,
        },
        {
          path: "edit-emp",
          element: <EditEmp />,
        },
        {
          path: "delete-emp",
          element: <ListOfEmp />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routerObj} />;
}

export default App;