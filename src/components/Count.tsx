import { useSelector } from "react-redux";

const Count = () => {
  const count = useSelector((state: number) => state);
  return (
    <div>
      <h2>Counter: {count}</h2>
    </div>
  );
};

export default Count;
