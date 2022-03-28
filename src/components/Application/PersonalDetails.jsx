import { Container, Paper, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { Component } from "react";
class PersonalDetails extends Component {
  state = {};
  render() {
    return (
      <>
        <Paper>
          <Box padding={1}>
            <TextField
              id="firstName"
              label="First Name"
              variant="standard"
              fullWidth
            />
          </Box>
        </Paper>
      </>
    );
  }
}

export default PersonalDetails;
