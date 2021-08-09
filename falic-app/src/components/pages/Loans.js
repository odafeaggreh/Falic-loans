import { Button, Divider, List, ListItem } from '@material-ui/core';
import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import { Box, Container, Paper, Typography } from '@material-ui/core';
import AuthAppBar from '../comPeice/AuthAppBar';
import MobileAuthAppBar from '../comPeice/MobileAuthAppBar';
import DashAppBar from '../comPeice/DashAppBar';
import MobileDashAppBar from '../comPeice/MobileDashAppBar';
import CheckIcon from '@material-ui/icons/Check';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Snackbar from '@material-ui/core/Snackbar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: '36ch',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
  }));

export default function Loans() {
    const [error, setError] = useState('');
    const { currentUser, logout, fullName, country, currency, loanAmount, loanActivation, loanDuration } = useAuth();
    const history = useHistory();
    const [ showPending, setShowPending ] = useState(false);

    async function handleLogout() {
        setError('');

        try{
            await logout();
            history.push('/signin');
        }catch {
            setError('Failed to logout');
        }

    }

    function handleWithdraw() {
        history.push('/withdraw');
    }


    function handleApply() {
        if (loanAmount <= 0) {
            setOpen(true);
        }

        if (loanAmount > 0) {
            setShowPending(true);
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

    const classes = useStyles();
    let pendingColor;

    if (loanActivation === 'pending'){

    }
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
                    <Paper
                        style={{paddingBottom: 10}}
                    >
                        <div className="header"
                            style={{marginTop: 100}}
                        >
                            <Typography
                                variant='h4'
                                style={{textAlign: 'center'}}
                            >
                                Loans
                            </Typography>
                            <Divider />
                        </div>

                        <div className="main"
                            style={{padding: '10px 0'}}
                        >
                            <div className="listItem"
                                style={{padding: 20}}
                            >
                                <div
                                    style={{marginBottom: 10}}
                                >
                                    <Typography
                                        variant='h6'
                                    >
                                        Loan Amount
                                    </Typography>

                                    <Typography
                                    >
                                        <span>{currency}</span>
                                        <span>{loanAmount}</span>
                                    </Typography>
                                </div>
                                <div
                                    style={{marginBottom: 10}}
                                >
                                    <Typography
                                        variant='h6'
                                    >
                                        Loan Duration
                                    </Typography>
                                    <Typography>{loanDuration}</Typography>
                                </div>
                                <div
                                    style={{marginBottom: 10}}
                                >
                                    <Typography
                                        variant='h6'
                                    >
                                        Status
                                    </Typography>
                                    <Typography
                                        className={loanActivation === 'pending' ? 'redTextC' : 'greenTextC'}
                                    >
                                        {loanActivation}
                                    </Typography>
                                </div>
                            </div>
                            <Divider />
                        </div>
                    </Paper>
                </Container>
        </div>
    )
}
