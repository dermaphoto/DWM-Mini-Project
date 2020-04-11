/*import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

export const NavBar = _ => {
    return ( <
        header className = 'navbar' >
        <
        div className = 'navbar__icon' >
        <
        h1 >
        <
        NavLink to = '/' > Classical ML Viz < /NavLink> < /
        h1 > <
        /div> <
        nav className = 'navbar__items' >
        <
        ul >
        <
        li >
        <
        NavLink to = '/linear-regression' > Linear Regression < /NavLink> < /
        li > <
        li >
        <
        NavLink to = '/svm' > SVM < /NavLink> < /
        li > <
        li >
        <
        NavLink to = '/k-means' > K - Means < /NavLink> < /
        li > <
        li >
        <
        NavLink to = '/lda' > LDA < /NavLink> < /
        li > <
        /ul> < /
        nav > <
        /header>
    );
}*/
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import {Redirect} from 'react-router-dom';
// import history from './../history/history';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
    color:"inherit",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export const NavBar = _ => {
    const classes = useStyles();
    let history = useHistory();
    const pushLink = link => {
        history.push(link);
      }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
                   <Typography variant="h6" color="inherit">
            DWM Mini Project 
          </Typography>
        </Toolbar>
        <div>
        <Button color="inherit"onClick={()=>{ pushLink('/linear-regression')}}>logistic</Button>
  <Button color="inherit"onClick={()=>{pushLink('/k-means')}}>kmeans</Button>
        <Button color="inherit"onClick={()=>{pushLink('/svm')}}>svm</Button>
        <Button color ="inherit" onCLick={()=>{pushLink('/lda')}} >lda </Button>
        </div>
      </AppBar> 
    </div>      
  );
}


