import React from 'react';

const App = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div
      style={{
        margin: '10px',
        padding: '10px',
        textAlign: 'center',
        backgroundColor: 'cyan',
      }}
    >
      <h1>App 2</h1>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        {count}
      </button>
    </div>
  );
};

export default App;
