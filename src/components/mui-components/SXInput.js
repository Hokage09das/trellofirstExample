import { TextField } from "@mui/material";
import React from "react";

const SXInput = () => {
  return (
    <TextField
      fullWidth
      variant='outlined'
      label='SXInput'
      InputLabelProps={{
        classes: {
          root: "dastan",
          focused: "argen",
        },
      }}
      sx={{
        maxWidth: "250px",
      }}
    />
  );
};

export default SXInput;
