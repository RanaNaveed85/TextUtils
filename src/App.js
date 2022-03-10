 /* VIDEO 09 */
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';

 import React, { useState } from 'react'

 import {BrowserRouter as Router,  Switch,  Route} from "react-router-dom";
 


// let name = "Harry1";
// let switchHeading = 'Light Eanabled';
function App() {

const [mode, setMode] = useState('light'); //whether darkmode is enable/notenable


const [alert, setalert] = useState(null);

const showAlert = (message, type)=>{
      setalert({
        msg: message,
        type: type
        })
        setTimeout(() => {
          setalert(null);
          
        }, 1500);
}


const toggleMode = () =>{
if(mode === 'light'){
setMode('dark');
document.body.style.background = '#042743';
//  switchHeading = 'Dark Eanabled';
showAlert("Dark Mode has been Enables", "success");
document.title = 'TextUtils - Dark Mode';

// document.title = 'TextUtils - Dark Mode';
// setInterval(() => {
// document.title = 'TextUtils is amazing';
  
// }, 2000);

// setInterval(() => {
//   document.title = 'Instal TextUtils now';
    
//   }, 2000);

}
else{
setMode('light')
document.body.style.background = 'white';
//  switchHeading = 'Light Eanabled';
showAlert("Light Mode has been Enables", "primary ");
document.title = 'TextUtils - Light Mode';


}

}
  return (   
    <>
      
      <Router>
      <Navbar title="TextUtiles" mode = {mode}  toggleMode = {toggleMode} />  

      <Alert alert = {alert}/>
     
     <div className="container my-3">        

        <Switch>
          <Route exact path="/aboutlink"> <About/> </Route>          
          <Route exact path="/"> <TextForm  showAlert = {showAlert} heading = "Text To Analyse!" mode = {mode}/> </Route> 
        </Switch>

        </div>
      </Router>
      
    </>

  );

}

export default App;
 
  