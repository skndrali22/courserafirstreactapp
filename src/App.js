// import logo from './logo.svg';
import AboutUs from "./About";
import "./App.css";
import HomePage from "./HomePage";
import DayMessage from "./DayMessage";
// import Cards from './components/Cards';
// import UseHook from './UseHook';
// import RegisterForm from './RegisterForm';
// import UseRefHook from './UseRefHook';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ImageDisplay from "./ImageDisplay";
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

      {/* <RegisterForm />
      <br/>
      <UseRefHook/> */}
      <BrowserRouter>
      <nav style={{"border":"2px solid black" , "display":"flex","alignItems":"center","gap":"20px" ,"height":"50px" , "padding":"10px"}}>
        <Link to="/" className="nav-item" style={{"textDecoration":"none", "fontSize":"18px", "fontWeight":"bold" ,"color":"black"}}>
          Home
        </Link>
        <Link to="/about-us" className="nav-item" style={{"textDecoration":"none", "fontSize":"18px", "fontWeight":"bold","color":"black"}}>
          About Us
        </Link>

        <Link to="/day-message" className="nav-item" style={{"textDecoration":"none", "fontSize":"18px", "fontWeight":"bold","color":"black"}}>
          Day Message
        </Link>
        <Link to="/image-display" className="nav-item" style={{"textDecoration":"none", "fontSize":"18px", "fontWeight":"bold","color":"black"}}>
          Image display Method
        </Link>
      </nav>
      
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="day-message" element={<DayMessage />} />
          <Route path="image-display" element={<ImageDisplay />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
