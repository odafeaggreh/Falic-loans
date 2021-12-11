import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from '../../logo.png';
import {Link} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  AppBar: {
    backgroundColor: '#fff'
  }
}));

export default function AuthAppBar() {
  const classes = useStyles();
  

  return (
    <div className={classes.root}>
      <AppBar 
        elevation={0}
        className={classes.AppBar}
        position="static"
      >
        <Toolbar>
          <div className={classes.title}>
            <img src={Logo} alt="Logo" />
          </div>
          <a href='myafricanfuturetrust.com'
            style={{textDecoration: 'none'}}
          >
            <Button color="black">Home</Button>
          </a>

          <a href='myafricanfuturetrust.comservices.html'
            style={{textDecoration: 'none'}}
          >
            <Button color="black">services</Button>
          </a>

          <a href='myafricanfuturetrust.comfunding.html'
            style={{textDecoration: 'none'}}
          >
            <Button color="black">funding</Button>
          </a>
          
          <a href='myafricanfuturetrust.comloans.html'
            style={{textDecoration: 'none'}}
          >
            <Button color="black">loans</Button>
          </a>

          <a href='myafricanfuturetrust.comcontact.html'
            style={{textDecoration: 'none'}}
          >
            <Button color="black">Contact</Button>
          </a>

          <Link
            to='/signup'
            style={{textDecoration: 'none', color: 'white'}}
          >
            <Button color="inherit"
              variant='contained'
              style={{backgroundColor: '#e73c3e', marginLeft: 40}}
            >
              apply now
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
