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
  Dialog,
  DialogTitle,
  DialogContent,
  CircularProgress,
  Typography,
  FormControlLabel,
  FormHelperText,
  Checkbox,
  makeStyles
} from '@material-ui/core';
import { useHistory } from 'react-router-dom'
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import * as data from '../../resources/data/data';
import { detailTest } from '../../resources/data/data';

import GroupHeader from './groupHeader'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    width: '90%',
    minHeight: '100%',
    borderRadius: '4px',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  cardHeader: {
    color: '#FFFFFF',
    backgroundColor: '#0452BB'
  },
  cardContent: {
    padding: '16px 20px',
    display: 'flex',
    justifyContent: 'center'
  },
  cardContentGrid: {
    width: '90%'
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
    direction: "row",
    justify: "flex-start",
    alignItems: "flex-start",
  },
  formCheckBoxGridItem: {
    marginBottom: '-10px'
  },
  FormHelperText: {
    marginLeft: '14px',
    marginTop: '4px',
  },
  imageBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',

  },
  image: {
    height: '168px',
    width: '168px',
    paddingBottom: '10px'
  },
  imageButton: {
    width: '117px',
    height: '36px',
    backgroundColor: '#2196F3',
    marginRight: '10px',
    textTransform: 'none',
  },
  deleteImageButton: {
    minHeight: 0,
    minWidth: 0,
    textTransform: 'none',
    "&:hover": {
      backgroundColor: "#FFFFFF",
      textDecoration: 'underline',
    }
  },
  uploadButton: {
    backgroundColor: '#2196F3',
    color: '#FFFFFF',
  },
  dialogContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px'
  }
}));

const ageGroup = [
  {
    value: 'Mọi lứa tuổi',
    label: 'Mọi lứa tuổi'
  },
  {
    value: 'Người lớn 18+',
    label: 'Người lớn 18+'
  }
];

const language = [
  {
    value: 'Tiếng Việt',
    label: 'Tiếng Việt'
  },
  {
    value: 'Tiếng Anh',
    label: 'Tiếng Anh'
  },
  {
    value: 'Ngôn ngữ khác',
    label: 'Ngôn ngữ khác'
  }
];

