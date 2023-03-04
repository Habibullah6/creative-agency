import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { createTheme, IconButton, Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SectionTitle from "../../shared/SectionTitle/SectionTitle";
const OurWorks = () => {
  const [value, setValue] = React.useState(0);

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
      <Box sx={{ display: "flex", justifyContent: "space-between", [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        marginBottom: '1rem'
      } }}>
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
                  color: "#00c1a2",
                  fontWeight: "bold",
                },
              }}
            >
              <Tab label="Item One" />
              <Tab label="Item Two" />
              <Tab label="Item Three" />
            </Tabs>
          </Box>
          <Box>
            <IconButton>
              <ArrowBackIcon />
            </IconButton>

            <IconButton>
              <ArrowForwardIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OurWorks;
