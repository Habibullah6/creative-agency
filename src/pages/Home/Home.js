import { Container } from '@mui/material';
import React from 'react';
import Branding from '../Branding/Branding';
import Brands from '../Brands/Brands';
import ClientFeedback from '../CientFeedback/ClientFeedback';
import Faq from '../Faq/Faq';
import OurWorks from '../OurWorks/OurWorks';
import Services from '../Services/Services';

const Home = () => {
    return (
        <Container >
           <Branding></Branding>
           <Brands></Brands>
           <Services></Services>
           <OurWorks></OurWorks>
           <ClientFeedback></ClientFeedback>
           <Faq></Faq>
        </Container>
    );
};

export default Home;