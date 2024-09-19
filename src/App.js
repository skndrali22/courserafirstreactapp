// import logo from './logo.svg';
import './App.css';
// import Cards from './components/Cards';
// import UseHook from './UseHook';
import RegisterForm from './RegisterForm';
import UseRefHook from './UseRefHook';
function App() {

  // function handleClick(){
  //   let randomNum = Math.floor(Math.random() * 3) + 1;
  //   console.log(randomNum);
  //   let userInput = prompt('Guess a number'); 
  //   alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
  // }

  return (
    // <div className="App">
    //     <h1>Task: Add three Card elements</h1>
    //     <Cards h2="First card's h2" h3="First card's h3" />
    //     <Cards h2="Second card's h2" h3="Second card's h3" />
    //     <Cards h2="Third card's h2" h3="Third card's h3" />
    // </div>

    <div>
      {/* <h1>Task: Add a button and handle a click event</h1>
      <button 
        onClick = {handleClick}>
        Guess the number between 1 and 3
      </button> */}
      {/* <UseHook/> */}

      <RegisterForm />
      <br/>
      <UseRefHook/>
    </div>


  );
}

export default App;
