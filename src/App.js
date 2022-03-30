import './App.css';
import BatchingRenders from './BatchingRenders';

function App() {
  return (
    <div className='app'>
      <h1>Hello World</h1>
      <h2>
        This is{' '}
        <a href='https://reactjs.org/blog/2022/03/29/react-v18.html'>
          React 18
        </a>
      </h2>
      {/* BatchingRenders Component */}
      <BatchingRenders />
    </div>
  );
}

export default App;
