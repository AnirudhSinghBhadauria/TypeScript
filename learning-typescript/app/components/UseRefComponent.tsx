import React, { useRef } from "react";

const UseRefComponent = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  console.log(inputRef.current?.value);

  return (
    <div>
      <input ref={inputRef} type="text" />
    </div>
  );
};

export default UseRefComponent;
