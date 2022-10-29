import './App.css';
import RefDemo from './RefsDemo/RefDemo';
import UseRefHookDemo from './RefsDemo/useRefHookDemo';
import ForwardRefDemo from './RefsDemo/ForwardRefDemo/ForwardRefDemo';
import PortalsDemo from './PortalsDemo/PortalsDemo';
import CounterA from './HOCDemo/CounterA';
import CounterB from './HOCDemo/CounterB';

function App() {
  return (
    <div className='App'>
      {/*<RefDemo/>*/}
      {/*<UseRefHookDemo/>*/}
      {/*<ForwardRefDemo/>*/}
      {/*<PortalsDemo/>*/}
      <div className='HOC-component'>
          <CounterA/>
          <CounterB/>
      </div>
    </div>
  );
}

export default App;
