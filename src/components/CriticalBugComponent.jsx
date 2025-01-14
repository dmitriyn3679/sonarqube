import React from 'react';

const CriticalBugComponent = () => {
  const handleClick = () => {
    const user = null;
    console.log(user.name); // Помилка: Cannot read property 'name' of null
  };
  
  return <button onClick={handleClick}>Click me (Bug)</button>;
};

export default CriticalBugComponent;
