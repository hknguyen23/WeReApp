import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import {
    Container,
    Grid,
    makeStyles,
    Button, Box
} from '@material-ui/core';
import AnalystCard from "./AnalystCard";
import FavoriteCard from "./FavoriteCard";
import ManagementCard from "./ManagementCard";
import SettingCard from "./SettingCard";
import Infor from "./Infor";
import AddNovel from "./AddNovel";

function Profile() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    const history = useHistory();

    return (
        <Container maxWidth={false}>
            <Grid>
                <Infor />
            </Grid>
            <Grid
                container
                spacing={2}
                direction="row"  justify="center"  alignItems="center"
            >
                <Grid
                    item
                    lg={2}
                    sm={6}
                    xl={2}
                    xs={12}
                >
                    <Button
                        size="large"
                    >
                        <FavoriteCard />
                    </Button>
                </Grid>
                <Grid
                    item
                    lg={2}
                    sm={6}
                    xl={2}
                    xs={12}
                >
                    <Button size="large">
                        <AnalystCard />
                    </Button>
                </Grid>
                <Grid
                    item
                    lg={2}
                    sm={6}
                    xl={2}
                    xs={12}
                >
                    <Button size="large"
                            onClick={() => { history.push("/Uploading"); }}
                    >
                        <AddNovel />
                    </Button>
                </Grid>
                <Grid
                    item
                    lg={2}
                    sm={6}
                    xl={2}
                    xs={12}
                >
                    <Button size="large"
                    >
                        <ManagementCard />
                    </Button>
                </Grid>
                <Grid
                    item
                    lg={2}
                    sm={6}
                    xl={2}
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
