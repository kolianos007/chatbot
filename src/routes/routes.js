import { AUTH_ROUTE, CHAT_ROUTE } from "../components/utils/consts";
import Auth from "../pages/Auth/Auth";
import Chat from "../pages/Chat/Chat";

const publicRoutes = [
  {
    path: AUTH_ROUTE,
    Component: Auth,
  },
];

const privateRoutes = [
  {
    path: CHAT_ROUTE,
    Component: Chat,
  },
];

export { publicRoutes, privateRoutes };
