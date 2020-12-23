import React, { useState } from 'react';
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
  FormControl,
  FormControlLabel,
  FormHelperText,
  Checkbox,
  makeStyles
} from '@material-ui/core';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import GroupHeader from './groupHeader'

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
  inputLabel: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: '8px 0px 24px 0px',
    fontSize: 16,
  },
  editorStyleDes: {
    minHeight: '200px',
    maxHeight: '200px',
  },
  editorStyleChapter: {
    minHeight: '400px',
    maxHeight: '400px',
  },
  toolbarStyle: {
    marginBottom: '0px',
    borderBottom: "1px solid #C0C0C0",
  },
  wrapperStyle: {
    border: "1px solid #C0C0C0",
  },

  formCheckBoxGrid: {
    textAlign: 'left',
    width: '100%',
    marginBottom: '5px',
  },
  formCheckBoxGridItem: {
    marginBottom: '-10px'
  },
}));

const ageGroup = [
  {
    value: 'all',
    label: 'Mọi lứa tuổi'
  },
  {
    value: 'teen',
    label: 'Teen'
  },
  {
    value: '18',
    label: 'Trên 18 tuổi'
  }
];

const language = [
  {
    value: 'vietnam',
    label: 'Tiếng Việt'
  },
  {
    value: 'english',
    label: 'Tiếng Anh'
  },
  {
    value: 'another',
    label: 'Ngôn ngữ khác'
  }
];

const genre = [
  {
    value: 'action',
    label: 'Action'
  },
  {
    value: 'comedy',
    label: 'Comedy'
  },
  {
    value: 'a',
    label: 'a'
  },
  {
    value: 'a',
    label: 'a'
  },
  {
    value: 'a',
    label: 'a'
  },
  {
    value: 'a',
    label: 'a'
  },
  {
    value: 'a',
    label: 'a'
  },
  {
    value: 'a',
    label: 'a'
  },
  {
    value: 'a',
    label: 'a'
  },
  {
    value: 'a',
    label: 'a'
  },

];

