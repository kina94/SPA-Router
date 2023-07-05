import { useContext } from "react";
import { RouterContext } from "@routes/Router";

const useRouter = () => {
  const router = useContext(RouterContext);

  return {
    push: router.navigate,
  };
};

export default useRouter;
