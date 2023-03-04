import styled from "@emotion/styled";
import { Button, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import brandImg from "../../images/logos/Frame.png";

export const BrandingWrapper = styled(Box)(({theme}) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "rgba(251, 208, 98, 1)",
  height: "70vh",
  padding: '4rem',
  
  clipPath: "polygon(0% 0%, 100% 0%, 100% 85%, 0% 100%)",
}))
const Branding = () => {
  return (
    <BrandingWrapper
    >
      <Box>
       <Stack spacing={3}>
       <Typography sx={{
        fontSize: '2.5rem',
        fontWeight: 'bold',
        lineHeight: '1.2'
       }}>
          Let’s Grow Your Brand To The Next Level
        </Typography>
        <Typography variant="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat 
        </Typography>
        <Button sx={{width: '50%'}} color="primary">Hire Us</Button>
       </Stack>
      </Box>

      <Box sx={{width: '50%', display: {
        xs: 'none',
        sm: 'none',
        md: 'none',
        lg: 'block'
      }}}>
       <img src={brandImg} alt="branding" style={{width: '100%'}} />
      </Box>
    </BrandingWrapper>
  );
};

export default Branding;
