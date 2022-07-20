import Login from "../Pages/login";
import Project from "../Pages/project";
import View from "../Pages/view";
const routeConfig = [
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/project",
    element: <Project />,
  },
  {
    path: "/view/:projectId",
    element: <View />,
  },
];

export default routeConfig;
