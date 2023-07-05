import { useContext } from "react";
import { RouterContext } from "@routes/Router";

const useRouter = () => {
  const router = useContext(RouterContext);

  const push = (path: string) => {
    window.history.pushState(null, "", path);
    router.setCurrentPath(path);
  };

  return { push };
};

export default useRouter;
