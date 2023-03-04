import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
const Faq = () => {
  return (
    <Box sx={{ my: "3rem" }}>
      <Box sx={{ textAlign: "center" }}>
        <SectionTitle
          title="Frequently asked"
          colored="question"
        ></SectionTitle>
      </Box>
      <Accordion
        sx={{
          marginTop: "3rem",
          boxShadow: "none",
          border: "2px solid #00c1a2",
          borderRadius: "3px",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          marginTop: "3rem",
          boxShadow: "none",
          border: "2px solid #00c1a2",
          borderRadius: "3px",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          marginTop: "3rem",
          boxShadow: "none",
          border: "2px solid #00c1a2",
          borderRadius: "3px",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Faq;
