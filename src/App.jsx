
import './App.css'
import Posts from './Posts'
// import Counter from './Player';
// import State from './State';
// import Player from './Player';
// import Users from './Users';
function App() {
  // function handleClick(){
  //   alert('click me')
  // }
  // const handleSend = () => alert('send ');
  // const handleReset = (sum) => alert(sum + 3);

  
  return (
    <>
      <h3>Core concepts 2</h3>

    <ol>
      <li>Components</li>
      <li>JSX</li>
      <li>Props</li>
      <li>Event Handler</li>
      <li>State</li>
      <li>Effect</li>
    </ol>
    

    <hr></hr>

    <Posts></Posts>


      {/* <Users ></Users>
    <Player></Player>
    <State></State>

      <button onClick={handleClick}>Click me</button>
      <button onClick={handleSend}>Send </button>
      <button onClick={()=>{handleReset(5)}}>Reset </button>
      <button onClick={function handleFrom(){alert('from')}}>From</button> */}
     
      
      
    </>
  )
}

export default App
