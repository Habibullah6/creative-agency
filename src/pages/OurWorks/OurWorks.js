import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { createTheme, Grid, IconButton, Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import img1 from "../../images/carousel-1.png";
import img2 from "../../images/carousel-2.png";
import img3 from "../../images/carousel-3.png";
import img4 from "../../images/carousel-4.png";
import img5 from "../../images/carousel-5.png";


import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import CreativeCard from "../CreativeCard/CreativeCard";
const OurWorks = () => {
  const [value, setValue] = React.useState(0);
  console.log(value);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });

  return (
    <Box sx={{ my: "5rem" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            marginBottom: "1rem",
          },
        }}
      >
        <Box>
          <SectionTitle title="Here are some" colored="of works"></SectionTitle>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Tabs
              value={value}
              onChange={handleChange}
              sx={{
                "& .MuiTabs-indicator": {
                  display: "none",
                },
                "& .Mui-selected": {
                  color: "green",
                  fontWeight: "bold",
                },
              }}
            >
              <Tab label="Item One" />
              <Tab label="Item Two" />
              <Tab label="Item Three" />
            </Tabs>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <IconButton
              sx={{ border: "1px solid green", marginRight: "10px" }}
              onClick={() => setValue(value - 1)}
              disabled={value === 0}
            >
              <ArrowBackIcon />
            </IconButton>

            <IconButton
              sx={{ border: "1px solid green" }}
              onClick={() => setValue(value + 1)}
              disabled={value === 2}
            >
              <ArrowForwardIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>

      <Box sx={{ marginTop: "100px" }}>
        <Grid container spacing={5} >
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <CreativeCard img={img1}></CreativeCard>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4}>
            <CreativeCard img={img2}></CreativeCard>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4}>
            <CreativeCard img={img3}></CreativeCard>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4}>
            <CreativeCard img={img4}></CreativeCard>
          </Grid>

          <Grid item xs={12} sm={6} md={6} lg={4} >
            <CreativeCard img={img5}></CreativeCard>
          </Grid>

         
        </Grid>
      </Box>
    </Box>
  );
};

export default OurWorks;
