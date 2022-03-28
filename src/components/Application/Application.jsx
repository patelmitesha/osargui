import React, { Component } from "react";
import ExperienceDetails from "./ExperienceDetails";
import PersonalDetails from "./PersonalDetails";
import QualificationDetails from "./QualificationDetails";
import Button from "@mui/material/Button";
import {
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";

class Application extends Component {
  state = {
    page: 1,
  };
  constructor(props) {
    super(props);
    this.goToNextPage = this.goToNextPage.bind(this);
    this.goToPreviousPage = this.goToPreviousPage.bind(this);
  }

  goToNextPage() {
    var tmpPage = this.state.page;
    if (tmpPage <= 2) tmpPage++;
    console.log(tmpPage);
    this.setState({
      page: tmpPage,
    });
  }

  goToPreviousPage() {
    var tmpPage = this.state.page;
    if (tmpPage > 1) tmpPage--;
    console.log(tmpPage);
    this.setState({
      page: tmpPage,
    });
  }
  render() {
    return (
      <>
        <div>
          Application :
          <Grid item xs={8} sm={8} md={8}>
            {this.state.page === 1 && <PersonalDetails />}
            {this.state.page === 2 && <QualificationDetails />}
            {this.state.page === 3 && <ExperienceDetails />}
          </Grid>
        </div>
        <br />
        <Button
          onClick={this.goToPreviousPage}
          variant="contained"
          color="primary"
        >
          Previous
        </Button>
        &nbsp;&nbsp;
        <Button onClick={this.goToNextPage} variant="contained" color="primary">
          Next
        </Button>
      </>
    );
  }
}

export default Application;
