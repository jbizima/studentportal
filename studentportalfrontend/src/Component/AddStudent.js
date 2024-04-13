import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { useState } from "react";

export default function Addstudent() {
  const [name, setName] = useState("");
  const [level, setLevel] = useState("");

  const studentObject = { name, level };

  //**function that collects values and send to API then to databse */
  function submitData(e) {
    e.preventDefault();
    fetch("http://localhost:8080/student/add", {
      method: "POST",
      headers: { "Content-Type": "application/JSON" },
      body: JSON.stringify(studentObject),
    })
      .then((sus) => console.log(sus))
      .catch((e) => console.log(e));
  }
  return (
    <div>
        <h1>Add student</h1>
      <Box
        
        component="form"
        sx={{
          "& > :not(style)": { m: 0.5, width: "60%" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          label="name"
          variant="outlined"
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="level"
          variant="outlined"
          onChange={(e) => setLevel(e.target.value)}
        />
        <Button
          onClick={(e) => submitData(e)}
          style={{ padding: "15px", margin: "auto" }}
          variant="contained"
        >
          Add Student
        </Button>
      </Box>
    </div>
  );
}
