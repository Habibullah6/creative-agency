import { Card, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import client1 from "../../images/customer-1.png";
import client2 from "../../images/customer-2.png";
import client3 from "../../images/customer-3.png";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";

const ClientFeedback = () => {
  const clients = [client1, client2, client3];
  return (
    <Box sx={{ textAlign: "center", my: "3rem" }}>
      <SectionTitle title="Client" colored="feedback"></SectionTitle>

      <Box sx={{ marginTop: "3rem" }}>
        <Grid container spacing={5}>
          {clients.map((client, i) => (
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <Card sx={{ padding: "10px", border: '2px solid green' }}>
                <Box sx={{display: 'flex', alignItems: 'center'}}>
                  <Box>
                    <img
                      src={client}
                      alt="#"
                      style={{ width: "70px", height: "70px" }}
                    />
                  </Box>
                  <Box sx={{marginLeft: '2rem'}}>
                    <Typography variant="p" sx={{display: 'block'}}>Nash patrick</Typography>
                    <Typography variant="p" sx={{display: 'block'}}>CEO, Meta</Typography>
                  </Box>
                </Box>

                <Box sx={{ textAlign: "justify", marginTop: '2rem' }}>
                 
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ClientFeedback;
