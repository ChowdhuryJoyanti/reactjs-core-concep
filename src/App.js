import logo from './logo.svg';
import './App.css';

const number = 5555;
const singer = {name:'Dr.Mahafuz',job:'singer'}
const singer2 = {name:'Eva Rahaman',job:'singer'}
const singerStyle ={
  color:'purple',
  backgroundColor:'white'

  
}


function App() {
  return (
    <div className="App">
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <h5>New Component.YAY</h5>
      <h5>Rock mama React mama</h5>
      <Friend></Friend>
      <Friend></Friend>
      <Friend></Friend>
      <Friend></Friend>
      <Friend></Friend>

  
    </div>
  );
}

function Person(){
  return (
    <div className='person'>
    <h1>Sakib Al Hasan</h1>
    <p>Profession:Cricket</p>
  </div>
  )
}

function Friend(){
  return (
    <div className='container'>
      <h3>Name:Ajay Devgun</h3>
      <p>job:maramari</p>
    </div>
  )
}
export default App;