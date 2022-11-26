import React from "react";
import { AddTask } from "@mui/icons-material";
import {
  Button,
  createTheme,
  FormControl,
  TextField,
  ThemeProvider,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { muiAction } from "../mui-store/mui-task-reducer";

const MuiTasksForm = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const newTask = {
    title: value,
    id: Math.random(),
    completed: false,
  };
  const onAddtask = () => {
    dispatch(muiAction.addTask(newTask));
    setValue("");
  };

  return (
    <ThemeProvider theme={theme}>
      <FormControl
        variant='standard'
        sx={{ height: "70px" }}
      >
        <TextField
          variant='filled'
          label='write Task'
          InputLabelProps={{ classes: { focused: "focus" } }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button
          variant='outlined'
          startIcon={<AddTask />}
          onClick={onAddtask}
        >
          Add your task
        </Button>
      </FormControl>
    </ThemeProvider>
  );
};

export default MuiTasksForm;

const theme = createTheme({
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "row",
          height: "100px",
          alignItems: "center",
          justifyContent: "center",
          "& .MuiFormControl-root": {
            height: "100px",
            backgroundColor: "transparent",
          },
          "& .MuiInputBase-root": {
            height: "40%",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "red",
          color: "red",
          "& .MuiFormLabel-root": {
            lineHeight: "40px",

            "&.focus": {
              height: "50px",
            },
          },
        },
      },
    },
  },
});
