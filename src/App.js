import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import WorldNews from './Pages.jsx/WorldNews';
import IndiaNews from './Pages.jsx/IndiaNews';
import ContactUS from './Pages.jsx/ContactUS';
import Articles from './Pages.jsx/Articles';


function App() {

 
  
   


  return (
    <div >
{/* {
details.map((row) => {
            < Home key= {row.name } name={row.name}
            model={row.model} />})
} */}
    <BrowserRouter>
      <Navbar/>
      
      <Routes>
     
  


         <Route path='/WorldNews'  element= { < WorldNews   />} />
         <Route path='/IndiaNews' element={ < IndiaNews /> }/>
          <Route path='/ContactUS' element={ < ContactUS /> }/>
          <Route path='/Articles' element={ < Articles /> }/>

      </Routes>


    </BrowserRouter>
      
    </div>
  );
}

export default App;
