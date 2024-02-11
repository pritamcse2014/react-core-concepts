import React from 'react';
import './App.css';
import Todo from './Todo';
import Actor from './Actor';
import Singer from './Singer';
import BookStore from './BookStore';

const App = () => {
  const actors = ["Pritam", "Priya", "Joba", "Rupali"];
  const singers = [
    { id : 1, name : "Rupali", age : 21 },
    { id : 2, name : "Joba", age : 22 },
    { id : 3, name : "Priya", age : 23 },
    { id : 4, name : "Pritam", age : 24 },
  ]
  const books = [
    { id : 1, name : 'Physics', price : 100 },
    { id : 2, name : 'Economics', price : 200 },
    { id : 3, name : 'Finance', price : 300 },
    { id : 4, name : 'Biology', price : 400 },
  ]
  return (
    <div>
      <h2>React Core Concepts</h2>
      <Person />
      <Student />
      <Developer />
      <Device name="Laptop" price="75000" />
      <Device name="Mobile" price="25000" />
      <Device name="Desktop" price="55000" />
      <Todo task="Learn React"/>
      <Todo task="Explore Core Concept" isDone={true}/>
      <Todo task="Try Core Concept"/>
      <Todo task="Try JSX" isDone={true}/>
      <Actor name={"Pritam Kumar Kundu"}/>
      {
        actors.map(actor => <Actor key={actor.id} name={actor} />)
      }
      {
        singers.map(singer => <Singer singer={singer} />)
      }
      <BookStore books={books} />
    </div>
  );
};

const Person = () => {
  const age = 25;
  const number = '01311003738';
  return (
    <div>
      <h3>I am a Person</h3>
      <h4>My Age is {age}</h4>
      <h5>My Phone Number is {number}</h5>
    </div>
  );
};

const Student = () => {
  const name = 'Pritam Kumar Kundu';
  const dept = 'Computer Science and Engineering';
  const id = '190322014';
  return (
    <div className='student'>
      <h2>My Name is {name}</h2>
      <h3>My Name is {dept}</h3>
      <h4>My Name is {id}</h4>
    </div>
  );
};

const Developer = () => {
  const developerStyle = {
    margin : '20px',
    padding : '20px',
    border : '2px solid green',
    borderRadius : '20px'
  }
  return (
    <div style={developerStyle}>
      <h2>Pritam Kumar Kundu</h2>
      <h3>Software Engineer</h3>
    </div>
  );
};

const Device = ({name, price}) => {
  return (
    <div>
      <h2>My Device is {name}</h2>
      <h3>Price {price}</h3>
    </div>
  );
};

export default App;