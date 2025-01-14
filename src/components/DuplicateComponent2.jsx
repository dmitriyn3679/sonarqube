import React from 'react';

const DuplicateComponent2 = () => {
  const getNumber = () => {
    const number = 123;
    return number;
  };
  
  const getNumber2 = () => {
    const number = 123;
    return number;
  };
  
  function generateLongString() {
    let result = '';
    
    result += 'This is line 1.\n';
    result += 'This is line 2.\n';
    result += 'This is line 3.\n';
    result += 'This is line 4.\n';
    result += 'This is line 5.\n';
    result += 'This is line 6.\n';
    result += 'This is line 7.\n';
    result += 'This is line 8.\n';
    result += 'This is line 9.\n';
    result += 'This is line 10.\n';
    result += 'This is line 11.\n';
    result += 'This is line 12.\n';
    result += 'This is line 13.\n';
    result += 'This is line 14.\n';
    result += 'This is line 15.\n';
    result += 'This is line 16.\n';
    result += 'This is line 17.\n';
    result += 'This is line 18.\n';
    result += 'This is line 19.\n';
    result += 'This is line 20.\n';
    result += 'This is line 21.\n';
    result += 'This is line 22.\n';
    result += 'This is line 23.\n';
    result += 'This is line 24.\n';
    result += 'This is line 25.\n';
    result += 'This is line 26.\n';
    result += 'This is line 27.\n';
    result += 'This is line 28.\n';
    result += 'This is line 29.\n';
    result += 'This is line 30.\n';
    result += 'This is line 31.\n';
    result += 'This is line 32.\n';
    result += 'This is line 33.\n';
    result += 'This is line 34.\n';
    result += 'This is line 35.\n';
    result += 'This is line 36.\n';
    result += 'This is line 37.\n';
    result += 'This is line 38.\n';
    result += 'This is line 39.\n';
    result += 'This is line 40.\n';
    result += 'This is line 41.\n';
    result += 'This is line 42.\n';
    result += 'This is line 43.\n';
    result += 'This is line 44.\n';
    result += 'This is line 45.\n';
    result += 'This is line 46.\n';
    result += 'This is line 47.\n';
    result += 'This is line 48.\n';
    result += 'This is line 49.\n';
    result += 'This is line 50.\n';
    result += 'This is line 51.\n';
    result += 'This is line 52.\n';
    result += 'This is line 53.\n';
    result += 'This is line 54.\n';
    result += 'This is line 55.\n';
    
    return result;
  }
  
  function generateLongString1() {
    let result = '';
    
    result += 'This is line 1.\n';
    result += 'This is line 2.\n';
    result += 'This is line 3.\n';
    result += 'This is line 4.\n';
    result += 'This is line 5.\n';
    result += 'This is line 6.\n';
    result += 'This is line 7.\n';
    result += 'This is line 8.\n';
    result += 'This is line 9.\n';
    result += 'This is line 10.\n';
    result += 'This is line 11.\n';
    result += 'This is line 12.\n';
    result += 'This is line 13.\n';
    result += 'This is line 14.\n';
    result += 'This is line 15.\n';
    result += 'This is line 16.\n';
    result += 'This is line 17.\n';
    result += 'This is line 18.\n';
    result += 'This is line 19.\n';
    result += 'This is line 20.\n';
    result += 'This is line 21.\n';
    result += 'This is line 22.\n';
    result += 'This is line 23.\n';
    result += 'This is line 24.\n';
    result += 'This is line 25.\n';
    result += 'This is line 26.\n';
    result += 'This is line 27.\n';
    result += 'This is line 28.\n';
    result += 'This is line 29.\n';
    result += 'This is line 30.\n';
    result += 'This is line 31.\n';
    result += 'This is line 32.\n';
    result += 'This is line 33.\n';
    result += 'This is line 34.\n';
    result += 'This is line 35.\n';
    result += 'This is line 36.\n';
    result += 'This is line 37.\n';
    result += 'This is line 38.\n';
    result += 'This is line 39.\n';
    result += 'This is line 40.\n';
    result += 'This is line 41.\n';
    result += 'This is line 42.\n';
    result += 'This is line 43.\n';
    result += 'This is line 44.\n';
    result += 'This is line 45.\n';
    result += 'This is line 46.\n';
    result += 'This is line 47.\n';
    result += 'This is line 48.\n';
    result += 'This is line 49.\n';
    result += 'This is line 50.\n';
    result += 'This is line 51.\n';
    result += 'This is line 52.\n';
    result += 'This is line 53.\n';
    result += 'This is line 54.\n';
    result += 'This is line 55.\n';
    
    return result;
  }
  
  generateLongString()
  generateLongString1()
  
  getNumber();
  getNumber2();
  
  return (
    <div>
      <p>This is a duplicated component.</p>
      <button onClick={() => alert('Clicked!')}>Click me</button>
    </div>
  );
};

export default DuplicateComponent2;
