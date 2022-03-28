import React, { Component } from "react";
import Button from "@mui/material/Button";
import { Link, NavLink } from "react-router-dom";
import {
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";

class Advertisements extends Component {
  //  constructor(props) {
  //    super(props);
  //    this.state = {
  state = {
    success: false,
    messages: [],
    data: [],
  };
  //  }

  componentDidMount() {
    fetch("osarapi/api/reqViewAdvertisement")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            success: result.Success,
            messages: result.Messages,
            data: result.data,
          });

          console.log(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error);
        }
      );
  }

  render() {
    const { success, messages, data } = this.state;
    return (
      <>
        <Grid item xs={8} sm={8} md={8}>
          {data.map((value, index) => (
            <Grid item xs={12} key={index}>
              <Card className="indent">
                <CardContent>
                  <Typography>
                    Advt No : {value.advertisementNo}
                    {value.postCode}
                    {value.subjectcode}
                  </Typography>
                  <Typography>
                    {value.postname} ({value.subjectname})
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    component={Link}
                    to={"/application"}
                    variant="outlined"
                    size="small"
                    color="primary"
                  >
                    Apply
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Grid item xs={4} sm={4} md={4}>
          <Button
            component={Link}
            to={"/application"}
            variant="contained"
            color="primary"
          >
            Already Applied ?
          </Button>
        </Grid>
      </>
    );
  }
}

export default Advertisements;
