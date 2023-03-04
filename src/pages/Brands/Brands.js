import styled from '@emotion/styled';
import { Box } from '@mui/system';
import React from 'react';
import airBnb from '../../images/logos/airbnb.png';
import google from '../../images/logos/google.png';
import netflix from '../../images/logos/netflix.png';
import { default as slack, default as uber } from '../../images/logos/uber.png';

const brands = [slack, google, uber, netflix, airBnb];
export const BrandsWrapper = styled(Box)(({theme}) => ({
    display: "flex",
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: '2rem',
    '& > img': {
        height: '60px'
    },
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        marginBottom: '1rem'
      },
    
  }))
const Brands = () => {
  
    
    return (
        <BrandsWrapper>
            {
                brands.map((brand, i) => <img src={brand} alt='brands'/>)
            }
        </BrandsWrapper>
    );
};

export default Brands;