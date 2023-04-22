import ApiAuthorzationRoutes from "./components/api-authorization/ApiAuthorizationRoutes";
import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import Home from "./components/Home";
import Producsorter from "./components/pages/Producsorter";

const AppRoutes = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: "/counter",
    requireAuth: true,
    element: <Counter />,
  },
  {
    path: "/productsorter",
    requireAuth: true,
    element: <Producsorter />,
  },
  {
    path: "/fetch-data",
    requireAuth: true,
    element: <FetchData />,
  },
  ...ApiAuthorzationRoutes,
];

export default AppRoutes;
