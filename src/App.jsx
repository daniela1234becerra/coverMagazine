import React from 'react';
import './App.css'; 
import TitleLayer from './components/TitleLayer';
import ImageLayer from './components/ImageLayer';
import TextLayer from './components/TextLayer';
import GridLayer from './components/GridLayer';

function App() {
  return (
    <div className="App">
      <section>
        <div className="container">
          <TitleLayer />
          <ImageLayer />
          <TextLayer />
          <GridLayer />
        </div>
      </section>
    </div>
  );
}

export default App;