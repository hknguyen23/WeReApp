import React, { useState } from 'react';
import {
    Container,
    Grid,
    makeStyles
} from '@material-ui/core';
import AnalystCard from "./AnalystCard";
function Profile() {
  return (
      <Container maxWidth={false}>
          <Grid
              container
              spacing={3}
          >
              <Grid
                  item
                  lg={3}
                  sm={6}
                  xl={3}
                  xs={12}
              >
                  <Budget />
              </Grid>
              <Grid
                  item
                  lg={3}
                  sm={6}
                  xl={3}
                  xs={12}
              >
                  <TotalCustomers />
              </Grid>
              <Grid
                  item
                  lg={3}
                  sm={6}
                  xl={3}
                  xs={12}
              >
                  <TasksProgress />
              </Grid>
              <Grid
                  item
                  lg={3}
                  sm={6}
                  xl={3}
                  xs={12}
              >
                  <TotalProfit />
              </Grid>
              <Grid
                  item
                  lg={8}
                  md={12}
                  xl={9}
                  xs={12}
              >
                  <Sales />
              </Grid>
              <Grid
                  item
                  lg={4}
                  md={6}
                  xl={3}
                  xs={12}
              >
                  <AnalystCard />
              </Grid>
              <Grid
                  item
                  lg={4}
                  md={6}
                  xl={3}
                  xs={12}
              >
                  <AnalystCard />
              </Grid>
          </Grid>
      </Container>
  );
}

export default Profile;
