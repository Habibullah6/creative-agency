import styled from "@emotion/styled";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import service1 from "../../images/icons/service1.png";
import service2 from "../../images/icons/service2.png";
import service3 from "../../images/icons/service3.png";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
import Service from "../Service/Service";

export const BrandingWrapper = styled(Box)(({ theme }) => ({}));
const Services = () => {
  const services = [service1, service2, service3];
  return (
    <BrandingWrapper sx={{ textAlign: "center", my: '5rem' }}>
      <SectionTitle title="Provide Awesome" colored="Services"></SectionTitle>

      <Grid container spacing={5} sx={{marginTop: '3rem'}}>
       {services.map((img, i) =>  <Grid item xs={12} sm={12} md={6} lg={4} key={i}>
       <Service img={img}></Service>
       </Grid>)}
      </Grid>
    </BrandingWrapper>
  );
};

export default Services;
