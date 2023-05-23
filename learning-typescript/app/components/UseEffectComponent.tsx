import React, { useEffect, useState } from "react";

const UseEffectComponent = () => {
  const [timer, setTimer] = useState<number>(1);

  useEffect(() => {
    setInterval(() => {
      setTimer((time) => time + 1);
    }, 10000);
  }, []);

  return <div>{timer}</div>;
};

export default UseEffectComponent;
