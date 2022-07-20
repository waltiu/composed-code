import { useRoutes } from "react-router-dom";
import routeConfig from "./Routes";
function App() {
  let element = useRoutes(routeConfig);
  return element;
}
export default App;