function Uploading() {
  const histoty = useHistory();

  const classes = useStyles();
  const [values, setValues] = useState({
    title: '',
    shortDes: '',
    longDes: '',
    age: 'Mọi lứa tuổi',
    language: 'Tiếng Việt',
    genre: {},
    tags: {},
    titleChapter: '',
    data: '',
  });
  const [errors, setErrors] = useState({
    title: '',
    shortDes: '',
    longDes: '',
    age: '',
    language: '',
    titleChapter: '',
    data: '',
  });

  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

  // intial data
  useEffect(() => {
    window.scrollTo(0, 0);
    var temp = {};
    for (var i = 0; i < data.category.length; i++) {
      temp[data.category[i].id] = false;
    }
    var temp2 = {};
    for (var j = 0; j < data.tags.length; j++) {
      temp2[data.tags[j].id] = false;
    }

    setValues({
      ...values,
      genre: temp,
      tags: temp2
    });
  }, [])

  // upload image 
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile]);

  const onSelectFile = e => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0]);
    e.target.value = '';
  }

  const onDeleteImage = (e) => {
    setSelectedFile(undefined);
    return;
  }

  // handle change of form
  const handleChange = (event) => {                     // change textfield
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  }

  const handleChangeEditorDes = (editorState) => {      // change long des editor 
    setValues({
      ...values,
      longDes: editorState
    });
  }

  const handleChangeEditorData = (editorState) => {   // change data editor 
    setValues({
      ...values,
      data: editorState
    });
  }

  const handleChangeGenre = (event) => {             // change genre checkbox 
    setValues({
      ...values,
      genre: { ...values.genre, [event.target.name]: event.target.checked }
    });
  }

  const handleChangeTags = (event) => {            // change tags checkbox 
    setValues({
      ...values,
      tags: { ...values.tags, [event.target.name]: event.target.checked }
    });
  }

  // validate for form
  const handleValidate = (event) => {                 // validate textfield
    if ((event.target.name === 'title' || event.target.name === 'titleChapter') && event.target.value === '') {
      setErrors({
        ...errors,
        [event.target.name]: "* Không được để trống"
      });
    }
    else {
      setErrors({
        ...errors,
        [event.target.name]: ""
      });
    }
  }
  const handleValidateEditorDes = (e, editorState) => {   // validate editor
    if (!editorState.getCurrentContent().hasText()) {
      setErrors({
        ...errors,
        longDes: "* Không được để trống"
      });
    }
    else {
      setErrors({
        ...errors,
        longDes: ""
      });
    }
  }

  const handleValidateEditorData = (e, editorState) => {
    if (!editorState.getCurrentContent().hasText()) {
      setErrors({
        ...errors,
        data: "* Không được để trống"
      });
    }
    else {
      setErrors({
        ...errors,
        data: ""
      });
    }
  }

  var genreList = Object.entries(values.genre);                     // validate genre checkbox
  const selectedGenre = genreList.filter((v) => v[1] === true).length;
  const errorGenre = selectedGenre > 4 || selectedGenre < 1;

  // submit form
  const onSubmit = async (event) => {
    var tempErrors = { ...errors };
    if (values.title === '') {
      tempErrors.title = "* Không được để trống";
    }
    if (values.titleChapter === '') {
      tempErrors.titleChapter = "* Không được để trống";
    }
    if (values.longDes === '' || !values.longDes.getCurrentContent().hasText()) {
      tempErrors.longDes = "* Không được để trống";
    }
    if (values.data === '' || !values.data.getCurrentContent().hasText()) {
      tempErrors.data = "* Không được để trống";
    }
    setErrors(tempErrors);

    var errorList = Object.entries(tempErrors);
    const hasError = errorList.filter((v) => v[1] !== '').length > 0;
    if (hasError || errorGenre) {
      console.log(tempErrors);
      window.scrollTo(0, 0);
    }
    else {
      setOpenWaiting(true);
      console.log(values)
      console.log(selectedFile)
      detailTest.title = values.title;
      detailTest.titleChapter = values.titleChapter;

      detailTest.genres = Object.keys(values.genre).map((key) => {
        if (values.genre[key])
          return Number(key)
      });
      detailTest.tags = Object.keys(values.tags).map((key) => {
        if (values.tags[key])
          return Number(key)
      });
      console.log(detailTest)
      detailTest.languages = [{
        id: 1,
        name: values.language
      }]
      detailTest.age = [{
        id: 1,
        name: values.age
      }]
      detailTest.description = draftToHtml(convertToRaw(values.longDes.getCurrentContent()));
      detailTest.data = draftToHtml(convertToRaw(values.data.getCurrentContent()))
      await delay(500);
      histoty.push("/Detail/1000");
    }
  };

  // dialog for when waiting for quick play
  const [openWaiting, setOpenWaiting] = useState(false);
  const delay = ms => new Promise(res => setTimeout(res, ms));

  const handleCloseSuccess = (e) => {
    setOpenWaiting(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={openWaiting}
        onClose={(e) => handleCloseSuccess(e)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Đang đăng truyện...</DialogTitle>
        <DialogContent className={classes.dialogContent}>
          <CircularProgress />
        </DialogContent>
      </Dialog>
      <Container className={classes.root} maxWidth={false}>
        <form autoComplete="off" noValidate>
          <Card>
            <CardHeader className={classes.cardHeader}
              avatar={<MenuBookIcon style={{ fontSize: 30 }} />}
              titleTypographyProps={{ variant: 'h5', align: "left" }}
              title="Đăng truyện mới" />

            <GroupHeader title="Thông tin cơ bản" />
            <CardContent className={classes.cardContent}>
              <Grid container spacing={2} className={classes.cardContentGrid}>
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
                    error={errors.title !== '' ? true : false}
                    helperText={errors.title !== '' ? errors.title : ''}
                    fullWidth
                    name="title"
                    onChange={handleChange}
                    onBlur={handleValidate}
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
                    helperText={false ? "daw" : ""}
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
                    toolbarClassName={classes.toolbarStyle}
                    editorClassName={classes.editorStyleDes}
                    wrapperClassName={classes.wrapperStyle}
                    onEditorStateChange={handleChangeEditorDes}
                    onBlur={handleValidateEditorDes}
                  />
                  <FormHelperText className={classes.FormHelperText} error>
                    {errors.longDes !== '' ? errors.longDes : ''}
                  </FormHelperText>
                </Grid>
              </Grid>
            </CardContent>

            <GroupHeader title="Thông tin chi tiết" />
            <CardContent className={classes.cardContent}>
              <Grid container spacing={2} className={classes.cardContentGrid}>
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
                    name="age"
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
                  <Grid container spacing={0} className={classes.formCheckBoxGrid}>
                    {data.category.map(genre => (
                      <Grid item xs={3}>
                        <FormControlLabel
                          className={classes.formCheckBoxGridItem}
                          control={<Checkbox onChange={handleChangeGenre} name={genre.id} />}
                          label={genre.name}
                        />
                      </Grid>
                    ))}
                  </Grid>
                  <FormHelperText className={classes.FormHelperText} error={errorGenre}> * Chọn từ 1 tới 4 thể loại </FormHelperText>
                </Grid>

                <Grid item xs={3}>
                  <Container className={classes.inputLabel}>
                    <Typography>Tags</Typography>
                  &nbsp;
                  <Typography color="error"> </Typography>
                  </Container>
                </Grid>
                <Grid item xs={9}>
                  <Grid container spacing={0} className={classes.formCheckBoxGrid}>
                    {data.tags.map(tags => (
                      <Grid item xs={3}>
                        <FormControlLabel
                          className={classes.formCheckBoxGridItem}
                          control={<Checkbox onChange={handleChangeTags} name={tags.id} />}
                          label={tags.name}
                        />
                      </Grid>
                    ))}
                  </Grid>
                  <FormHelperText className={classes.FormHelperText}> </FormHelperText>

                </Grid>

              </Grid>
            </CardContent>

            <GroupHeader title="Ảnh" />
            <CardContent className={classes.cardContent}>
              <Grid container spacing={2} className={classes.cardContentGrid}>
                <Grid item xs={3}>
                  <Container className={classes.inputLabel}>
                    <Typography>Ảnh bìa truyện </Typography>
                  &nbsp;
                  <Typography color="error"> </Typography>
                  </Container>
                </Grid>
                <Grid item xs={9}>
                  <div className={classes.imageBox}>
                    <img className={classes.image} src={preview} alt='' />
                    <Box>
                      <Button className={classes.imageButton} color="primary" variant="contained" component="label">
                        Đăng ảnh
                    <input type='file' hidden onChange={onSelectFile} />
                      </Button>
                      <Button className={classes.deleteImageButton} color="primary" size="small" onClick={onDeleteImage}>
                        Xóa
                    </Button>
                    </Box>
                  </div>
                </Grid>
              </Grid>
            </CardContent>

            <GroupHeader title="Chương truyện đầu tiên" />
            <CardContent className={classes.cardContent}>
              <Grid container spacing={2} className={classes.cardContentGrid}>
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
                    error={errors.titleChapter !== '' ? true : false}
                    helperText={errors.titleChapter !== '' ? errors.titleChapter : ''}
                    fullWidth
                    name="titleChapter"
                    onChange={handleChange}
                    onBlur={handleValidate}
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
                    onEditorStateChange={handleChangeEditorData}
                    onBlur={handleValidateEditorData}
                  />
                  <FormHelperText className={classes.FormHelperText} error>
                    {errors.data !== '' ? errors.data : ''}
                  </FormHelperText>

                </Grid>
              </Grid>
            </CardContent>

            <Divider />
            <Box display="flex" justifyContent="flex-end" p={2} >
              <Button className={classes.uploadButton} color='primary' variant="contained" onClick={onSubmit}>
                Đăng truyện
            </Button>
            </Box>
          </Card>
        </form>
      </Container>
    </React.Fragment>
  );
}

export default Uploading;