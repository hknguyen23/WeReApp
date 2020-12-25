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


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
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
  cardContent: {
    padding: '16px 20px',
  },
  image: {
    height: '168px',
    width: '168px',
    paddingBottom: '10px'
  },

}));

const Uploading = () => {
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
          <img className={classes.image} src={preview} />

        <Divider />
      </Card>
    </Container>
  );
}

export default Uploading;