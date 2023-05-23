import { useReducer } from "react";
import { DEFAULT_MIN_VERSION } from "tls";

const INITIAL_STATE = {
  counter: 1,
};

type Actions =
  | { type: "INC"; payload: number }
  | { type: "DEC"; payload: number };

const reducer = (state: typeof INITIAL_STATE, action: Actions) => {
  switch (action.type) {
    case "INC":
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case "DEC":
      return {
        ...state,
        counter: state.counter - action.payload,
      };

    default:
      const _defaultValue: typeof state = state;
      return _defaultValue;
  }
};

const UseReducerComponent = () => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const { counter } = state;

  const plusCounter = () => dispatch({ type: "INC", payload: 1 });
  const minusCounter = () => dispatch({ type: "DEC", payload: 1 });

  return (
    <div>
      <div>
        <h1>{`Counter is ${counter}`}</h1>
      </div>
      <button onClick={plusCounter}>Increment coutner</button>
      <button onClick={minusCounter}>Decrement coutner</button>
    </div>
  );
};

export default UseReducerComponent;
