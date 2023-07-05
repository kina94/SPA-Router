export type RouterProps = {
  children: React.ReactNode;
};

export type RouterContextProps = {
  currentPath: string;
  setCurrentPath: (path: string) => void;
};

export type RouteProps = {
  path: string;
  component: React.ReactElement;
};
