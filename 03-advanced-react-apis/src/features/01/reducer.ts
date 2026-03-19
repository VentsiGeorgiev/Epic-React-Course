type State = {
  count: number;
  someOtherState: string;
};

type Action =
  | { type: "INCREMENT"; step: number }
  | { type: "DECREMENT"; step: number };

export function countReducer(state: State, action: Action) {
  const { type, step } = action;

  switch (type) {
    case "INCREMENT": {
      return {
        ...state,
        count: state.count + step,
      };
    }
    case "DECREMENT": {
      return {
        ...state,
        count: state.count - step,
      };
    }
  }
}
