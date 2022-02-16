import React ,{useState, useEffect} from 'react';
import axios from 'axios';
import "./WorldNews.css";



const WorldNews = () => {
  const [data, setData ] = useState([]);
  
  
   
  
  useEffect(() => {

    axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=0e98b83bbe4c47279aecc6cac9401c5e")
    .then((res) => {
    setData(res.data.articles);
 

   
    
   
      //  setDetail( data )
  
    // fetch("https://swapi.py4e.com/api/vehicles/")
    // .then(res => res.json)
    // .then(data => {
    //   console.log(data)
    //   setDetail(data)



    // axios.get(`https://newsapi.org/`)
    // .then(res => res.json)
    //   .then(res => {
    //     const persons = res.data;
    //    setData({ persons });
    //    console.log(setData)

    } )
    .catch(err => alert(err));
     
     


  } ,[]  );

  
return(
<div>



  {
    data.map((row) => {
      return( 
<div className="col">

  <div className="card" style={{width: "100%"}}>
     <img className='card-img-top' src={row.urlToImage} />
       <div >
          <h1 > {row.title}</h1>
          <h3 >{row.description}</h3>
      </div>
  </div>


</div>



      )
    }
    )
  }


</div>


)
  
  

}
export default WorldNews;