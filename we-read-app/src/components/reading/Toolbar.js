import React, { useState } from 'react';
import {
  Container,
  Box,
  TextField,
  Typography,
  Switch,
  makeStyles
} from '@material-ui/core';
import FontDownloadIcon from '@material-ui/icons/FontDownload';

const useStyles = makeStyles((theme) => ({
  root: (theme) => ({
    display: 'flex',
    flexDirection: 'rows',
    justifyContent: 'center',
    backgroundColor: theme.body
  }),
  toolbar: (theme) => ({
    width: 'auto',
    display: 'flex',
    flexDirection: 'rows',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '14px',
    fontSize: '20px',
    color: theme.text
  }),
  marginIcon: {
    marginRight: '5px'
  },
  marginGroup: {
    marginRight: '24px'
  },
  fontIcon: {
    width: '33px',
    height: '33px',
    color: '#2F80ED',
  },
  fontDropdown: {
    width: '200px'
  },
  textField: (theme) => ({
    backgroundColor: theme.body,
    "& .MuiInputBase-root": {
      color: theme.text,
      border: theme.fieldBorder,
      backgroundColor: theme.fieldBackground,
      "& option": {
        backgroundColor: theme.body,
      }
    },
    "& .MuiSelect-icon": {
      color: theme.text,
    }
  }),
}));

const data1 = [8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28];
const data2 = ['Arial', 'Roboto', 'Cambria', 'Georgia', 'Times New Roman'];
const data3 = ['50%', '60%', '70%', '80%', '90%'];

const Toolbar = (props) => {
  const classes = useStyles(props.theme);
  const [listFontSize, setListFontSize] = useState(data1);
  const [listFont, setListFont] = useState(data2);
  const [listIndent, setListIndent] = useState(data3);

  const handleChangeFont = (e) => {
    props.setFont(e.target.value);
  }
  const handleChangeFontSize = (e) => {
    props.setFontSize(e.target.value);
  }
  const handleChangeIndent = (e) => {
    props.setIndent(e.target.value);
  }

  const handleChangeTheme = () => {
    if (props.isDarkMode) {
      props.setIsDarkMode(false);
    }
    else {
      props.setIsDarkMode(true);
    }
  }

  return (
    <React.Fragment>
      <Container className={classes.root} maxWidth="lg">
        <Box className={classes.toolbar}>
          <Typography className={classes.marginIcon}>Dark mode</Typography>
          <Switch className={classes.marginGroup} onChange={handleChangeTheme}
            color="secondary" name="dark"
          />
          <FontDownloadIcon className={`${classes.fontIcon} ${classes.marginIcon}`} />
          <TextField className={`${classes.fontDropdown} ${classes.marginGroup} ${classes.textField}`}
            size="small" name="font" required select variant="outlined" value={props.font}
            onChange={handleChangeFont} SelectProps={{ native: true }}
          >
            {listFont.map((option) => (
              <option key={option} value={option} >
                {option}
              </option>
            ))}
          </TextField>
          <Typography className={classes.marginIcon}>Size</Typography>
          <TextField className={`${classes.marginGroup} ${classes.textField}`} size="small" name="fontSize"
            required select variant="outlined" value={props.fontSize}
            onChange={handleChangeFontSize} SelectProps={{ native: true }}
          >
            {listFontSize.map((option) => (
              <option key={option} value={option} >
                {option}
              </option>
            ))}
          </TextField>
          <Typography className={classes.marginIcon}>Indent</Typography>
          <TextField className={`${classes.marginGroup} ${classes.textField}`} size="small" name="indent"
            required select variant="outlined" value={props.indent}
            onChange={handleChangeIndent} SelectProps={{ native: true }}
          >
            {listIndent.map((option) => (
              <option key={option} value={option} >
                {option}
              </option>
            ))}
          </TextField>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default Toolbar;