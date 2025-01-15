
import React from 'react';

const DuplicateComponent1 = () => {
  
  const test = () => {
    number = 10;
    
    return number;
  };
  
  console.log(test())
  
  return (
    <div>
      <p>This is a duplicated component.</p>
      <button onClick={() => alert('Clicked!')}>Click me</button>
    </div>
  );
};

export default DuplicateComponent1;
