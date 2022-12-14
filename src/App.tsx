import React from "react";
// Context.
import ContentProvider from "./context/ContentContext";
// Component.
import { Content } from "./components/Content";
import { Header } from "./components/Header";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <ContentProvider>
        <Header />
        <Content />
      </ContentProvider>
    </div>
  );
}

export default App;
