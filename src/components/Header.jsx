const Header = () => {
  
  // Code Smells
  function processData(data) {
    if (data) {
      if (data.items) {
        data.items.forEach(item => console.log(item));
      }
    }
  }
  
  processData();
  
  
  // Bugs
  function divide(a, b) {
    return a / b;
  }
  
  console.log(divide(10, 0));
  
  // XSS
  const userInput = '<img alt="1" src="#" onerror="alert(1)">' ;
  document.body.innerHTML = userInput;
  
  
  return (
    <header>
      <h1>React SonarQube Demo</h1>
    </header>
  );
};

export default Header;
