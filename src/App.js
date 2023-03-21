import logo from './logo.svg';
import './App.css';

const number = 5555;
const singers =[
   {name:'Dr.Mahafuz',job:'singer'},
   {name:'Agun',job:'singe2'},
   {name:'Shuvro',job:'singer3'},
   {name:'Eva Rahaman',job:'singer4'},
   {name:'Arifin',job:'singer5'}
]


const singer2 = {name:'Eva Rahaman',job:'singer'}
const singerStyle ={
  color:'purple',
  backgroundColor:'white'

  
}


function App() {
  const nayoks = ['Rubel', 'Bapparaz','kuber','Jashim','Alomgir','Anowar','Riaz','Salman shah']
  return (


    <div className="App">
      {
        nayoks.map(nayok => <li>Name: {nayok}</li>)
      }
      {/* {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      } */}

      {
        singers.map(singer => <Person name={singer.name}></Person>)
      }

      {/* <Person name={nayoks[0]} nayika="Mousumi"></Person>
      <Person name ={nayoks[1]} nayika="cheka"></Person>
      <Person name={nayoks[2]} nayika="kopila"></Person>
      <Person></Person>
      <Person></Person> */}
      <h5>New Component.YAY</h5>
      <h5>Rock mama React mama</h5>
      <Friend movie="shingam" phone="01232323"></Friend>
      <Friend  phone="0123434323"></Friend>
      <Friend></Friend>
      <Friend></Friend>
      <Friend></Friend>

  
    </div>
  );
}

function Person(props){
  return (
    <div className='person'>
    <h1>{props.name}</h1>
    <p>Nayika: {props.nayika}</p>
  </div>
  )
}

function Friend(props){
  console.log(props);
  return (
    <div className='container'>
      <h3>Name:{props.movie}</h3>
      <p>Phone:{props.phone} </p>
    </div>
  )
}
export default App;
