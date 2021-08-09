import React, {useState} from 'react';
import { makeStyles, responsiveFontSizes } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from '../../logo.png';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useAuth } from '../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';

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
  },
  navLinks: {
      color: '#000',
      textDecoration: 'none',
      fontWeight: 'bold',
      margin: 20
  }
}));

export default function DashAppBar() {
  const classes = useStyles();
  const { fullName, logout } = useAuth();
  const history = useHistory();
  const [error, setError] = useState('');

  async function handleLogout() {
    setError('');

    try{
        await logout();
        history.push('/signin');
    }catch {
        setError('Failed to logout');
    }

}

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
          <Button><Link className={classes.navLinks} to='/'>Home</Link></Button>
          <Button><Link className={classes.navLinks} to='/loan'>Loan</Link></Button>
          <Button><Link className={classes.navLinks} to='/profile'>Account</Link></Button>

          <Button color="inherit"
            variant='contained'
            style={{backgroundColor: '#e73c3e', marginLeft: 40}}
            startIcon={<AccountCircleIcon />}
          >
            {fullName}
          </Button>

          <Button color="inherit"
            variant='contained'
            style={{backgroundColor: '#e73c3e', marginLeft: 40}}
            onClick={handleLogout}
          >
            Logout 
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
