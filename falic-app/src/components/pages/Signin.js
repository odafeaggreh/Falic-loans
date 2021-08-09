import { Button, Container, Divider, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { useRef, useState } from 'react';
import AuthNav from '../comPeice/AuthNav';
import { TextField } from '@material-ui/core';
import {Link, useHistory} from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Alert from '@material-ui/lab/Alert';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '95%',
      },
    },
  }));


const Signin = () => {
    const classes = useStyles();

    // Text field refs
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();
        
        try {
          setError('');
          setLoading(true);
          await login(emailRef.current.value, passwordRef.current.value);
          history.push('/');
        }catch {
          setError('Failed to log in');
        }
        setLoading(false)
      }


    return (
        <div className='body'>
            <div className="header">
                <div className="nav">
                    <AuthNav />
                </div>
            </div>
            <Container>
                <div className="main"
                    style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', margin: '100px auto 20px auto'}}
                >
                    <Paper
                        elevation={1}
                        style={{width: "80%", maxWidth: 450}}
                    >
                        <div className="SigninForm">
                            <div className="formHeader" style={{margin: 20, padding: 10}}>
                                <Typography
                                    variant='h5'
                                    style={{textAlign: 'center'}}
                                >
                                    Sign in
                                </Typography>
                                <Divider />
                            </div>
                            {error && <Alert severity='error'>{error}</Alert>}

                            <div className="form">
                            <form noValidate autoComplete="off" className={classes.root}>
                                <TextField
                                    id="email"
                                    label="Email"
                                    type="text"
                                    helperText="Enter your email"
                                    inputRef={emailRef}
                                />
                                <TextField
                                    id="pwd"
                                    label="Password"
                                    type="password"
                                    helperText="Enter your password"
                                    inputRef={passwordRef}
                                />
                          </form>
                            </div>
                        </div>
                    </Paper>
                    <div className="submitBtn">
                        <Button
                            variant="contained"
                            style={{backgroundColor: '#e73c3e', color: '#fff', marginTop: 20}}
                            onClick={handleSubmit}
                            disabled={loading}
                        >
                            Submit
                        </Button>
                    </div>

                    
                
                </div>
                <div className="options">
                        <div
                            style={{textAlign: 'center', marginBottom: 25}}
                        >
                            <div
                                style={{marginRight: 20}}
                            >Do not have an account? <Link to='/signup'>Sign up</Link></div>
                            <div
                                style={{marginLeft: 20}}
                            >Forgot <Link to='/forgotPassword'>password?</Link></div>
                        </div>
                </div>
            </Container>
        </div>
    );
}

export default Signin;