function Uploading() {
  const classes = useStyles();
  const [values, setValues] = useState({
    title: '',
    shortDes: '',
    longDes: '',
    age: '',
    language: '',
    genre: [],
    tags: [],
    picture: '',
    titleChap: '',
    data: '',
  });

  const handleChange = (event) => {
    /*
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
    */
  };

  return (
    <Container className={classes.root} maxWidth="lg">
      <form autoComplete="off" noValidate>
        <Card>
          <CardHeader className={classes.cardHeader}
            avatar={<MenuBookIcon style={{ fontSize: 30 }} />}
            titleTypographyProps={{ variant: 'h5', align: "left" }}
            title="Đăng truyện mới" />

          <GroupHeader title="Thông tin cơ bản" />
          <CardContent className={classes.cardContent}>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <Container className={classes.inputLabel}>
                  <Typography>Tiêu đề </Typography>
                  &nbsp;
                  <Typography color="error"> *</Typography>
                </Container>
              </Grid>
              <Grid item xs={9}>
                <TextField
                  size="small"
                  error={false}
                  helperText={true ? "daw" : ""}
                  fullWidth
                  name="title"
                  onChange={handleChange}
                  required
                  value={values.firstName}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={3}>
                <Container className={classes.inputLabel}>
                  <Typography>Mô tả ngắn</Typography>
                  &nbsp;
                  <Typography color="error">  </Typography>
                </Container>
              </Grid>
              <Grid item xs={9}>
                <TextField
                  size="small"
                  error={false}
                  helperText={true ? "daw" : ""}
                  fullWidth
                  name="shortDes"
                  onChange={handleChange}
                  required
                  value={values.firstName}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={3}>
                <Container className={classes.inputLabel}>
                  <Typography>Mô tả dài</Typography>
                  &nbsp;
                  <Typography color="error"> *</Typography>
                </Container>
              </Grid>
              <Grid item xs={9}>
                <Editor
                  name='longDes'
                  onChange={handleChange}
                  toolbarClassName={classes.toolbarStyle}
                  editorClassName={classes.editorStyleDes}
                  wrapperClassName={classes.wrapperStyle}
                />
              </Grid>
            </Grid>
          </CardContent>

          <GroupHeader title="Thông tin chi tiết" />
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <Container className={classes.inputLabel}>
                  <Typography>Độ tuổi </Typography>
                  &nbsp;
                  <Typography color="error">  </Typography>
                </Container>
              </Grid>
              <Grid item xs={9}>
                <TextField
                  size="small"
                  fullWidth
                  name="ageGroup"
                  onChange={handleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  value={values.state}
                  variant="outlined"
                >
                  {ageGroup.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </TextField>

              </Grid>
              <Grid item xs={3}>
                <Container className={classes.inputLabel}>
                  <Typography>Ngôn ngữ</Typography>
                  &nbsp;
                  <Typography color="error">  </Typography>
                </Container>
              </Grid>
              <Grid item xs={9}>
                <TextField
                  size="small"
                  fullWidth
                  name="language"
                  onChange={handleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  value={values.state}
                  variant="outlined"
                >
                  {language.map((option) => (
                    <option
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </TextField>

              </Grid>

              <Grid item xs={3}>
                <Container className={classes.inputLabel}>
                  <Typography>Thể loại</Typography>
                  &nbsp;
                  <Typography color="error"> </Typography>
                </Container>
              </Grid>
              <Grid item xs={9}>
                <FormControl required error={true} component="fieldset">
                  <Grid container spacing={0} className={classes.formCheckBoxGrid}>
                    {genre.map(genre => (
                      <Grid item xs={3}>
                        <FormControlLabel
                          className={classes.formCheckBoxGridItem}
                          control={<Checkbox onChange={handleChange} name={genre.value} />}
                          label={genre.label}
                        />
                      </Grid>
                    ))}
                  </Grid>
                  <FormHelperText> * Tối đa 4 thể loại </FormHelperText>
                </FormControl>
              </Grid>

              <Grid item xs={3}>
                <Container className={classes.inputLabel}>
                  <Typography>Tags</Typography>
                  &nbsp;
                  <Typography color="error"> </Typography>
                </Container>
              </Grid>
              <Grid item xs={9}>
                <FormControl required error={true} component="fieldset">
                  <Grid container spacing={0} className={classes.formCheckBoxGrid}>
                    {genre.map(genre => (
                      <Grid item xs={3}>
                        <FormControlLabel
                          className={classes.formCheckBoxGridItem}
                          control={<Checkbox onChange={handleChange} name={genre.value} />}
                          label={genre.label}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </FormControl>
              </Grid>

            </Grid>
          </CardContent>

          <GroupHeader title="Ảnh" />
          <CardContent className={classes.cardContent}>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <Container className={classes.inputLabel}>
                  <Typography>Ảnh bìa truyện </Typography>
                  &nbsp;
                  <Typography color="error"> </Typography>
                </Container>
              </Grid>
              <Grid item xs={9}>
              </Grid>
            </Grid>
          </CardContent>

          <GroupHeader title="Chương truyện đầu tiên" />
          <CardContent className={classes.cardContent}>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <Container className={classes.inputLabel}>
                  <Typography>Tiêu đề chương </Typography>
                  &nbsp;
                  <Typography color="error"> *</Typography>
                </Container>
              </Grid>
              <Grid item xs={9}>
                <TextField
                  size="small"
                  error={false}
                  helperText={true ? "daw" : ""}
                  fullWidth
                  name="title"
                  onChange={handleChange}
                  required
                  value={values.firstName}
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={3}>
                <Container className={classes.inputLabel}>
                  <Typography>Nội dung</Typography>
                  &nbsp;
                  <Typography color="error"> *</Typography>
                </Container>
              </Grid>
              <Grid item xs={9}>
                <Editor
                  toolbarClassName={classes.toolbarStyle}
                  editorClassName={classes.editorStyleChapter}
                  wrapperClassName={classes.wrapperStyle}
                />
              </Grid>
            </Grid>
          </CardContent>

          <Divider />
          <Box display="flex" justifyContent="flex-end" p={2} >
            <Button color="primary" variant="contained">
              Đăng truyện
            </Button>
          </Box>
        </Card>
      </form>
    </Container>
  );
}

export default Uploading;