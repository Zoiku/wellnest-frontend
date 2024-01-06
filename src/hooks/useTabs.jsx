import { useState } from "react";

const useTabs = () => {
  const [index, setIndex] = useState(0);
  const handleSetIndex = (_event, newIndex) => {
    setIndex(newIndex);
  };
  return [index, handleSetIndex];
};

export default useTabs;
