import React from 'react';
import TheDate from './state/TheDate/TheDate';
import Counter from './state/Counter/Counter';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
import RoulletGun from './state-drills/RoulletGun';
import Tabs from './state/Tabs';
import Accordian from './state-drills/Accordion';

const sections = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  }
]

function App() {
  return (
    <main className="App">
      <TheDate />
      <Counter count={123}/>
      <HelloWorld />
      <Bomb />
      <RoulletGun />
      <Tabs />
      <Accordian sections={sections}/>
       </main>
  );
}

export default App;
