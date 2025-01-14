import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Counter from './components/Counter.jsx';
import BadPracticeComponent from "./components/BadPracticeComponent.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <Counter />
      <BadPracticeComponent />
      <Footer />
    </div>
  );
};

export default App;
