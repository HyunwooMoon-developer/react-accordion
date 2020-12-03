import React from 'react';
import TheDate from './state/TheDate/TheDate';
import Counter from './state/Counter/Counter';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
import RoulletGun from './state-drills/RoulletGun';

function App() {
  return (
    <main className="App">
      <TheDate />
      <Counter count={123}/>
      <HelloWorld />
      <Bomb />
      <RoulletGun />
       </main>
  );
}

export default App;
