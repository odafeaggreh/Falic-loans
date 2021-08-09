import { Button, Container, Divider, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import AuthNav from '../comPeice/AuthNav';
import { TextField } from '@material-ui/core';
import {Link} from 'react-router-dom';
import { useRef, useState } from 'react';
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


const ForgotPass = () => {
    const classes = useStyles();
    const { resetPassword } = useAuth();
    // Text field refs
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const emailRef = useRef();
    const [message, setMessage] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        
        try {
            setMessage('');
            setError('');
            setLoading(true);
            await resetPassword(emailRef.current.value);
            setMessage('Check your inbox for further instructions')
        }catch {
            setError('Failed to reset password');
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
                        <div className="ForgotPassForm">
                            <div className="formHeader" style={{margin: 20, padding: 10}}>
                                <Typography
                                    variant='h5'
                                    style={{textAlign: 'center'}}
                                >
                                    Password reset
                                </Typography>
                                <Divider />
                            </div>
                            {error && <Alert severity='error'>{error}</Alert>}
                            {message && <Alert severity='success'>{message}</Alert>}

                            <div className="form">
                            <form noValidate autoComplete="off" className={classes.root}>
                                <TextField
                                    id="email"
                                    label="Email"
                                    type="text"
                                    helperText="Enter your email"
                                    inputRef={emailRef}
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
                            >Already have an account? <Link to='/signin'>Log in</Link></div>
                        </div>
                </div>
            </Container>
        </div>
    );
}

export default ForgotPass;
