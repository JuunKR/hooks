import { useState } from "react";

const content = [
  {
    tab: "Section 1",
    content: "I'm the content of the Section 1",
  },

  {
    tab: "Section 2",
    content: "I'm the content of the Section 2",
  },
];

const useTabs = (initialIndex) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
};

function App() {
  const tab = useTabs(0);
  return (
    <div>
      {content.map((content) => (
        <button>{content.tab}</button>
      ))}
      <h1>hello</h1>
    </div>
  );
}

export default App;
