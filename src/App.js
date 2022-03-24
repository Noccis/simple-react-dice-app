
import './App.css';
import React, {useState} from 'react';
import Container from './components/Container';
/* 
Hur får jag bort 0 från random nr?                      []
Se till att "tärningarna" ligger bredvid varandra       [x]
Skriv kommentarer till koden på engelska                [x]
Lägg ut tärning i egen fil                              [X]
Lägg till totalNr                                       []
*/



function App() {

  return (
    <div className="App">
      <h1>Let's play 21</h1>
      <Container />
    </div>
  );
}

export default App;
