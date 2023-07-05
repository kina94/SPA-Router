import { useRouter } from "@hooks";

const Root = () => {
  const { push } = useRouter();
  return (
    <div>
      <h1>main</h1>
      <button onClick={() => push("/about")}>go about</button>
    </div>
  );
};

export default Root;
