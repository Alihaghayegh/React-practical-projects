import React from "react";
import Accordion from "./components/Accordion";
import { accordionData } from "./utils/contents";

const App = () => {
  return (
    <div>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default App;
