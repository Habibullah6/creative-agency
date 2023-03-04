import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../shared/NavBar/NavBar';

const Main = () => {
    return (
       <Box>
         <Container>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </Container>
       </Box>
    );
};

export default Main;