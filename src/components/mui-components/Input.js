import { createTheme, TextField, ThemeProvider } from "@mui/material";
import React from "react";

const Input = () => {
  return (
    <ThemeProvider theme={theme}>
      <TextField
        fullWidth
        variant='filled'
        label='Theme'
        InputLabelProps={{
          classes: { root: "labelRoot", focused: "labelFocused" },
        }}
        InputProps={{
          classes: {
            root: "input",
            error: "error",
            focused: "focused",
          },
        }}
      />
    </ThemeProvider>
  );
};

export default Input;

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          maxWidth: "250px",
          backgroundColor: "yellow",
          "& .labelRoot": {
            color: "red",
            "&.labelFocused": {
              color: "green ",
            },
          },
          "& .input": {
            color: "violet",
            "&.focused": {
              borderRadius: "20px",
            },
          },
        },
      },
    },
  },
});
