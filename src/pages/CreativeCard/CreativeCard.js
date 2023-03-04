import ControlPointIcon from '@mui/icons-material/ControlPoint';
import { Box, Card, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import React from "react";
const CreativeCard = ({ img }) => {
  return (
    <Card sx={{ padding: "10px", borderRadius: "10px" }}>
      <CardMedia
        sx={{ height: 200, borderRadius: "10px" }}
        image={img}
        title="green iguana"
      />
      <CardContent sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Box>
          <Typography gutterBottom variant="h5" component="div">
            Cards
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread 
          </Typography>
        </Box>
        <IconButton>
         <ControlPointIcon/>
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default CreativeCard;
