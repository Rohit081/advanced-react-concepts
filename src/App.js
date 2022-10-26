import './App.css';
import RefDemo from './RefsDemo/RefDemo';
import UseRefHookDemo from './RefsDemo/useRefHookDemo';
import ForwardRefDemo from './RefsDemo/ForwardRefDemo/ForwardRefDemo';

function App() {
  return (
    <div className='App'>
      {/*<RefDemo/>*/}
      {/*<UseRefHookDemo/>*/}
      <ForwardRefDemo/>
    </div>
  );
}

export default App;
