import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const Service = ({img}) => {
    return (
        <Card sx={{ 
        boxShadow: 'none',
        '&:hover': {
            boxShadow:' rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'
        }
        }} >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={img}
            alt="#"
            sx={{width: 'auto', mx: 'auto', pt: '20px'}}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
};

export default Service;