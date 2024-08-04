import {React,useState,useEffect} from 'react';
import './App.css';
import Nav from './components/Nav';
import Layout from './components/Layout';



function App() {
let [phtos,setPhotos] = useState([]);
let [calldate,setcalldate] = useState([ "2024-3-14"]);
//let setdate = (dvalue)=>console.log(dvalue);
 useEffect(()=>{
  async function fetchData() {
    let response =  await fetch(`https://api.nasa.gov/planetary/apod?api_key=CRV1AVEjx9fv0tgzNOeuigh51PDNR9c6Oe1vgV2f&date=${calldate}`);
   var data = await response.json();
   await console.log(data);
   await setPhotos(data);
    
  }
  fetchData();
  
    

},[calldate])


  return (
  <>
  <Nav fnc={(dva)=>{
    let newdate = dva.$y+"-"+dva.$M+"-"+dva.$D ;
    setcalldate(newdate);
    
  }}/>
   <Layout url={phtos.url} txt={phtos.explanation} title={phtos.title} type={phtos.media_type} author={phtos.copyright}/>
  </>
  );
}

export default App;
