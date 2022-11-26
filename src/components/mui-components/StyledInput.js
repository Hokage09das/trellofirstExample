import React from "react";
import { styled, TextField } from "@mui/material";

const StyledTextField = styled((props) => <TextField {...props} />)((props) => {
  return {
    maxWidth: "250px",
    backgroundColor: "lightgreen",
    "& > .labelRoot": {
      color: props.state === "active" ? "red" : "yellow",
      "&.labelFocused": {
        color: "coral ",
      },
    },
    "& .input": {
      color: "red",
      "&.focused": {
        borderRadius: "20px",
      },
    },
  };
});

const StyledInput = () => {
  return (
    <StyledTextField
      fullWidth
      variant='filled'
      label='StyledINput'
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
      state=''
    />
  );
};

export default StyledInput;
// const theme = createTheme({
//   components: {
//     MuiTextField: {
//       styleOverrides: {
//         root: {
//           maxWidth: "250px",
//           backgroundColor: "yellow",
//           "& .labelRoot": {
//             color: "red",
//             "&.labelFocused": {
//               color: "green ",
//             },
//           },
//           "& .input": {
//             color: "violet",
//             "&.focused": {
//               borderRadius: "20px",
//             },
//           },
//         },
//       },
//     },
//   },
// });
