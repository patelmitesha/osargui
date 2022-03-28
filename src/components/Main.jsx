import { Button, Container, Grid, Link } from "@mui/material";
import React, { Component } from "react";
import Advertisements from "./Advertisements";
import Application from "./Application/Application";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PersonalDetails from "./Application/PersonalDetails";

class Main extends Component {
  state = {};
  render() {
    return (
      <>
        <div>Header</div>
        <div>
          <Container>
            <BrowserRouter>
              <Routes>
                <Route path="advertisements" element={<Advertisements />} />
                <Route path="application" element={<Application />}>
                  <Route path="personaldetails" element={<PersonalDetails />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </Container>
        </div>
        <div>Footer</div>
      </>
    );
  }
}

export default Main;
