import { useState } from 'react';

const BatchingRenders = () => {
  console.log('BatchingRenders component Render log');

  const [variableA, setVariableA] = useState(0);
  const [variableB, setVariableB] = useState(0);

  setTimeout(() => {
    setVariableA(1);
    setVariableB(1);
    //   Should batch this in one render, last react version 17 will do 2 renders for this!
  }, 4000);

  return (
    <div>
      <h2>BatchingRenders</h2>
      <p>VariableA {variableA}</p>
      <p>VariableB {variableB}</p>
    </div>
  );
};

export default BatchingRenders;
