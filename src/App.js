import './App.css';

//constom hooks example components (functionBase)
import { Counter1 } from './CustomHook/FunctionComponent/Counter1';
import { Counter2 } from './CustomHook/FunctionComponent/Counter2';

// forward Ref   expample components
import { App } from './ForwardRef/App';

function Apps() {
  return (
    <div className="App">
      <Counter1 />
      <Counter2 />
      <App />
    </div>
  );
}

export default Apps;
