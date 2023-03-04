import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#000000",
        color: "#fff",
        padding: '1rem'
      }}
    >
      <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
        <Box>
          <Typography variant="h6">Creative agency</Typography>
        </Box>

        <Box>
          <Typography variant="p" sx={{ display: "inline", marginRight: '2rem' }}>
            Ready to get started
          </Typography>
          <Button color="success" sx={{  display: 'inline' }}>
            Get started
          </Button>
        </Box>
     
      
      </Box>
    </Box>
  );
};

export default Footer;
