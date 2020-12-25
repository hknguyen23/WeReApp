import React, { useState, useEffect } from 'react';
import {
  Container,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  Typography,
  FormControlLabel,
  FormHelperText,
  Checkbox,
  makeStyles
} from '@material-ui/core';
import MenuBookIcon from '@material-ui/icons/MenuBook';

import ReadingPanel from './ReadingPanel';
import InfoPanel from './InfoPanel';
import Toolbar from './Toolbar';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    width: '90%',
    maxWidth: '940px',
    minHeight: '100%',
    borderRadius: '4',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  cardHeader: {
    color: '#FFFFFF',
    backgroundColor: '#0452BB'
  },
  infoPanel: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: '5px',
  },
  image: {
    height: '230px',
    width: '200px',
    paddingBottom: '10px'
  },

}));

const Reading = () => {
  const classes = useStyles();
  const [values, setValues] = useState({
    title: '',
    shortDes: '',
    longDes: '',
    age: '',
    language: '',
    genre: {},
    tags: {},
    titleChapter: '',
    data: '',
  });

  return (
    <Container className={classes.root} maxWidth="lg">
      <Card>
        <CardHeader className={classes.cardHeader}
          avatar={<MenuBookIcon style={{ fontSize: 30 }} />}
          titleTypographyProps={{ variant: 'h5', align: "left" }}
          title="Đọc truyện" />
        <CardContent className={classes.infoPanel}>
          <InfoPanel />
          <Divider />
          <Toolbar />
          <Divider />
          <ReadingPanel />
        </CardContent>
      </Card>
    </Container>
  );
}

export default Reading;