import { Box, Typography } from "@mui/material";
import React from "react";

const SectionTitle = ({ title, colored }) => {
  return (
    <Box>
      <Typography sx={{ fontSize: "34px", fontWeight: "bold" }}>
        {title}{' '}
        
        {colored && <span
        style={{color: '#00c1a2'}}
        >{colored}</span>}
      </Typography>
    </Box>
  );
};

export default SectionTitle;
