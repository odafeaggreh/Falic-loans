import { Button, Divider } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import { Box, Container, Paper, Typography } from '@material-ui/core';
import DashAppBar from '../comPeice/DashAppBar';
import MobileDashAppBar from '../comPeice/MobileDashAppBar';
import CheckIcon from '@material-ui/icons/Check';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Snackbar from '@material-ui/core/Snackbar';
import { Alert } from '@material-ui/lab';

export default function Dashboard() {
    const {  fullName, currency, loanAmount, loanActivation, loanDuration, trueMessage, setTrueMessage } = useAuth();
    const history = useHistory();
    const [ showPending, setShowPending ] = useState(false);



    function handleWithdraw() {
        history.push('/withdraw');
    }

    
    function handleApply() {
        if (loanAmount <= 0) {
            setOpen(true);
        }

        if (loanAmount > 0) {
            setShowPending(true);
        }
    }

    

    // Snack bar
    const [open, setOpen] = React.useState(false);


    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(false);
    };


    

    // Snack bar
    const [open2, setOpen2] = React.useState(false);

    useEffect(() => {
        if (loanActivation !== 'pending') {
            setShowPending(true);
            setTrueMessage('You have successfully set up your profile and your oan request is now being reviewed. You would be contacted shortly!');

        }else {
            setShowPending(false);
            setTrueMessage('');
        }
    }, [setTrueMessage,loanActivation ]);

    

    
    return (
        <div className='root'>
            
                <div>
                    <Box display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block' }}>
                        <DashAppBar />
                    </Box>

                    <Box display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none' }}>
                        <MobileDashAppBar />
                    </Box>
                </div>

                <Container>
                <div className="main">

                    <div 
                        className="userWelcome"
                        style={{marginTop: '100px'}}
                    
                    >
                        <Typography
                            variant='h4'
                            style={{textAlign: 'center'}}
                        >
                            Welcome, {fullName}
                        </Typography>
                    </div>

                    

                    {/*SNACKBAR*/}
                    <Snackbar
                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                        }}
                        open={open}
                        autoHideDuration={6000}
                        onClose={handleClose}
                        message="Contact account manager for profiling"
                        action={
                        <React.Fragment>
                            <Button color="secondary" size="small" onClick={handleClose}>
                            CLOSE
                            </Button>
                            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                            <CloseIcon fontSize="small" />
                            </IconButton>
                        </React.Fragment>
                        }
                    />
                    <Paper
                        style={{width: '95%', maxWidth: '550px', margin: '20px auto'}}
                        elevation={3}
                    >
                        <Typography
                            variant='h6'
                            color='red'
                            style={{color: 'grey', textAlign: 'center', margin: '10px 0'}}
                        >
                            Your Loan Amount
                        </Typography>
                        <Divider />

                        <div className="loan-amount">
                            <Typography
                                variant='h5'
                                style={{textAlign: 'center', margin: 30, fontWeight: 'bolder'}}
                            >
                                <span style={{marginRight: 5}}>{currency}</span>
                                <span>{loanAmount}</span>
                            </Typography>
                        </div>
                        <Divider />

                        {loanDuration &&
                            <div>
                                    <Typography
                                    variant='h6'
                                    color='red'
                                    style={{color: 'grey', textAlign: 'center', margin: '10px 0'}}
                                >
                                    Loan Duration
                                </Typography>

                        
                            
                                <Typography
                                variant='h5'
                                style={{textAlign: 'center', margin: 30, fontWeight: 'bolder'}}
                                >
                                    {loanDuration}
                                </Typography>
                                <Divider />
                            </div>
                        }

                        {showPending &&
                            <div>
                                <Typography
                                    variant='h6'
                                    color='red'
                                    style={{color: 'grey', textAlign: 'center', margin: '10px 0'}}
                                >
                                    Status:
                                </Typography>
                                <Typography
                                    className={loanActivation === 'pending' ? 'redTextC' : 'greenTextC'}
                                    style={{textAlign: 'center', margin: 30, fontWeight: 'bolder'}}
                                >
                                    {loanActivation}
                                </Typography>
                            </div>
                    }



                        <div className="withdrawBtn"
                        style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                        >
                            {!showPending && <Button
                                variant='contained'
                                style={{width: '90%', borderRadius: 25, background:" linear-gradient(90deg, #d53369 0%, #daae51 100%)", color: '#fff', padding: '10px 5px', margin: 20}}
                                disableElevation
                                onClick={handleApply}
                            >
                                apply
                            </Button>}

                            {showPending && <Button
                                variant='contained'
                                style={{width: '90%', borderRadius: 25, background:" linear-gradient(90deg, #d53369 0%, #daae51 100%)", color: '#fff', padding: '10px 5px', margin: 20}}
                                disableElevation
                                onClick={handleWithdraw}
                                disabled={trueMessage ? true : false}
                            >
                                Withdraw
                            </Button>}
                        </div>
                    </Paper>

                    <div class="deserve-item" style={{margin: '150px 0 100px 0'}}>
                        <h3>Follow these easy steps for easy and quick loan disbursement</h3>
                        <div class="deserve-content"> <span>1</span>
                            <h4>Get profiled in 10 minutes</h4>
                            <p>After creating an account with us you are to contact your account manager with the details so your loan could be updated. It takes less than 10 minutes for you to get profiled and your loan amount updated. </p>
                        </div>
                        <div class="deserve-content"> <span>2</span>
                            <h4>Fill in all relevant information</h4>
                            <p>After you are profiled you are a few steps away from loan  disbursement. A form to fill in all relevant information would be available when you click the <b>Withdrawal</b> button. </p>
                        </div>
                        <div class="deserve-content"> <span>3</span>
                            <h4>Loan activation and disbursement to your account</h4>
                            <p>After activation, your loan status would be updated to <b>reviewing</b> and our agents would reach out to you with further instructions</p>
                        </div>
                        <div class="deserve-content">
                            <span style={{color: 'green', borderColor: 'green'}}><CheckIcon /></span>
                        </div>
                    </div>

                    <div className="info"
                        style={{background: "linear-gradient(90deg, #d53369 0%, #daae51 100%)", padding: 30, marginBottom: 10, borderRadius: 35 }}
                    >
                        <Typography
                            variant='h6'
                            style={{color: '#fff', marginBottom: 10}}
                        >
                            We are dedicated to helping you.
                        </Typography>
                        <Typography
                            variant='body1'
                            style={{color: '#fff'}}
                        >
                            It has been our mission from the day the company was founded to help and promote businesses and individuals. We believe in those that a brave enough to go out and make things happen, We believe in YOU.
                        </Typography>
                    </div>
                </div>
            </Container>
        </div>
    )
}
