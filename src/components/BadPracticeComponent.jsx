import {useEffect, useState} from "react";

const BadPracticeComponent = () => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
  }, []); // Таймер ніколи не очищається
  
  return <p>Bad practice count: {count}</p>;
};

export default BadPracticeComponent;
