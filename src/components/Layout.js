import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Layout(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
      <Grid item xs={12} md={12} xl={12} lg={12}>
          <Item><h1>{props.title}</h1></Item>
        </Grid>
        <Grid item xs={12} md={6}>
          <Item><img src={props.url} className='heroimg' width={400}/></Item>
        </Grid>
        <Grid item xs={12} md={6}>
          <Item><p>{props.txt}</p></Item>
        </Grid>
       
      </Grid>
    </Box>
  );
}
