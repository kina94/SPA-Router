import { createContext, useContext, useState } from "react";
import {
  RouteProps,
  RouterContextProps,
  RouterProps,
} from "@types/Router.model";

export const RouterContext = createContext<RouterContextProps>({
  currentPath: "",
  setCurrentPath: () => {},
});

const Router = ({ children }: RouterProps) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  window.onpopstate = () => {
    setCurrentPath(window.location.pathname);
  };

  const contextValue = {
    currentPath,
    setCurrentPath,
  };

  return (
    <RouterContext.Provider value={contextValue}>
      {children}
    </RouterContext.Provider>
  );
};

const Route = ({ path, component }: RouteProps) => {
  const router = useContext(RouterContext);

  if (router.currentPath === path) {
    return component;
  }

  return null;
};

export { Router, Route };
