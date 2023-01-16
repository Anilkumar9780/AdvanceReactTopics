import "./App.css";

//constom hooks 
// import { Counter1 } from "./CustomHook/FunctionComponent/Counter1";
// import { Counter2 } from "./CustomHook/FunctionComponent/Counter2";

// forward Ref 
// import { App } from "./ForwardRef/App";

// HOC
// import App from './HOC/Class/App';
// import App from './HOC/Function/App';

// Context with Custom hook
// import App from './contexts/App';

// Redux
// import App from './Redux/App';

// predefined hooks
// import { Counter } from "./PredefinedHooks/useReducer";
// import UseMemo from "./PredefinedHooks/useMemo ";
// import { UseCallback } from "./PredefinedHooks/useCallback/useCallback";
import { UseRef } from "./PredefinedHooks/useRef";

function Apps() {
  return (
    <div className="App">
      {/* <Counter1 /> */}
      <UseRef />
      {/* <App /> */}
    </div>
  );
}

export default Apps;
