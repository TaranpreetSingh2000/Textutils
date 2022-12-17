import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, {useState} from 'react';
import Alert from './components/Alert';
import  { BrowserRouter as Router, Route, Routes} from 'react-router-dom';



function App() {

  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not
  
  const [alert, setAlert] = useState(null);  // make a alert state by default it is null



  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type

    })

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const removebodyclasses=()=>{
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-secondary');

  }
  const ToggleMode=(cls)=>{
    removebodyclasses();
    console.log(cls);  // cls for changing the colors
    document.body.classList.add('bg-'+cls);
    if(mode==='light'){
      setMode('dark');
      document.body.style.background='#10154c';
      showAlert("Dark mode has been enabled","success");
      document.title='Montfire - Dark mode';
    }

    else{
      setMode('light');
      document.body.style.background='white';
      showAlert("Light mode has been enabled","success");
      document.title='Montfire - Light mode';



    }
  }


  return (
    <>
 {/*<Navbar title="Montfire" Abouttext="About Us"/>  it is a prop and we also set default prop*/}

 <Router>

    <Navbar title ="Montfire"  Abouttext="About us" mode={mode} ToggleMode={ToggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">

    <Routes>
          <Route exact path='/about' element={ <About />}>
            </Route>
          <Route exact path='/' element={<Textform showAlert={showAlert} heading="Enter the text to analyze below-"  mode={mode}/>}> 

          </Route>
          
        </Routes>
        
        </div>

    </Router>



    </>
  );
}

export default App;
