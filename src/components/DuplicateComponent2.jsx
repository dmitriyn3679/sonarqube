import React from 'react';

const DuplicateComponent2 = () => {
  return (
    <div>
      <p>This is a duplicated component.</p>
      <button onClick={() => alert('Clicked!')}>Click me</button>
    </div>
  );
};

export default DuplicateComponent2;
