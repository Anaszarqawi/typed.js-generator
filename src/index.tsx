import React from "react";
import { createRoot } from "react-dom/client";

// components
import TextElement from "./components/textElement.tsx"

const MainContent = () => {
  return (
    <TextElement/>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<MainContent />);