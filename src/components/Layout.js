import * as React from 'react';
//import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
//import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Datepicker from './Datepicker';
import ResponsiveIframe from './ResponsiveIframe';
/*const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));*/

export default function Layout(props) {
 if (props.type==="video") {
  return (
    <>
    <div className='header'>
      <h1>{props.title}</h1>
      <p>-By {props.authors}</p>
      <div className='datecontainer'> <Datepicker fn={props.fnc}/></div>
     
    </div>
    <Box sx={{ flexGrow: 1 , p:3}} id="container">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} className='vdCont'>  
         <ResponsiveIframe link={props.url}/>
        </Grid>
        <Grid item xs={12} md={6} className='text' sx={{pl:2}}>
          <p>{props.txt}</p>
        </Grid>
        
      </Grid>
    </Box>
    </>
  );
 } else {
  return (
    <>
    <div className='header'>
      <h1>{props.title}</h1>
      <p>-By {props.authors}</p>
      <div className='datecontainer'> <Datepicker fn={props.fnc}/></div>
     
    </div>
    <Box sx={{ flexGrow: 1 , p:3}} id="container">
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} className='imgCont'>  
         <img src={props.url} className='heroimg' width={400} alt=""/>
        </Grid>
        <Grid item xs={12} md={6} className='text' sx={{pl:2}}>
          <p>{props.txt}</p>
        </Grid>
        
      </Grid>
    </Box>
    </>
  );
 }
}
