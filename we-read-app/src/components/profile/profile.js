import React, { useState } from 'react';
import {
    Container,
    Grid,
    makeStyles,
    Button
} from '@material-ui/core';
import AnalystCard from "./AnalystCard";
import FavoriteCard from "./FavoriteCard";
import ManagementCard from "./ManagementCard";
import SettingCard from "./SettingCard";
import Infor from "./Infor";
function Profile() {
  return (
      <Container maxWidth={false}>
          <Grid>
              <Infor />
          </Grid>
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
                  <Button size="large">
                      <FavoriteCard />
                  </Button>
              </Grid>
              <Grid
                  item
                  lg={3}
                  sm={6}
                  xl={3}
                  xs={12}
              >
                  <Button size="large">
                      <AnalystCard />
                  </Button>
              </Grid>
              <Grid
                  item
                  lg={3}
                  sm={6}
                  xl={3}
                  xs={12}
              >
                  <Button size="large">
                      <ManagementCard />
                  </Button>
              </Grid>
              <Grid
                  item
                  lg={3}
                  sm={6}
                  xl={3}
                  xs={12}
              >
                  <Button size="large">
                      <SettingCard />
                  </Button>
              </Grid>
          </Grid>

      </Container>
  );
}

export default Profile;
