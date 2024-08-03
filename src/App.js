import {React,useState,useEffect} from 'react';
import './App.css';
import Nav from './components/Nav';
import Layout from './components/Layout';



function App() {
const [phtos,setPhotos] = useState([]);
useEffect(()=>{
  async function fetchData() {
   var response =  await fetch("https://api.nasa.gov/planetary/apod?api_key=CRV1AVEjx9fv0tgzNOeuigh51PDNR9c6Oe1vgV2f");
   var data = await response.json();
   await console.log(data);
   setPhotos(data);
    
  }
  fetchData();
    

},[])
  return (
  <>
  <Nav/>
   <Layout url={phtos.url} txt={phtos.explanation} title={phtos.title}/>
  </>
  );
}

export default App;
