import { ReactElement, useState } from "react";

const AddOne = (): ReactElement | null => {
  const [num, setNum] = useState<number>(0);

  const AddHandeler = (): void => {
    setNum(num + 1);
  };

  return (
    <div>
      <h1>{`Current number is ${num}`}</h1>
      <button onClick={AddHandeler}>Add One</button>
    </div>
  );
};

export default AddOne;
