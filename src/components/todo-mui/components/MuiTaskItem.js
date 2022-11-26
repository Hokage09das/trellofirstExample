import React from "react";

import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { createTheme, Hidden, ThemeProvider } from "@mui/material";

const MuiTaskItem = ({ title }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CardContent>
          <Typography
            variant='h5'
            component='div'
          >
            {title}
          </Typography>
          <Button variant='contained'>Add SUB TASK</Button>
        </CardContent>
      </ThemeProvider>
    </>
  );
};

export default MuiTaskItem;

const theme = createTheme({
  components: {
    MuiCardContent: {
      styleOverrides: {
        root: {
          maxWidth: "250px",
          backgroundColor: "#B1A296",
          margin: "15px 15px",
          wordWrap: "break-word",
          overflowX: "hidden",
          height: "auto",
          borderRadius: "7px",
        },
      },
    },
  },
});
