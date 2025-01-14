import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Counter from './components/Counter.jsx';
import BadPracticeComponent from "./components/BadPracticeComponent.jsx";
import CriticalBugComponent from "./components/CriticalBugComponent.jsx";
import VulnerabilityComponent from "./components/VulnerabilityComponent.jsx";
import DuplicateComponent1 from "./components/DuplicateComponent1.jsx";
import DuplicateComponent2 from "./components/DuplicateComponent2.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <Counter />
      <BadPracticeComponent />
      <CriticalBugComponent />
      <VulnerabilityComponent />
      <DuplicateComponent1 />
      <DuplicateComponent2 />
      <Footer />
    </div>
  );
};

export default App;
