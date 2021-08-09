import React from 'react';
import { Box, Container, Paper, Typography } from '@material-ui/core';
import AuthAppBar from '../comPeice/AuthAppBar';
import MobileAuthAppBar from '../comPeice/MobileAuthAppBar';

export default function AuthNav() {
    return (
        <div>
        <div>
            <Box display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block' }}>
                <AuthAppBar />
            </Box>

            <Box display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none' }}>
                <MobileAuthAppBar />
            </Box>
        </div> 
        </div>
    )
}
