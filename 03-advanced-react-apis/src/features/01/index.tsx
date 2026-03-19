import { useReducer, useState } from "react";
import { countReducer } from "./reducer";

function Feature01({ initialCount = 0, step = 1 }) {
  const [state, dispatch] = useReducer(countReducer, {
    count: initialCount,
    someOtherState: "foo",
  });
  const { count } = state;
  const [currentStep, setCurrentStep] = useState(step);
  const increment = () => dispatch({ type: "INCREMENT", step: currentStep });
  const decrement = () => dispatch({ type: "DECREMENT", step: currentStep });

  return (
    <div>
      <h3>{count}</h3>
      <input
        type="number"
        value={currentStep}
        onChange={(e) => setCurrentStep(parseInt(e.target.value))}
      />
      <br />
      <br />
      <div>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
      </div>
    </div>
  );
}
export default Feature01;
